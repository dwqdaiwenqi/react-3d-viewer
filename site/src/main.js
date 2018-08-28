import React,{Component} from 'react';
import {render} from 'react-dom';

import{Router,Route,Link,withRouter,hashHistory } from 'react-router';

import {JSON_,OBJ,MTL,GLTF,DAE} from './show_models'

import './main.less'

// Tick
// DAE;
// debugger

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showModel: false
    }
  }
  render(){
    return(
      <section className="example">
        <header className="example__title">
          React 3DModel 
        </header>
        <div className="">
          <ul className="example__nav">
            <li><Link to="/JSON">JSON</Link></li>
            <li><Link to="/OBJ">OBJ</Link></li>
            <li><Link to="/MTL">MTL</Link></li>
            <li><Link to="/GLTF">GLTF</Link></li>
            <li><Link to="/DAE">DAE</Link></li>
          </ul>
      
          <div className="example__container" style={{position:'relative'}}>
            {
              this.props.children && React.cloneElement(this.props.children, {
                onWillMount: this.onWillMount.bind(this)
                ,onLoaded: this.onLoaded.bind(this)
              })
            }

            {
              !this.state.showModel && <div style={{
                position:'absolute'
                ,left:'0',top:'0'
                ,width:'100%',height:'100%'
                ,background:'rgba(255,255,255,1)'
                ,fontSize: '20px'
                ,display:'-webkit-box'
                ,WebkitBoxPack:'center'
                ,WebkitBoxAlign:'center'
                ,margin:'0% 0 0 0'
              }}>
                <div className="load-wrapp">              
                  <div className="load-4">
                    <div className="ring-1"></div>
                  </div>
                </div>
              </div>
            }
            
          </div>
        </div>
      </section>
    )
  }
  onWillMount(){
    this.setState({showModel: false})
  }
  onLoaded(){
    //setTimeout(()=>{
    this.setState({showModel: true})
    //},566)
  }
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/JSON" component={JSON_}/>
      <Route path="/OBJ" component={OBJ}/>
      <Route path="/MTL" component={MTL}/>
      <Route path="/GLTF" component={GLTF}/>
      <Route path="/DAE" component={DAE}/>
    </Route>  
  </Router>
  ,document.querySelector('#app')
)
