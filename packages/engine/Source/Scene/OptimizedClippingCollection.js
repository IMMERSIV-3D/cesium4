import Cartesian2 from "../Core/Cartesian2.js";
import Color from "../Core/Color.js";
import Cartesian3 from "../Core/Cartesian3.js";
import ContextLimits from "../Renderer/ContextLimits.js";
import defaultValue from "../Core/defaultValue.js";
import defined from "../Core/defined.js";
import destroyObject from "../Core/destroyObject.js";
import Matrix4 from "../Core/Matrix4.js";
import PixelFormat from "../Core/PixelFormat.js";
import PixelDatatype from "../Renderer/PixelDatatype.js";
import Sampler from "../Renderer/Sampler.js";
import Texture from "../Renderer/Texture.js";
import ClippingPlaneCollection from "./ClippingPlaneCollection.js";

/**
 * Specifies a set of ClippingPlaneCollections. ClippingPlaneCollections selectively disable rendering in a region on the
 * outside of the specified list of {@link ClippingPlaneCollections} objects for the globe, it has not been tested on models nor 3D Tilesets.
 * OptimizedClippingCollection is now not abled to deal with unionClippingRegions.
 *
 * <p>
 * In general the clipping planes' coordinates are relative to the object they're attached to, so a plane with distance set to 0 will clip
 * through the center of the object.
 * </p>
 * <p>
 * </p>
 *
 * @alias OptimizedClippingCollection
 * @constructor
 *
 * @param {Object} [options] Object with the following properties:
 * @param {ClippingPlaneCollection[]} [options.collections=[]] An array of {@link ClippingPlaneCollection} objects used to selectively disable rendering on the outside of collection.
 * @param {Matrix4} [options.modelMatrix=Matrix4.IDENTITY] The 4x4 transformation matrix specifying an additional transform relative to the clipping planes original coordinate system.
 * @param {Cartesian3} [options.sphereColliderCenter=Cartesian3.ZERO] The center of sphere collider of the all vertices.
 * @param {Number} [options.sphereColliderRadius=15000000.0] The radius of sphere collider of the all vertices.
 * @param {OptimizedClippingCollection[]} [options.optimizedCollections=[]] An array of {@link OptimizedClippingCollection} objects used for performance optimization of clipping.
 * @param {ClippingPlaneCollection} [options.planeCollection=null] A {@link ClippingPlaneCollection} object used to selectively disable rendering on the outside of collection.
 * @param {Color} [options.edgeColor=Color.WHITE] The color applied to highlight the edge along which an object is clipped.
 * @param {Number} [options.edgeWidth=0.0] The width, in pixels, of the highlight applied to the edge along which an object is clipped.
 */
function OptimizedClippingCollection(options) {
  options = defaultValue(options, defaultValue.EMPTY_OBJECT);

  //this._optimizedCollections = [];
  //this._planeCollections = [];

  this._planeCollectionsPlanesArrayBuffer = null;
  this._planeCollectionSpansArrayBuffer = null;
  //this._planeCollectionLengthsArrayBuffer = null;

  //this._planeCollectionsPlaneStatesArrayBuffer = null;
  //this._planeCollectionsPlaneFromVerticesArrayBuffer = null;
  //this._planeCollectionsPlaneToVerticesArrayBuffer = null;
  this._optimizedCollectionSpansArrayBuffer = null;
  //this._optimizedCollectionStatesArrayBuffer = null;
  this._optimizedCollectionCollidersArrayBuffer = null;

  this._planeCollectionsPlanesTexture = null;
  this._planeCollectionSpansTexture = null;
  //this._planeCollectionLengthsTexture = null;

  //this._planeCollectionsPlaneStatesTexture = null;
  //this._planeCollectionsPlaneFromVerticesTexture = null;
  //this._planeCollectionsPlaneToVerticesTexture = null;
  this._optimizedCollectionSpansTexture = null;
  //this._optimizedCollectionStatesTexture = null;
  this._optimizedCollectionCollidersTexture = null;

  //this._optimizedCollections = [];

  this._dirty = true; // false;

  this._maxCollectionLength = 0;

  this._totalPlanesCount = 0;

  this._planeCollectionsCount = 0;
  this._optimizedCollectionsCount = 0;

  /**
   * The 4x4 transformation matrix specifying an additional transform relative to the clipping planes
   * original coordinate system.
   *
   * @type {Matrix4}
   * @default Matrix4.IDENTITY
   */
  this.modelMatrix = Matrix4.clone(
    defaultValue(options.modelMatrix, Matrix4.IDENTITY)
  );

  /**
   * The center of sphere collider of the all vertices.
   *
   * @type {Cartesian3}
   * @default Cartesian3.ZERO
   */
  this.sphereColliderCenter = defaultValue(
    options.sphereColliderCenter,
    Cartesian3.ZERO
  );

  /**
   * The radius of sphere collider of the all vertices.
   *
   * @type {Number}
   * @default 15000000.0
   */
  this.sphereColliderRadius = defaultValue(
    options.sphereColliderRadius,
    15000000.0
  );

  /**
   * An array of 0ptimized clipping collections used for performance optimization of clipping.
   *
   * @type {OptimizedClippingCollection[]}
   * @default []
   */
  this._optimizedCollections = defaultValue(options.optimizedCollections, []);
  this.optimizedCollections = this._optimizedCollections;

  /**
   * A clipping plane collection used to selectively disable rendering on the outside of collection.
   *
   * @type {ClippingPlaneCollection}
   * @default null
   */
  this._planeCollection = defaultValue(options.planeCollection, null);
  this.planeCollection = this._planeCollection;

  /**
   * The color applied to highlight the edge along which an object is clipped.
   *
   * @type {Color}
   * @default Color.WHITE
   */
  this.edgeColor = Color.clone(defaultValue(options.edgeColor, Color.WHITE));

  /**
   * The width, in pixels, of the highlight applied to the edge along which an object is clipped.
   *
   * @type {Number}
   * @default 0.0
   */
  this.edgeWidth = defaultValue(options.edgeWidth, 0.0);

  // Add each ClippingPlaneCollection object
  const collections = options.collections;
  const me = this;
  if (defined(collections)) {
    collections.forEach(function (p) {
      me.add(p);
    });
  }
}

Object.defineProperties(OptimizedClippingCollection.prototype, {
  /**
   * Returns the number of ClippingPlaneCollections in this OptimizedClippingCollection.
   *
   * @memberof OptimizedClippingCollection.prototype
   * @type {Number}
   * @readonly
   */
  length: {
    get: function () {
      return this._optimizedCollections.length;
    },
  },

  /**
   * Returns a texture containing all optimized clippingPlaneCollection spans.
   *
   * @memberof OptimizedClippingCollection.prototype
   * @type {*}
   * @readonly
   * @private
   */
  planeCollectionSpansTexture: {
    get: function () {
      return this._planeCollectionSpansTexture;
    },
  },

  /**
   * Returns a texture containing all planes of all ClippingPlaneCollections.
   *
   * @memberof OptimizedClippingCollection.prototype
   * @type {*}
   * @readonly
   * @private
   */
  planeCollectionsPlanesTexture: {
    get: function () {
      return this._planeCollectionsPlanesTexture;
    },
  },

  ///**
  // * Returns a texture containing length of each ClippingPlaneCollection.
  // *
  // * @memberof OptimizedClippingCollection.prototype
  // * @type {*}
  // * @readonly
  // * @private
  // */
  //planeCollectionLengthsTexture: {
  //  get: function () {
  //    return this._planeCollectionLengthsTexture;
  //  },
  //},

  ///**
  // * Returns a texture containing all plane states of all ClippingPlaneCollections.
  // *
  // * @memberof OptimizedClippingCollection.prototype
  // * @type {*}
  // * @readonly
  // * @private
  // */
  //planeCollectionsPlaneStatesTexture: {
  //  get: function () {
  //    return this._planeCollectionsPlaneStatesTexture;
  //  },
  //},

  ///**
  // * Returns a texture containing all plane from Verteces of all ClippingPlaneCollections.
  // *
  // * @memberof OptimizedClippingCollection.prototype
  // * @type {*}
  // * @readonly
  // * @private
  // */
  //planeCollectionsPlaneFromVerticesTexture: {
  //  get: function () {
  //    return this._planeCollectionsPlaneFromVerticesTexture;
  //  },
  //},

  ///**
  // * Returns a texture containing all plane to Verteces of all ClippingPlaneCollections.
  // *
  // * @memberof OptimizedClippingCollection.prototype
  // * @type {*}
  // * @readonly
  // * @private
  // */
  //planeCollectionsPlaneToVerticesTexture: {
  //  get: function () {
  //    return this._planeCollectionsPlaneToVerticesTexture;
  //  },
  //},

  /**
   * Returns a texture containing all optimized collection spans.
   *
   * @memberof OptimizedClippingCollection.prototype
   * @type {*}
   * @readonly
   * @private
   */
  optimizedCollectionSpansTexture: {
    get: function () {
      return this._optimizedCollectionSpansTexture;
    },
  },

  ///**
  // * Returns a texture containing all optimized collection states.
  // *
  // * @memberof OptimizedClippingCollection.prototype
  // * @type {*}
  // * @readonly
  // * @private
  // */
  //optimizedCollectionStatesTexture: {
  //  get: function () {
  //    return this._optimizedCollectionStatesTexture;
  //  },
  //},

  /**
   * Returns a texture containing all optimized collection colliders.
   *
   * @memberof OptimizedClippingCollection.prototype
   * @type {*}
   * @readonly
   * @private
   */
  optimizedCollectionCollidersTexture: {
    get: function () {
      return this._optimizedCollectionCollidersTexture;
    },
  },

  /**
   * Returns the combined state of each ClippingPlaneCollection.
   *
   * @memberof OptimizedClippingCollection.prototype
   * @type {String}
   * @readonly
   */
  collectionsState: {
    get: function () {
      //let state = 0;
      //this._optimizedCollections.forEach(function (p, i) {
      //  // state += (p.enabled ? "+" : "-") + i + p.clippingPlanesState;
      //  state += p.clippingPlanesState;
      //});
      //return state;
      return this._totalPlanesCount;
    },
  },

  /**
   * Returns the max length of ClippingPlaneCollection in this OptimizedClippingCollection. This is used in
   * getOptimizedClippingFunction.js .
   *
   * @memberof OptimizedClippingCollection.prototype
   * @type {Number}
   * @readonly
   */
  maxCollectionLength: {
    get: function () {
      return this._maxCollectionLength;
    },
  },

  /**
   * Returns the count of all planes.
   *
   * @memberof OptimizedClippingCollection.prototype
   * @type {Number}
   * @readonly
   */
  totalPlanesCount: {
    get: function () {
      return this._totalPlanesCount;
    },
  },
  /**
   * Returns the count of all plane Collections.
   *
   * @memberof OptimizedClippingCollection.prototype
   * @type {Number}
   * @readonly
   */
  planeCollectionsCount: {
    get: function () {
      return this._planeCollectionsCount;
    },
  },

  /**
   * Returns the count of all optimized Collections.
   *
   * @memberof OptimizedClippingCollection.prototype
   * @type {Number}
   * @readonly
   */
  optimizedCollectionsCount: {
    get: function () {
      return this._optimizedCollectionsCount;
    },
  },
});

///**
// * Adds the specified {@link ClippingPlaneCollection} to the collection to be used to selectively disable rendering
// * on the outside of each plane collection.
// * @param {ClippingPlaneCollection} collection The ClippingPlaneCollection to add to the collection.
// */
//OptimizedClippingCollection.prototype.add = function (collection) {
//  this._optimizedCollections.push(collection);
//  this._dirty = true;
//};

///**
// * Returns the plane in the collection at the specified index.  Indices are zero-based
// * and increase as planes are added.  Removing a plane shifts all planes after
// * it to the left, changing their indices.
// *
// * @param {Number} index The zero-based index of the ClippingPlaneCollection.
// * @returns {ClippingPlaneCollection} The ClippingPlaneCollection at the specified index.
// */
//OptimizedClippingCollection.prototype.get = function (index) {
//  //>>includeStart('debug', pragmas.debug);
//  Check.typeOf.number("index", index);
//  //>>includeEnd('debug');

//  return this._optimizedCollections[index];
//};

///**
// * Checks whether this collection contains a ClippingPlaneCollection equal to the given ClippingPlaneCollection.
// *
// * @param {ClippingPlaneCollection} collection
// * @returns {Boolean} <code>true</code> if this collection contains the ClippingPlaneCollection, <code>false</code> otherwise.
// */
//OptimizedClippingCollection.prototype.contains = function (collection) {
//  return (
//    this._optimizedCollections.findIndex(function (p) {
//      return p === collection;
//    }) !== -1
//  );
//};

///**
// * Removes the first occurrence of the given ClippingPlane from the collection.
// *
// * @param {ClippingPlaneCollection} collection
// * @returns {Boolean} <code>true</code> if the plane was removed; <code>false</code> if the plane was not found in the collection.
// */
//OptimizedClippingCollection.prototype.remove = function (collection) {
//  const collections = this._optimizedCollections;
//  const index = collections.findIndex(function (p) {
//    return p === collection;
//  });

//  if (index === -1) {
//    return false;
//  }

//  collections.splice(index, 1);

//  if (collection instanceof ClippingPlaneCollection) {
//    collection.destroy();
//  }

//  this._dirty = true;

//  return true;
//};

///**
// * Removes all ClippingPlaneCollection from the collection.
// */
//OptimizedClippingCollection.prototype.removeAll = function () {
//  this._optimizedCollections.forEach(function (collection) {
//    if (collection instanceof ClippingPlaneCollection) {
//      collection.destroy();
//    }
//  });
//  this._optimizedCollections = [];
//  this._dirty = true;
//};

OptimizedClippingCollection.prototype.getAllClippingPlanes = function () {
  if (this.planeCollection !== null) {
    return [this.planeCollection];
  } else if (
    this._optimizedCollections !== null &&
    this._optimizedCollections.length > 0
  ) {
    return this._optimizedCollections
      .map((oc) => oc.getAllClippingPlanes())
      .flat();
  }
  return [];
};

OptimizedClippingCollection.prototype.updateArrays = function ({
  planeCollectionsPlanes,
  //planeCollectionsPlaneStates,
  //planeCollectionsPlaneFromVertices,
  //planeCollectionsPlaneToVertices,
  optimizedCollectionSpans,
  //optimizedCollectionStates,
  optimizedCollectionColliders,
  optimizedCollectionId,
}) {
  if (this.planeCollection !== null) {
    optimizedCollectionSpans[optimizedCollectionId].start =
      planeCollectionsPlanes.length;

    planeCollectionsPlanes.push(this.planeCollection._planes);
    //planeCollectionsPlaneStates.push(1);

    //planeCollectionsPlaneFromVertices.push(
    //  this.planeCollection._planes.map(p => p._fromVertex));

    //planeCollectionsPlaneToVertices.push(
    //  this.planeCollection._planes.map(p => p._toVertex));
  } else if (
    this._optimizedCollections !== null &&
    this._optimizedCollections.length > 0
  ) {
    optimizedCollectionSpans[optimizedCollectionId].start =
      optimizedCollectionSpans.length;

    this._optimizedCollections.forEach((oc) => {
      optimizedCollectionSpans.push({
        start: -1,
        count: oc._optimizedCollections.length,
      });

      //optimizedCollectionStates.push(1);

      optimizedCollectionColliders.push({
        center: oc.sphereColliderCenter,
        radius: oc.sphereColliderRadius,
      });
    });

    this._optimizedCollections.forEach((oc, i) =>
      oc.updateArrays({
        planeCollectionsPlanes,
        //planeCollectionsPlaneStates,
        //planeCollectionsPlaneFromVertices,
        //planeCollectionsPlaneToVertices,
        optimizedCollectionSpans,
        //optimizedCollectionStates,
        optimizedCollectionColliders,
        optimizedCollectionId:
          optimizedCollectionSpans[optimizedCollectionId].start + i,
      })
    );
  }
};
/**
 * Called when {@link Viewer} or {@link CesiumWidget} render the scene to
 * build the resources for clipping planes.
 * <p>
 * Do not call this function directly.
 * </p>
 */
OptimizedClippingCollection.prototype.update = function (frameState) {
  if (this._dirty) {
    const planeCollectionsPlanes = [];
    //const planeCollectionsPlaneStates = [];
    //const planeCollectionsPlaneFromVertices = [];
    //const planeCollectionsPlaneToVertices = [];
    const optimizedCollectionSpans = [];
    //const optimizedCollectionStates = [];
    const optimizedCollectionColliders = [];

    optimizedCollectionSpans.push({
      start: 0,
      count: this._optimizedCollections.length,
    });

    //optimizedCollectionStates.push(1);

    optimizedCollectionColliders.push({
      center: this.sphereColliderCenter,
      radius: this.sphereColliderRadius,
    });

    this.updateArrays({
      planeCollectionsPlanes,
      //planeCollectionsPlaneStates,
      //planeCollectionsPlaneFromVertices,
      //planeCollectionsPlaneToVertices,
      optimizedCollectionSpans,
      //optimizedCollectionStates,
      optimizedCollectionColliders,
      optimizedCollectionId: 0,
    });

    //const matrix = this.modelMatrix;
    //const pl = planeCollectionsPlanes[0][0];
    //const p = pl._fromVertex;
    //const p2 = new Cartesian3(5129132.0881, 3787973.096, 233730.7446);
    //const result = Matrix4.multiplyByPoint(matrix, p2, new Cartesian3());
    //console.log(matrix);
    //console.log(p.x);
    //console.log(result.x);
    //console.log(p.y);
    //console.log(result.y);
    //console.log(p.z);
    //console.log(result.z);
    //console.log("dsfdsf");
    //console.log(planeCollectionsPlanes.length);
    //console.log("dsfdsf");
    //console.log(optimizedCollectionSpans.length);

    this.updatePlaneCollectionTextures(planeCollectionsPlanes, frameState);

    this.updateOptimizedCollectionTextures(
      optimizedCollectionSpans,
      //optimizedCollectionStates,
      optimizedCollectionColliders,
      frameState
    );

    this._dirty = false;
  }
};

OptimizedClippingCollection.prototype.updateOptimizedCollectionTextures = function (
  optimizedCollectionSpans,
  //optimizedCollectionStates,
  optimizedCollectionColliders,
  frameState
) {
  const context = frameState.context;

  //let totalPlanes = 0;
  //let maxLength = 0;
  //for (let i = 0; i < planeCollectionsPlanes.length; i++) {
  //  const planeCollection = planeCollectionsPlanes[i];
  //  totalPlanes += planeCollection.length;
  //  maxLength = Math.max(maxLength, planeCollection.length);
  //}
  const widthTotal = optimizedCollectionSpans.length * 1;
  const height = 1;

  this._optimizedCollectionsCount = optimizedCollectionSpans.length;

  if (optimizedCollectionSpans.length > 0) {
    this._optimizedCollectionSpansArrayBuffer = new Float32Array(
      widthTotal * height * 4
    );
    //this._optimizedCollectionStatesArrayBuffer = new Float32Array(optimizedCollectionSpans.map(oc => 1));
    this._optimizedCollectionCollidersArrayBuffer = new Float32Array(
      widthTotal * height * 4
    );

    let ocSI = 0;
    optimizedCollectionSpans.forEach((ocS) => {
      this._optimizedCollectionSpansArrayBuffer[ocSI++] = ocS.start;
      this._optimizedCollectionSpansArrayBuffer[ocSI++] = ocS.start + ocS.count;
      ocSI++;
      ocSI++;
    });

    //console.log("spans:");

    //for (let i = 0; i < optimizedCollectionSpans.length; i++) {
    //  let ocS = optimizedCollectionSpans[i];
    //  let col = optimizedCollectionColliders[i];
    //  console.log('id ' + i + ': ' + ocS.start + ' - ' + (ocS.start + ocS.count) + '. Radius = ' + col.radius + '. Center = ' + col.center);

    //}

    //console.log("end");

    let ocCI = 0;
    optimizedCollectionColliders.forEach((ocC) => {
      this._optimizedCollectionCollidersArrayBuffer[ocCI++] = ocC.center.x;
      this._optimizedCollectionCollidersArrayBuffer[ocCI++] = ocC.center.y;
      this._optimizedCollectionCollidersArrayBuffer[ocCI++] = ocC.center.z;

      this._optimizedCollectionCollidersArrayBuffer[ocCI++] = ocC.radius;
      console.log(ocC.radius);
    });

    this._optimizedCollectionSpansTexture = new Texture({
      context: context,
      width: this._optimizedCollectionsCount,
      height: 1,
      pixelFormat: PixelFormat.RGBA,
      pixelDatatype: PixelDatatype.FLOAT,
      sampler: Sampler.NEAREST,
      flipY: false,
    });

    this._optimizedCollectionSpansTexture.copyFrom({
      source: {
        width: this._optimizedCollectionsCount,
        height: 1,
        arrayBufferView: this._optimizedCollectionSpansArrayBuffer,
      },
    });

    //this._optimizedCollectionStatesTexture = new Texture({
    //  context: context,
    //  width: this._optimizedCollectionsCount,
    //  height: 1,
    //  pixelFormat: PixelFormat.RED,
    //  pixelDatatype: PixelDatatype.FLOAT,
    //  sampler: Sampler.NEAREST,
    //  flipY: false,
    //});

    //this._optimizedCollectionStatesTexture.copyFrom({
    //  source: {
    //    width: this._optimizedCollectionsCount,
    //    height: 1,
    //    arrayBufferView: this._optimizedCollectionStatesArrayBuffer,
    //  },
    //});

    this._optimizedCollectionCollidersTexture = new Texture({
      context: context,
      width: this._optimizedCollectionsCount,
      height: 1,
      pixelFormat: PixelFormat.RGBA,
      pixelDatatype: PixelDatatype.FLOAT,
      sampler: Sampler.NEAREST,
      flipY: false,
    });

    this._optimizedCollectionCollidersTexture.copyFrom({
      source: {
        width: this._optimizedCollectionsCount,
        height: 1,
        arrayBufferView: this._optimizedCollectionCollidersArrayBuffer,
      },
    });
  }
};

OptimizedClippingCollection.prototype.updatePlaneCollectionTextures = function (
  planeCollectionsPlanes,
  frameState
) {
  const context = frameState.context;

  let totalPlanes = 0;
  let maxLength = 0;
  for (let i = 0; i < planeCollectionsPlanes.length; i++) {
    const planeCollection = planeCollectionsPlanes[i];
    totalPlanes += planeCollection.length;
    maxLength = Math.max(maxLength, planeCollection.length);
  }
  const widthTotal = totalPlanes * 1;
  const height = 1;
  const planeCollectionLength = planeCollectionsPlanes.length;

  this._totalPlanesCount = totalPlanes;
  this._maxCollectionLength = maxLength;
  this._planeCollectionsCount = planeCollectionLength;

  if (planeCollectionsPlanes.length > 0) {
    this._planeCollectionsPlanesArrayBuffer = new Float32Array(
      widthTotal * height * 4
    );
    this._planeCollectionSpansArrayBuffer = new Float32Array(
      planeCollectionLength * height * 4
    );
    //this._planeCollectionLengthsArrayBuffer = new Float32Array(planeCollectionsPlanes.map(pc => pc.length));
    //this._planeCollectionsPlaneStatesArrayBuffer = new Float32Array(widthTotal * height * 1);
    //this._planeCollectionsPlaneFromVerticesArrayBuffer = new Float32Array(widthTotal * height * 3);
    //this._planeCollectionsPlaneToVerticesArrayBuffer = new Float32Array(widthTotal * height * 3);

    let pcsI = 0;
    let pcpI = 0;
    //let pcpSI = 0;
    //let pcpFI = 0;
    //let pcpTI = 0;
    let pI = 0;

    planeCollectionsPlanes.forEach((pc, pcI) => {
      this._planeCollectionSpansArrayBuffer[pcsI++] = pI;
      this._planeCollectionSpansArrayBuffer[pcsI++] = pI + pc.length;
      pcsI++;
      pcsI++;

      pc.forEach((p) => {
        this._planeCollectionsPlanesArrayBuffer[pcpI++] = p._normal.x;
        this._planeCollectionsPlanesArrayBuffer[pcpI++] = p._normal.y;
        this._planeCollectionsPlanesArrayBuffer[pcpI++] = p._normal.z;

        this._planeCollectionsPlanesArrayBuffer[pcpI++] = p._distance;

        //this._planeCollectionsPlaneStatesArrayBuffer[pcpSI++] = 1;

        //this._planeCollectionsPlaneFromVerticesArrayBuffer[pcpFI++] = p._fromVertex.x;
        //this._planeCollectionsPlaneFromVerticesArrayBuffer[pcpFI++] = p._fromVertex.y;
        //this._planeCollectionsPlaneFromVerticesArrayBuffer[pcpFI++] = p._fromVertex.z;

        //this._planeCollectionsPlaneToVerticesArrayBuffer[pcpTI++] = p._toVertex.x;
        //this._planeCollectionsPlaneToVerticesArrayBuffer[pcpTI++] = p._toVertex.y;
        //this._planeCollectionsPlaneToVerticesArrayBuffer[pcpTI++] = p._toVertex.z;

        pI++;
      });
    });

    const pixelsNeeded = widthTotal;
    const textureResolutionScratch = new Cartesian2();

    const requiredResolution = computeTextureResolution(
      pixelsNeeded,
      textureResolutionScratch
    );

    this._planeCollectionsPlanesTexture = new Texture({
      context: context,
      width: requiredResolution.x,
      height: requiredResolution.y,
      pixelFormat: PixelFormat.RGBA,
      pixelDatatype: PixelDatatype.FLOAT,
      sampler: Sampler.NEAREST,
      flipY: false,
    });

    this._planeCollectionsPlanesTexture.copyFrom({
      source: {
        width: requiredResolution.x,
        height: requiredResolution.y,
        arrayBufferView: this._planeCollectionsPlanesArrayBuffer,
      },
    });

    this._planeCollectionSpansTexture = new Texture({
      context: context,
      width: planeCollectionLength,
      height: 1,
      pixelFormat: PixelFormat.RGBA,
      pixelDatatype: PixelDatatype.FLOAT,
      sampler: Sampler.NEAREST,
      flipY: false,
    });

    this._planeCollectionSpansTexture.copyFrom({
      source: {
        width: planeCollectionLength,
        height: 1,
        arrayBufferView: this._planeCollectionSpansArrayBuffer,
      },
    });

    //this._planeCollectionLengthsTexture = new Texture({
    //  context: context,
    //  width: planeCollectionsPlanes.length,
    //  height: 1,
    //  pixelFormat: PixelFormat.RED,
    //  pixelDatatype: PixelDatatype.FLOAT,
    //  sampler: Sampler.NEAREST,
    //  flipY: false,
    //});

    //this._planeCollectionLengthsTexture.copyFrom({
    //  source: {
    //    width: planeCollectionsPlanes.length,
    //    height: 1,
    //    arrayBufferView: this._planeCollectionLengthsArrayBuffer,
    //  },
    //});

    //this._planeCollectionsPlaneStatesTexture = new Texture({
    //  context: context,
    //  width: requiredResolution.x,
    //  height: requiredResolution.y,
    //  pixelFormat: PixelFormat.RED,
    //  pixelDatatype: PixelDatatype.FLOAT,
    //  sampler: Sampler.NEAREST,
    //  flipY: false,
    //});

    //this._planeCollectionsPlaneStatesTexture.copyFrom({
    //  source: {
    //    width: requiredResolution.x,
    //    height: requiredResolution.y,
    //    arrayBufferView: this._planeCollectionsPlaneStatesArrayBuffer,
    //  },
    //});

    //this._planeCollectionsPlaneFromVerticesTexture = new Texture({
    //  context: context,
    //  width: requiredResolution.x,
    //  height: requiredResolution.y,
    //  pixelFormat: PixelFormat.RGB,
    //  pixelDatatype: PixelDatatype.FLOAT,
    //  sampler: Sampler.NEAREST,
    //  flipY: false,
    //});

    //this._planeCollectionsPlaneFromVerticesTexture.copyFrom({
    //  source: {
    //    width: requiredResolution.x,
    //    height: requiredResolution.y,
    //    arrayBufferView: this._planeCollectionsPlaneFromVerticesArrayBuffer,
    //  },
    //});

    //this._planeCollectionsPlaneToVerticesTexture = new Texture({
    //  context: context,
    //  width: requiredResolution.x,
    //  height: requiredResolution.y,
    //  pixelFormat: PixelFormat.RGB,
    //  pixelDatatype: PixelDatatype.FLOAT,
    //  sampler: Sampler.NEAREST,
    //  flipY: false,
    //});

    //this._planeCollectionsPlaneToVerticesTexture.copyFrom({
    //  source: {
    //    width: requiredResolution.x,
    //    height: requiredResolution.y,
    //    arrayBufferView: this._planeCollectionsPlaneToVerticesArrayBuffer,
    //  },
    //});
  }
};

function computeTextureResolution(pixelsNeeded, result) {
  const maxSize = ContextLimits.maximumTextureSize;
  result.x = Math.min(pixelsNeeded, maxSize);
  result.y = Math.ceil(pixelsNeeded / result.x);
  return result;
}

/**
 * Destroys the WebGL resources held by this object.  Destroying an object allows for deterministic
 * release of WebGL resources, instead of relying on the garbage collector to destroy this object.
 * <br /><br />
 * Once an object is destroyed, it should not be used; calling any function other than
 * <code>isDestroyed</code> will result in a {@link DeveloperError} exception.  Therefore,
 * assign the return value (<code>undefined</code>) to the object as done in the example.
 *
 * @exception {DeveloperError} This object was destroyed, i.e., destroy() was called.
 *
 *
 * @example
 * optimizedClippingCollections = optimizedClippingCollections && optimizedClippingCollections.destroy();
 *
 * @see ClippingPlaneCollection#isDestroyed
 */
OptimizedClippingCollection.prototype.destroy = function () {
  this._optimizedCollections.forEach(function (collection) {
    if (collection instanceof OptimizedClippingCollection) {
      collection.destroy();
    }
  });
  this._optimizedCollections = undefined;

  if (this._planeCollection instanceof ClippingPlaneCollection) {
    this._planeCollection.destroy();
  }
  this._planeCollection = undefined;

  this._planeCollectionsPlanesTexture =
    this._planeCollectionsPlanesTexture &&
    this._planeCollectionsPlanesTexture.destroy();

  this._planeCollectionSpansTexture =
    this._planeCollectionSpansTexture &&
    this._planeCollectionSpansTexture.destroy();

  //this._planeCollectionLengthsTexture = this._planeCollectionLengthsTexture
  //  && this._planeCollectionLengthsTexture.destroy();

  //this._planeCollectionsPlaneStatesTexture = this._planeCollectionsPlaneStatesTexture
  //  && this._planeCollectionsPlaneStatesTexture.destroy();

  //this._planeCollectionsPlaneFromVerticesTexture = this._planeCollectionsPlaneFromVerticesTexture
  //  && this._planeCollectionsPlaneFromVerticesTexture.destroy();

  //this._planeCollectionsPlaneToVerticesTexture = this._planeCollectionsPlaneToVerticesTexture
  //  && this._planeCollectionsPlaneToVerticesTexture.destroy();

  this._optimizedCollectionSpansTexture =
    this._optimizedCollectionSpansTexture &&
    this._optimizedCollectionSpansTexture.destroy();

  //this._optimizedCollectionStatesTexture = this._optimizedCollectionStatesTexture
  //  && this._optimizedCollectionStatesTexture.destroy();

  this._optimizedCollectionCollidersTexture =
    this._optimizedCollectionCollidersTexture &&
    this._optimizedCollectionCollidersTexture.destroy();

  return destroyObject(this);
};

export default OptimizedClippingCollection;
