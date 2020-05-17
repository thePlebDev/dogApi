import React from 'react';
import Button from '@material-ui/core/Button';




const SaveButton = (props)=>{

  return(
    <Button onClick={props.clickFunc} variant="outlined">
    Save
    </Button>
  )
}


const UnSaveButton = (props)=>{
  return(
    <Button onClick={props.clickFunc} variant="contained" color="primary">
    Saved
    </Button>
  )
}


export {SaveButton,UnSaveButton}
