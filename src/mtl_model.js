
import * as THREE from 'three';
import {OrbitControls,MTLLoader,OBJLoader,ColladaLoader,GLTFLoader} from './loader';

import Model from './model'

class ObjMtlModel extends Model{
  static defaultProps = Object.assign({},Model.defaultProps,{
    loader: 'objmtl'
  })
  constructor(props){
    super(props)
    // console.log(props)
  }
  load3dModel(){
    var {src,mtl,texPath} = this.props;
 
    if(!src || !mtl) return false

    var mtl_loader =  new THREE.MTLLoader()
    var obj_loader = new THREE.OBJLoader()

    mtl_loader.setTexturePath(texPath)
    
    mtl_loader.load(mtl, materials => {
      materials.preload();

      obj_loader.setMaterials( materials )
      .load(src, obj3d =>{
        var bound_box = this.computeBoundingBox(obj3d);
        // debugger
        var front = bound_box.max;
        var cz = bound_box.max.z - bound_box.min.z;

        this.camera.position.set(0, 0, front.z + cz*1.5);

        this.initControl()
        // this.scene.add(obj3d);
        this.obj3d = obj3d;

        this.props.onLoad && this.props.onLoad()
      }, (xhr)=>{
        this.props.onProgress && this.props.onProgress(xhr)
      });

    });

  }
}

export default ObjMtlModel