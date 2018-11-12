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
      texPath="./src/lib/model/"
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