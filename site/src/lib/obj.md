```js
render(){
  return(
    <div>
      <ObjModel 
          width="300" height="300"  
          position={{x:0,y:-100,z:0}} 
          src={'//192.168.75.25:7878/18-spring/react-3dmodel-viewer/src/freedom.obj'}
          onProgress={(xhr)=>{
            console.log('obj',xhr)
          }}
        />
    </div>
  )
}
```