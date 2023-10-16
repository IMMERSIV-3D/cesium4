import Check from "../Core/Check.js";
//import ClippingPlaneCollection from "./ClippingPlaneCollection.js";

/**
 * Gets the GLSL functions needed to retrieve collections of ClippingPlaneCollections from a OptimizedClippingCollection's texture.
 *
 * @param {Array} [optimizedClippingCollection] The array of clippingPlaneCollections with a defined texture.
 * @param {Context} context The current rendering context.
 * @returns {String} A string containing GLSL functions for retrieving clipping planes.
 * @private
 */
function getOptimizedClippingFunction(optimizedClippingCollection, context) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.object(optimizedClippingCollection, optimizedClippingCollection);
  Check.typeOf.object(context, context);
  //>>includeEnd('debug');

  // var unionClippingRegions = clippingPlaneCollection.unionClippingRegions;
  // var clippingPlanesLength = 0;

  const planeCollectionsPlanesTexture =
    optimizedClippingCollection.planeCollectionsPlanesTexture;
  const width = planeCollectionsPlanesTexture.width;
  const height = planeCollectionsPlanesTexture.height;
  //const maxLength = optimizedClippingCollection.maxCollectionLength;

  //const usingFloatTexture = ClippingPlaneCollection.useFloatTexture(context);

  let functions = getClippingPlaneFloat(width, height);

  functions += "\n";

  // OptimizedClippingCollection is now not abled to deal with unionClippingRegions.
  //functions += clippingFunctionIntersect3(
  //  optimizedClippingCollection.optimizedCollectionsCount,
  //  optimizedClippingCollection.planeCollectionsCount
  //);

  //functions += clippingFunctionIntersect2(
  //  optimizedClippingCollection.optimizedCollectionsCount,
  //  optimizedClippingCollection.planeCollectionsCount
  //);

  functions += clippingByPlanesFunctionIntersect(
    optimizedClippingCollection.planeCollectionsCount
  );

  functions += clippingFunctionIntersect(
    optimizedClippingCollection.optimizedCollectionsCount,
    optimizedClippingCollection.planeCollectionsCount
  );
  //console.log(clippingFunctionIntersect(
  //  optimizedClippingCollection.optimizedCollectionsCount,
  //  optimizedClippingCollection.planeCollectionsCount
  //));
  // functions += unionClippingRegions
  //   ? clippingFunctionUnion(clippingPlanesLength)
  //   : clippingFunctionIntersect(clippingPlanesLength);
  return functions;
}

//// This fucntion has not be rewritten! Don't use it directly.
//function clippingFunctionUnion(clippingPlanesLength) {
//  const functionString =
//    `float clip(vec4 fragCoord, sampler2D clippingPlanes, mat4 clippingPlanesMatrix)\n
//      {\n
//        vec4 position = czm_windowToEyeCoordinates(fragCoord);\n
//        vec3 clipNormal = vec3(0.0);\n
//        vec3 clipPosition = vec3(0.0);\n
//        float clipAmount;\n  // For union planes, we want to get the min distance. So we set the initial value to the first plane distance in the loop below.
//        float pixelWidth = czm_metersPerPixel(position);\n
//        bool breakAndDiscard = false;\n
//        for (int i = 0; i < + ${clippingPlanesLength} ; ++i)\n
//        {\n
//            vec4 clippingPlane = getClippingPlane(clippingPlanes, i, clippingPlanesMatrix);\n
//            clipNormal = clippingPlane.xyz;\n
//            clipPosition = -clippingPlane.w * clipNormal;\n
//            float amount = dot(clipNormal, (position.xyz - clipPosition)) / pixelWidth;\n
//            clipAmount = czm_branchFreeTernary(i == 0, amount, min(amount, clipAmount));\n
//            if (amount <= 0.0)\n
//            {\n
//               breakAndDiscard = true;\n
//               break;\n // HLSL compiler bug if we discard here: https://bugs.chromium.org/p/angleproject/issues/detail?id=1945#c6
//            }\n
//        }\n
//        if (breakAndDiscard) {\n
//            discard;\n
//        }\n
//        return clipAmount;\n
//      }\n`;
//  return functionString;
//}

function clippingFunctionIntersect(
  optimizedCollectionsCount,
  planeCollectionsCount
) {
  const functionString = `float clip(
    vec4 fragCoord, 
    highp sampler2D clippingPlaneCollectionsPlanes, 
    mediump sampler2D clippingPlaneCollectionSpans, 
    mat4 clippingPlanesMatrix, 
    mat4 clippingPlanesModelMatrix, 
    //mediump sampler2D clippingPlaneCollectionLengths, 
    //mediump sampler2D clippingPlaneCollectionsPlaneStates, 
    //highp sampler2D clippingPlaneCollectionsPlaneFromVertices, 
    //highp sampler2D clippingPlaneCollectionsPlaneToVertices, 
    mediump sampler2D optimizedCollectionSpans, 
    //mediump sampler2D optimizedCollectionStates, 
    highp sampler2D optimizedCollectionColliders//, 
    //int optimizedCollectionId
    ) 
    { 
      vec4 position = czm_windowToEyeCoordinates(fragCoord); 
      float clipAmount = 1.0; 
      vec4 collider = vec4(0.0); 
      float colliderRadius = 0.0;
      float colliderRadiusAmplificationFactor = 1.5;
      float colliderRadiusAmplificationMax = 300.0;

      float colliderRadiusMaxWhenAmplificationByFactor
        = colliderRadiusAmplificationMax / (colliderRadiusAmplificationFactor - 1.0);

      vec3 delta = vec3(0.0);
      float collisionAmount = 0.0; 
      vec4 optimizedCollectionSpan = vec4(0.0); 

      int i0 = 0; 
      ${getOptimezedCollectionClipLoop(0, 5, optimizedCollectionsCount)}
      
      if(clipAmount <= 0.0) 
      { 
        discard; 
      } 
      return clipAmount;  
    }`;
  return functionString;
}

function getOptimezedCollectionClipLoop(
  depth,
  depthLim,
  optimizedCollectionsCount
) {
  const nextDepth = depth + 1;
  const optimizedCollectionsCountDivisor = 1.0 / optimizedCollectionsCount;

  let functionString = `collider = texture(optimizedCollectionColliders,
      vec2((float(i${depth}) + 0.5) * ${optimizedCollectionsCountDivisor}, 0.5));

    if(collider.w > colliderRadiusMaxWhenAmplificationByFactor)
    {
      colliderRadius = collider.w + colliderRadiusAmplificationMax;
    }
    else
    {
      colliderRadius = collider.w + colliderRadiusAmplificationFactor;
    }

    delta = (clippingPlanesModelMatrix * vec4(-collider.xyz, 1.0)).xyz - position.xyz;
    collisionAmount = colliderRadius * colliderRadius - (delta.x * delta.x + delta.y * delta.y + delta.z * delta.z);

    if (collisionAmount < 0.0)
    {`;
  if (depth > 0) {
    functionString += `
      clipAmount = 1.0;
      continue;
      `;
  } else {
    functionString += `
      return clipAmount;
      `;
  }

  functionString += `}
      optimizedCollectionSpan = texture(optimizedCollectionSpans, 
        vec2((float(i${depth}) + 0.5) * ${optimizedCollectionsCountDivisor}, 0.5)); 

      int i${nextDepth} = int(optimizedCollectionSpan.x); 
      //int i${nextDepth}Lim = int((optimizedCollectionSpan.xy * optimizedCollectionSpan.zw).y); 
      int i${nextDepth}Lim = int(optimizedCollectionSpan.y); 

      if (i${nextDepth} != i${nextDepth}Lim) 
      { `;

  if (depth < depthLim) {
    functionString += `for (; i${nextDepth} < i${nextDepth}Lim && clipAmount > 0.0; i${nextDepth}++) 
         { 
         
           ${getOptimezedCollectionClipLoop(
             nextDepth,
             depthLim,
             optimizedCollectionsCount
           )}
         }`;
  }

  functionString += `} 
      else 
      { 
        clipAmount = clipByPlanes( 
          position, 
          //pixelWidth, 
          clippingPlaneCollectionsPlanes, 
          clippingPlaneCollectionSpans, 
          clippingPlanesMatrix, 
          //clippingPlaneCollectionLengths, 
          //clippingPlaneCollectionsPlaneStates,
          i${nextDepth}); `;

  functionString += `}
    `;

  return functionString;
}

function clippingByPlanesFunctionIntersect(planeCollectionsCount) {
  const planeCollectionsCountDivisor = 1.0 / planeCollectionsCount;

  const functionString = `float clipByPlanes( 
    vec4 position, 
    highp sampler2D clippingPlaneCollectionsPlanes, 
    mediump sampler2D clippingPlaneCollectionSpans, 
    mat4 clippingPlanesMatrix, 
    //mediump sampler2D clippingPlaneCollectionLengths, 
    //mediump sampler2D clippingPlaneCollectionsPlaneStates, 
    int planeCollectionId) 
    { 
      vec3 clipNormal = vec3(0.0); 
      vec3 clipPosition = vec3(0.0); 
      float clipAmount = 0.0; 

      vec4 planeCollectionSpan = texture(clippingPlaneCollectionSpans, 
        vec2((float(planeCollectionId) + 0.5) * ${planeCollectionsCountDivisor}, 0.5)); 
      
      int planeCollectionStart = int(planeCollectionSpan.x); 
      //int planeCollectionEnd = int((planeCollectionSpan.xy * planeCollectionSpan.zw).y); 
      int planeCollectionEnd = int(planeCollectionSpan.y);

      for (int i = planeCollectionStart; i < planeCollectionEnd; i++) 
      {  
        vec4 clippingPlane = getClippingPlane(clippingPlaneCollectionsPlanes, i, clippingPlanesMatrix);  
        clipNormal = clippingPlane.xyz;  
        clipPosition = -clippingPlane.w * clipNormal;  
        clipAmount = dot(clipNormal, (position.xyz - clipPosition));  
        if(clipAmount >= 0.0) 
        { 
          return 1.0; 
        } 
      } 
 
      return -1.0; 
    }`;
  return functionString;
}

function getClippingPlaneFloat(width, height) {
  const pixelWidth = 1.0 / width;
  const pixelHeight = 1.0 / height;

  let pixelWidthString = `${pixelWidth}`;
  if (pixelWidthString.indexOf(".") === -1) {
    pixelWidthString += ".0";
  }
  let pixelHeightString = `${pixelHeight}`;
  if (pixelHeightString.indexOf(".") === -1) {
    pixelHeightString += ".0";
  }

  const functionString = `vec4 getClippingPlane(highp sampler2D packedClippingPlanes, int clippingPlaneNumber, mat4 transform) \n 
      { \n 
        int pixY = clippingPlaneNumber / ${width}; \n 
        int pixX = clippingPlaneNumber - (pixY * ${width}); \n 
        float u = (float(pixX) + 0.5) * ${pixelWidthString}; \n  // sample from center of pixel
        float v = (float(pixY) + 0.5) * ${pixelHeightString}; \n 
        vec4 plane = texture(packedClippingPlanes, vec2(u, v)); \n 
        return czm_transformPlane(plane, transform); \n 
      } \n`;
  return functionString;
}

export default getOptimizedClippingFunction;
