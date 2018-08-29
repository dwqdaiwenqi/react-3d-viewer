English| [简体中文](./README.CN.md)
# react-3d-viewer
A 3D model viewer component based on react.js. Demo located at http://dwqdaiwenqi.github.io/react-3d-viewer/site/
## Features
* Component-Based
* Update UI using .setState() method
* Support gltf,obj,mtl,json,dae model formats - other formats will be added in the future.
* Provied DirectionLight and AmbientLight components - other components will be provided in the future.
---
## Usage
Get react-3d-viewer through npm or cdn:
```js
npm i react-3d-viewer
```
* [https://unpkg.com/react-3d-viewer@latest/dist/scripts/main.js](https://unpkg.com/react-3d-viewer@latest/dist/scripts/main.js)

Basic
```js
import {OBJModel} from 'react-3d-viewer'

render(){
  return(
    <div>
      <OBJModel src="./a.obj"/>
    </div>
  )
}
```
More parameters
```js
import {Tick,MTLModel} from 'react-3d-viewer'

render(){
  return(
    <div>
     <MTLModel 
        enableZoom = {false}
        position={{x:0,y:-100,z:0}}
        rotation={this.state.rotation}
        mtl="./src/lib/model/freedom.mtl"
        src="./src/lib/model/freedom.obj"
     />
    </div>
  )
}
componentWillMount(){
    this.tick.animate = false
}
componentDidMount(){
  this.tick = Tick(()=>{
    var {rotation} = this.state
    rotation.y += 0.005
    this.setState({rotation})

  })
}
```
[Demo](http://dwqdaiwenqi.github.io/react-3d-viewer/site/) is here. 

## Properties
Property        |       Type            |       Default         |       Description
:-----------------------|:--------------|:--------------|:--------------------------------
width | number  | 500  | The width of container
height | number  | 500  | The height of container
onLoad | function | undefined | A function to be called after the loading is successfully completed
onProgress | function | undefined |  A function to be called while the loading is in progress
enableKeys | boolen | true | Enable or disable the use of keyboard controls
enableRotate | boolen | true | Enable or disable horizontal and vertical rotation of the camera
enableZoom | boolen | true | Enable or disable zooming (dollying) of the camera
enabled | boolen | true | Whether or not the controls are enabled
src | string | undefined | The path of the file
mtl | string | undefined | A string containing the pathof the .mtl file
anitialias | boolen | true | Whether to perform antialiasing
position | object | {x:0,y:0,z:0} | Object's position
rotation | object | {x:0,y:0,z:0} | Object's rotation

## How it works
The `<FormatModel>` creates a camera, scene, light source and a WebGL renderer.The DOM returned by the renderer (a `<canvas>` element) is added to the document and configured to fill the viewport.
 
## License

MIT





