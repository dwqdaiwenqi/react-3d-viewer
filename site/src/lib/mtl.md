```js
import Tick from './tick'

render(){
  return(
    <div>
     <ObjMtlModel 
      enableZoom = {false}
      position={{x:0,y:-100,z:0}}
      rotation={this.state.rotation}
      mtl={'//192.168.75.25:7878/18-spring/react-3dmodel-viewer/src/freedom.mtl'}
      src={'//192.168.75.25:7878/18-spring/react-3dmodel-viewer/src/freedom.obj'}
      onProgress={(xhr)=>{
        console.log('objmtl',xhr)
      }}
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