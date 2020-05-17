import React,{ useState } from 'react'
import Grid from '@material-ui/core/Grid';

import { sessionStorageArray } from '../../utils/sessionStorage';
import SavedDogs from '../SavedDogs/saveddogs'


const Saved = ()=>{
  const [state,setState] = useState(sessionStorageArray())

  //enumeration of sessionStorage
return(
<Grid container spacing={3}  justify="center" alignItems='center' style={{padding:24}} >
{ state.map(item=>(
<Grid item xs={10} sm={6} lg={3}  style={{ margin:5}}>
  <SavedDogs data={item} state={state} setState={setState}/>
</Grid>
)
)}

</Grid>
)
}

export default Saved
