import React from 'react'
import {useSharedState} from './SharedState'

const ShowState = () => {
    const[sharedState]=useSharedState();
  return (
    <div>
        <p>{sharedState}</p>
    </div>
  )
}

export default ShowState