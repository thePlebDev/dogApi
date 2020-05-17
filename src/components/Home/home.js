import React from 'react';

import Doggy from '../Doggy/doggy'
import Loading from '../Loading/loading'

const Home = (props) =>{

  let dog;
  if(props.data){
    dog =<Doggy data={props.data} />
  }else{
    dog =<Loading />
  }
return(
  <div>
    {dog}
  </div>
)
}

export default Home
