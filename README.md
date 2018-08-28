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
更多的属性
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
参考这里面的Demo http://dwqdaiwenqi.github.io/react-3d-model/site/

## 怎么运行的
model-element脚本创建相机，场景，光源和WebGL渲染器。渲染器返回的DOM节点（<canvas>元素）将添加到文档中，并配置为填充视口并位于所有其他内容之上。此外，pointer-events: none设置，允许下面的元素进行交互。

向<x-model>DOM 添加元素会导致模型被加载并添加到底层场景中。从DOM中删除元素将从场景中删除它。

每帧都重新渲染场景。对于场景中的每个对象，渲染器找到它的主机节点并向上移动DOM树，解析任何变换，位置和滚动偏移。然后将得到的变换矩阵应用于场景中的对象。更新所有对象后，渲染器会将场景重新绘制到图层。对象现在出现在屏幕上，与其主机DOM节点同步。

## License

MIT





