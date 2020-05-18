import React,{ useState } from 'react'


import { sessionStorageArray } from '../../utils/sessionStorage';
import ImageGrid from '../ImageGrid/imagegrid'
import NoImagesSaved from '../NoPicturesSaved/nopicturessaved'


const Saved = ()=>{
  const [state,setState] = useState(sessionStorageArray())

return(
  <div>
      {state[0]
        ? <ImageGrid state={state} setState={setState} />
        : <NoImagesSaved />
      }
  </div>
)
}

export default Saved
