```js
render(){
  return(
    <div>
      <GltfModel
        src={'//192.168.75.25:7878/18-spring/react-3dmodel-viewer/src/DamagedHelmet.gltf'}
      >
        <AmbientLight color={0xffffff}/>
        <DirectionLight color={0xffffff} position={{x:100,y:200,z:100}}/>
        <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/>
      </GltfModel>
    </div>
  )
}

```