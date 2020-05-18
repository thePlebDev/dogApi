import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkStyles:{
    "text-decoration":'none',
    "color":'black',
    "border": "1px solid black",
    "padding":5,
    "border-radius":5
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link to='/' className={classes.linkStyles}>Home</Link>
          </Typography>
          <Button color="inherit"><Link to='/saved' className={classes.linkStyles}>Saved Images</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
