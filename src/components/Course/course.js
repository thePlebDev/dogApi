import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { SaveButton,UnSaveButton } from '../Buttons/buttons'
import { sessionStoreItem, sessionDeleteItem } from '../../utils/sessionStorage'


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


const CourseList =(props)=>{
  const [value,setValue] = useState(false)

  const handleClick=(event)=>{
    if(value){
      sessionDeleteItem(props.data)
      setValue(false)
    }else{
      sessionStoreItem(props.data)
      setValue(true)
    }
  }
  const classes = useStyles();

  return(
    <div>

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media}
              image={props.data}
              title="Cute Pupper"
              onClick={handleClick}
              />
            </CardActionArea>
            {value ?
              <UnSaveButton clickFunc={handleClick}/>
              :
              <SaveButton clickFunc={handleClick}/>
            }
          </Card>
    </div>
  )
}

export default CourseList
