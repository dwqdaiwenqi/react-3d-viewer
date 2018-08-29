```js
import {OBJModel} from 'react-3d-viewer'

render(){
  return(
    <div>
      <OBJModel 
        width="400" height="400"  
        position={{x:0,y:-100,z:0}} 
        src="./src/lib/model/freedom.obj"
        onLoad={()=>{
          //...
        }}
        onProgress={xhr=>{
          //...
        }}
      />
    </div>
  )
}
```