import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

const NavBar = () =>{
  return(
    <div>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h5" color="inherit">
            React and Material-UI Sample Application
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  )
}




export default NavBar
