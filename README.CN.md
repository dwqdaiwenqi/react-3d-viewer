[English](./README.md) | 简体中文
# react-3d-viewer [![](https://img.shields.io/npm/v/react-3d-viewer.svg)](https://www.npmjs.com/package/react-3d-viewer) 
一个基于react.js的组件化3d模型查看工具. Demo戳 http://dwqdaiwenqi.github.io/react-3d-viewer/site/
<img src="./preview.jpg" style="margin:0 auto;">
## 特征
* 组件化的
* `.setState()`方法更新UI
* 支持 gltf、obj、mtl、json、dae 模型格式 - 其他格式以后支持
* 提供 `<DirectionLight/>` 和 `<AmbientLight/>` 灯光组件 - 其他灯光组件以后提供
---
## 使用
从npm或cdn上获取react-3d-viewer
```js
npm i react-3d-viewer
```
* [https://unpkg.com/react-3d-viewer@latest/dist/scripts/react-3d-viewer.js](https://unpkg.com/react-3d-viewer@latest/dist/scripts/react-3d-viewer.js)

### Commonjs
```js
import {OBJModel} from 'react-3d-viewer'

render(){
  return(
    <div>
      <OBJModel src="./a.obj" texPath=""/>
    </div>
  )
}
```

```js
import {Tick,MTLModel} from 'react-3d-viewer'

render(){
  return(
    <div>
     <MTLModel 
        enableZoom = {false}
        position={{x:0,y:-100,z:0}}
        rotation={this.state.rotation}
        texPath="./src/lib/model/"
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

```js
import {DAEModel,DirectionLight } from 'react-3d-viewer'

render(){
  return(
    <div>
     <DAEModel 
        src={'./src/lib/model/Ruins_dae.dae'}
        onLoad={()=>{
          // ...
        }}
      >
        <DirectionLight color={0xff00ff}/>
      </DAEModel>
    </div>
  )
}
 
```
### HTML
```html
<script src="https://unpkg.com/react-3d-viewer@latest/dist/scripts/react-3d-viewer.js"></script>
<script src="https://unpkg.com/react@16.4.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.production.min.js"></script>
<div id="example"></div>
<script >
  // 别这么做。。。
  ReactDOM.render(
  React.createElement('div',{ style: { width: 600, margin: '0px auto' } },
  React.createElement(React3DViewer.JSONModel, {src:'./src/lib/model/kapool.js'})
  )
  ,document.getElementById('example'));
</script>
```

更多Demo，[这儿](http://dwqdaiwenqi.github.io/react-3d-viewer/site/)

## 属性
| 属性名 | 类型  | 默认值  |  描述 |
| :------|:------|:------|:------ |
| width | number  | 500  | 容器宽 |
| height | number  | 500  | 容器高 |
| texPath | string | '' | 设置图片的路径
| onLoad | function | undefined | 函数加载完成后调用 
| onProgress | function | undefined |  函数加载过程中调用 |
| enableKeys | boolen | true | 启用或不启用键盘控制 |
| enableRotate | boolen | true | 启用或不启用相机的水平和垂直方向旋转 |
| enableZoom | boolen | true | 启用或不启用相机的缩放 |
| enabled | boolen | true | 启用或不启用整个控制 |
| src | string | undefined | 文件的路径 |
| mtl | string | undefined | .mtl文件的路径 |
| anitialias | boolen | true | 是否启用抗锯齿 |
| position | object | {x:0,y:0,z:0} | 对象的坐标 |
| rotation | object | {x:0,y:0,z:0} | 对象的旋转 |


## 如何工作的
`<FormatModel>`组件创建了相机、场景、灯光和WebGL渲染器。它往文档中添加了一个填满了视口的DOM节点(`<canvas>`元素)。
内部scene是实时渲染的，在componentDidUpdate中检测props，改变对象的属性。

## License

MIT
