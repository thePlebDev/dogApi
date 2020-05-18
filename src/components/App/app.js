import React from 'react';
import { Switch,Route} from 'react-router-dom';

import NavBar from '../NavBar/navBar'
import Home from '../Home/home'
import Saved from '../Saved/save'


import './index.css'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {messages:[]}


  }

  componentDidMount(){
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(res=> res.json())
      .then(data=> this.setState({messages:[data.message]}))
  }

  clickHandler=()=>{
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(res=> res.json())
      .then(data=> this.setState({messages:[data.message]}))
  }

  render(){
    const links = this.state.messages[0]
    return(
      <div>
      <NavBar />
      <Switch>
        <Route path='/' exact >
          <Home data={links} clickFunc={this.clickHandler}/>
        </Route>
        <Route path='/saved' exact >
          <Saved/>
        </Route>
      </Switch>
      </div>
    )
  }
}

export default App
