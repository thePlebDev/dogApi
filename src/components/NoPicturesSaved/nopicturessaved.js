import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  text:{
    "margin-left":"40%"
  }
});

export default function NoPics() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>

        <Typography variant="h5" component="h2" className={classes.text}>
          No images saved.
        </Typography>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
