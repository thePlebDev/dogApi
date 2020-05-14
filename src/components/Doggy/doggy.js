import React from 'react'
import PropTypes from 'prop-types'


const Doggy=(props) =>{

  const images= props.data.map(item=><img src={item} alt="doggy"></img>)
  return(
    <div>{images}</div>
  )
}

Doggy.propTypes = {
  data: PropTypes.array
}
export default Doggy
