import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import { sessionDeleteItem } from '../../utils/sessionStorage'




//const image = "image="https://images.dog.ceo/breeds/keeshond/n02112350_6701.jpg""

const useStyles = makeStyles({
  root:{
    maxWidth: 345,
  },
  media:{
    paddingTop:'56.25%',
    height: 200
  },

})


const SavedDogs =({data,state,setState})=>{
  console.log(state)
  const classes = useStyles();

  const handleClick=()=>{
    sessionDeleteItem(data)
    let newState = state.filter(item=> item !== data)
    setState(newState)

  }
  return(
    <div>

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media}
              image={data}
              title="Cute Pupper"
              />
            </CardActionArea>
            <Button variant="contained" color="primary" onClick={handleClick}>
              Delete
            </Button>

          </Card>
    </div>
  )
}

export default SavedDogs
