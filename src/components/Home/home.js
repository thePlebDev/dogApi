import React from 'react';
import Button from '@material-ui/core/Button'

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
    <Button variant="contained" color="primary" fullWidth={true} onClick={props.clickFunc}>CLICK FOR NEW PUPPERS</Button>
  </div>
)
}

export default Home
