
import * as THREE from 'three';
import {OrbitControls,MTLLoader,OBJLoader,ColladaLoader,GLTFLoader} from './loader';


import Model from './model'

class ColladaModel extends Model{
  static defaultProps = Object.assign({},Model.defaultProps,{
    loader: 'collada'
  })
  constructor(props){
    super(props)
    // console.log(props)
  }
  load3dModel(){

    // debugger
    var {src,texPath} = this.props;
 
    if(!src) return false

    // model
    // debugger
    var collada_loader = new THREE.ColladaLoader()

    collada_loader.load(src, data => {

        this.obj3d = data.scene;
      // Add the objects to the scene 
        // this.scene.add(data.scene);
        // debugger
        // Look for a camera and lighting
        var result = {};
        data.scene.traverse(function (n) { 
          // traverseScene(n, result);
          if (n instanceof THREE.Camera) {
            if (!result.cameras)
              result.cameras = [];
            
            result.cameras.push(n);
          }
          // Look for lights
          if (n instanceof THREE.Light) {
            if (!result.lights)
              result.lights = [];
            
            result.lights.push(n);
          }

        });

        if (result.cameras && result.cameras.length){
          this.camera = result.cameras[0];
          this.camera.position.copy( 
            this.camera.position.clone().add(new THREE.Vector3(0,0,.01))
          )
          //debugger
        }else {
          // Find a good camera position based on the size of the scene
          
          let boundingBox = this.computeBoundingBox(data.scene);
          let front = boundingBox.max;
          let cz = boundingBox.max.z - boundingBox.min.z;
          // this.camera.position.set(front.x, front.y, front.z);
          this.camera.position.set(front.x, front.y, front.z);
          // debugger

          //////
          // let spe = new THREE.Mesh(
          //   new THREE.SphereGeometry(.1)
          //   ,new THREE.MeshBasicMaterial({
          //     wireframe:true
          //     ,side:THREE.DoubleSide
          //     ,color:new THREE.Color().setRGB(1,0,1)
          //   })
          // )
          // this.scene.add(spe)
          // debugger

          // spe.position.copy( front.clone())
          ////
          // this.camera.position.set(front.x, front.y, front.z);
          
        }
        
        if (result.lights && result.lights.length) {
        }
        else{ }
        
        this.initControl()
        
        this.props.onLoad && this.props.onLoad();
      }
      ,xhr =>{
        this.props.onProgress && this.props.onProgress(xhr)
        // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      }
      ,()=>{
        console.log( 'An error happened' );
      }
    );



  }
}

export default ColladaModel