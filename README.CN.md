[English](./README.md) | 简体中文
# react-3d-viewer
一个基于react.js的组件化3d模型查看工具. Demo请戳 http://dwqdaiwenqi.github.io/react-3d-viewer/site/
## 特征
* 组件化的
* .setState()方法更新UI
* 支持 gltf、obj、mtl、json、dae 模型格式 - 其他格式以后支持
* 提供 `<DirectionLight/>` and `<AmbientLight/>` 组件 - 其他灯光组件以后提供
---
## 使用
从npm或cdn上获取react-3d-viewer
```js
npm i react-3d-viewer
```
* [https://unpkg.com/react-3d-viewer@latest/dist/scripts/main.js](https://unpkg.com/react-3d-viewer@latest/dist/scripts/main.js)

基本使用
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
其他参数
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
[Demo](http://dwqdaiwenqi.github.io/react-3d-viewer/site/) 在这儿. 

## License

MIT
