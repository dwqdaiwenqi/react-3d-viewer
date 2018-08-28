
// export { default as JSONModel } from './json_model';
// // export { default as OBJModel } from './obj_model';
// // export { default as MTLModel } from './mtl_model';
// // export { default as DAEModel } from './dae_model';
// // export { default as GLTFModel } from './gltf_model';
// export { default as Tick } from './tick';
// export { DirectionLight, AmbientLight} from './light';


import Model from './model'
import JSONModel from './json_model'
import OBJModel from './obj_model'
import MTLModel from './mtl_model'
import DAEModel from './dae_model'
import GLTFModel from './gltf_model'
import Tick from './tick'
import {DirectionLight,AmbientLight} from './light'

module.exports = {Tick,Model,JSONModel,OBJModel,MTLModel,DAEModel,GLTFModel,DirectionLight,AmbientLight}


// module.exports = {
//   JSONModel: require('./json_model'),
//   // Model: require('./model')
// }
