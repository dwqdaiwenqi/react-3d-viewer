
import * as THREE from 'three';
import {OrbitControls,MTLLoader,OBJLoader,ColladaLoader,GLTFLoader} from './loader';

import Model from './model'

// Model
// debugger
class ObjModel extends Model{

  static defaultProps = Object.assign({},Model.defaultProps,{
    loader: 'obj'
  })
  constructor(props){
    super(props)
  }
  load3dModel(){
    var {src,texPath} = this.props;
 
    if(!src) return false
    // instantiate a loader
    // load a resource
    var obj_loader = new THREE.OBJLoader()
    obj_loader.load(
      // resource URL
      src,
      // called when resource is loaded
      obj3d => {

        var bound_box = this.computeBoundingBox(obj3d);
        // debugger
        var front = bound_box.max;

        //debugger

        var cz = bound_box.max.z - bound_box.min.z;

        this.camera.position.set(0, 0, front.z+cz*1.5);


        this.initControl();
        

        
        //this.scene.add(obj3d);
        this.obj3d = obj3d;

        this.props.onLoad && this.props.onLoad()

      },
      // called when loading is in progresses
      xhr =>{
        this.props.onProgress && this.props.onProgress(xhr)
        // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      } 
    );

  }
}

export default ObjModel