import React from 'react'
import PropTypes from 'prop-types'
// so when we do the mapping the item is the literal url
import Grid from '@material-ui/core/Grid'

import Course from '../Course/course.js'



const Doggy=(props) =>{


  return(
<Grid container spacing={3}  justify="center" alignItems='center' style={{padding:24}} >
{ props.data.map(item=>(
  <Grid item xs={10} sm={6} lg={3}  style={{ margin:5}}>
    <Course data={item}>
    </Course>
  </Grid>
  )
)}

</Grid>
  )
}

Doggy.propTypes = {
  data: PropTypes.array
}
export default Doggy
