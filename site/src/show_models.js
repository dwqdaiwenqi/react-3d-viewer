import React,{Component} from 'react';
import {Tick,JSONModel,OBJModel,MTLModel,GLTFModel,DAEModel,AmbientLight,DirectionLight} from '../../dist/scripts/react-3d-viewer.js'
import marked from 'marked'
import './show_model.less'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

// GLTFModel;
// AmbientLight,DirectionLight
// debugger

export class JSON_ extends Component{
  constructor(props){
    super(props)
    this.state = {
      src: '',
      rotation:{x:0,y:0,z:0},
      md: marked(require('./lib/json.md')),
      width: window.innerWidth*1
    }
  }
  render(){
    var __html = this.state.md
    var {width} = this.state
    if(width>500) width = 500;
    return(
      <section>
        {/* <header>json!</header> */}
        <div className="model-container">
          <JSONModel
            src="./src/lib/model/kapool.js"
            texPath=""
            width={width} height={width}
            onLoad={()=>{
              this.props.onLoaded()
            }}
          />
        </div>
        <div ref="markdown" dangerouslySetInnerHTML = {{__html: __html }}></div>
      </section>

    )
  }
  componentDidUpdate(){
    //Prism.highlightAll()
    Prism.highlightElement(this.refs['markdown'].querySelector('code'));
  }
  componentWillMount(){
    this.props.onWillMount()
  }
}

export class OBJ extends Component{
  render(){
    var __html = marked(require('./lib/obj.md'));
    return(
      <section>
        {/* <header>obj!</header> */}
        <div className="model-container">
          <OBJModel 
            width="400" height="400"  
            position={{x:0,y:-100,z:0}} 
            src="./src/lib/model/freedom.obj"
            onLoad={()=>{
              //debugger
              this.props.onLoaded()
            }}
          />
        </div>
        <div ref="markdown" dangerouslySetInnerHTML = {{__html: __html}}></div>
      </section>
    )
  }
  componentDidUpdate(){
    //Prism.highlightAll()
    Prism.highlightElement(this.refs['markdown'].querySelector('code'));
  }
  componentWillMount(){
    //debugger
    this.props.onWillMount()
  }
}



export class MTL extends Component{
  constructor(props){
    super(props)
    this.state = {
      src: '',
      rotation:{x:0,y:0,z:0},
      md: marked(require('./lib/mtl.md')),
      width: window.innerWidth*1
    }
  }
  render(){
    var __html = this.state.md
    //console.log(__html);
    var {width} = this.state
    if(width>600) width = 600;
    return(
      <section>
        {/* <header>mtl</header> */}
        <div className="model-container">
          <MTLModel 
            enableZoom = {false}
            position={{x:0,y:-100,z:0}}
            rotation={this.state.rotation}
            width={width} height={width}
            mtl="./src/lib/model/freedom.mtl"
            src="./src/lib/model/freedom.obj"
            texPath="./src/lib/model/"
            onProgress={(xhr)=>{
              //console.log('objmtl',xhr)
            }}
            onLoad={()=>{
              this.props.onLoaded()
            }}
          />
        </div>
        <div ref="markdown" dangerouslySetInnerHTML = {{__html: __html }}>
        </div>
      </section>

    )
  }
  componentWillMount(){
    //debugger
    this.props.onWillMount()
  }
  componentDidUpdate(){
    Prism.highlightElement(this.refs['markdown'].querySelector('code'))
  }
  componentWillUnmount(){
    
    this.tick.animate = false
  }
  componentDidMount(){
    this.tick = Tick(()=>{
      var {rotation} = this.state
      rotation.y += 0.005
      this.setState({rotation})

    })
  }
  
}

export class GLTF extends Component{
  constructor(){
    super()
    this.state = {
      src: '',
      rotation:{x:0,y:0,z:0},
      md: marked(require('./lib/gltf.md')),
      width: window.innerWidth*1
    }
  }
  render(){
    var __html = this.state.md
    var {width} = this.state
    if(width>600) width = 600;
    
    return(
      <section>
        <div className="model-container">
          <GLTFModel
            src="./src/lib/model/DamagedHelmet.gltf"
            width={width} height={width}
            onLoad={()=>{
              this.props.onLoaded()
            }}
          >
            <AmbientLight color={0xffffff}/>
            <DirectionLight color={0xffffff} position={{x:100,y:200,z:100}}/>
            <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/>
          </GLTFModel>
        </div>
        <div ref="markdown" dangerouslySetInnerHTML = {{__html: this.state.md}}></div>
      </section>
    )
  }
  componentDidUpdate(){
    //Prism.highlightAll()
    Prism.highlightElement(this.refs['markdown'].querySelector('code'));
  }
  componentWillMount(){
    //debugger
    this.props.onWillMount()
  }
} 

export class DAE extends Component{
  constructor(props){
    super(props)
    this.state = {
      md: marked(require('./lib/dae.md'))
      ,light_position:{x:30,y:30,z:30}
      , width: innerWidth*1
    }
  }
  render(){
    var __html = this.state.md;
    var {width} = this.state
    if(width>600) width = 600;
    return(
      <section>
        <div className="model-container">
          <DAEModel 
            src={'./src/lib/model/PikachuF_ColladaMax.DAE'}
            width={width} height={width}
            scale={{x:.5,y:.5,z:.5}}
            rotation={{x:-.3,y:.2,z:.2}}
            position={{x:0,y:-.3,z:0}}
            enableRotate={false}
            onLoad={()=>{
              this.props.onLoaded()
            }}
          >
            <DirectionLight position={this.state.light_position}/>
          </DAEModel>
        </div>
        <div ref="markdown" dangerouslySetInnerHTML = {{__html: __html}}></div>
      </section>
    )
  }
  componentDidUpdate(){
    //Prism.highlightAll()
    Prism.highlightElement(this.refs['markdown'].querySelector('code'));
  }
  componentWillMount(){
    this.props.onWillMount()
  }
  componentWillUnmount(){
    
    this.tick.animate = false
  }
  componentDidMount(){
    this.tick = Tick(t=>{
      var {light_position} = this.state
      light_position.z += Math.sin(t*0.001)
      this.setState({light_position})

    })
  }
}
