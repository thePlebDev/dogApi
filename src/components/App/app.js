import React from 'react';

import Doggy from '../Doggy/doggy'

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



  render(){
    const links = this.state.messages[0]
    let dog;
    if(links){
      dog =<Doggy data={links} />
    }else{
      dog =<div>nothing here</div>
    }


  // links.map(item => console.log('printed'))

    return(
      <div>
        {dog}
      </div>
    )
  }
}

export default App
