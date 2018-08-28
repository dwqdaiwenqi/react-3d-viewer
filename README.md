# react-3d-model
A 3D model viewer component based on react.js. Demo located at http://dwqdaiwenqi.github.io/react-3d-model/site/
## 特征
* 组件化风格创建
* 支持gltf、obj、mtl、json、dae模型格式 - 未来支持更多
* 数据驱动方式改变状态
* 支持DirectionLigitn、AmbientLight组件- 未来支持更多
---
## 使用
通过npm或者cdn获取
```js
npm i react-3d-model
```
* [https://unpkg.com/react-3d-model@latest/dist/main.js](https://unpkg.com/react-3d-model@latest/dist/main.js)

基本使用
```js
import {OBJModel} from 'react-3d-model'

render(){
  return(
    <div>
      <OBJModel src="./a.obj"/>
    </div>
  )
}
```
更复杂的使用
```js
import {Tick,MTLModel} from 'react-3d-model'

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
## 怎么运行的


## License

MIT





