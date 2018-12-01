
import * as THREE from 'three';
import {OrbitControls,MTLLoader,OBJLoader,ColladaLoader,GLTFLoader} from './loader';

import Model from './model'


class JSONModel extends Model{
  static defaultProps = Object.assign({},Model.defaultProps,{
    loader: 'json'
  })
  constructor(props){
    super(props)
  }
  load3dModel(){
    var {src,onProgress,onLoad,texPath} = this.props;

    let loader = new THREE.JSONLoader()
    loader.setTexturePath(texPath)
    loader.load(src,(geometry,materials)=>{

      var obj3d =  new THREE.Mesh(geometry,materials);
      geometry.computeBoundingBox();
      
      //debugger;

      var {center,radius} = geometry.boundingSphere;
      var difv = center.clone().multiplyScalar(-1);
      obj3d.geometry.applyMatrix(
        new THREE.Matrix4().makeTranslation(difv.x,difv.y,difv.z  )
      );

      //this.scene.add(obj3d);

      var bound_box = this.computeBoundingBox(obj3d);

      var front = bound_box.max;

      this.camera.position.set(front.x, front.y, front.z);

      this.camera.position.copy(  
        difv.clone().add( new THREE.Vector3(0,0,radius*1.666) ) 
      );
      this.initControl();
      //debugger

      this.obj3d = obj3d;

      onLoad && onLoad()

    },(xhr)=>{
      onProgress && onProgress(xhr)
      
    });
  }
}

export default JSONModel
