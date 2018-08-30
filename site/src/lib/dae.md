```js
import {DAEModel} from 'react-3d-viewer'

render(){
  return(
    <div>
      <DAEModel src="./src/lib/model/Ruins_dae.dae">
        <DirectionLight position={this.state.light_position}/>
      </DAEModel>
    </div>
  )
}
componentWillUnmount(){
  this.tick.animate = false
}
componentDidMount(){
  this.tick = Tick(t=>{
    var {light_position} = this.state
    light_position.z += Math.sin(t*0.0008)
    this.setState({light_position})

  })
}
```