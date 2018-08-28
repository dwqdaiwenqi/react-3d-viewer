
export default function Tick(fuc,name){
  var Renderer = {animate:true,name:''}

  var els = [
    Object.assign(Object.create(Renderer),{fuc,name})
  ]
  var animate = ()=>{
    requestAnimationFrame(animate)
    els.forEach(o=>{
      var {fuc,animate} = o
      if(animate){
        fuc.call(o,Date.now())
      }
      
    })
  }
  animate()
  //debugger
  Tick = (fuc,name) =>{
    //debugger
    var o = Object.assign(Object.create(Renderer),{fuc,name})
    els.push(o)
    return o
  }

  return els[0]
}