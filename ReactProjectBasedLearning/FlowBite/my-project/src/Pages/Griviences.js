import React from 'react'
import {useAuthContext} from "../Hooks/useAuthContext"
import {useCollection} from "../Hooks/useCollection"
import ListGriviences from './ListGriviences'




const Griviences = () => {

    const{user} = useAuthContext()
    const{documents,error} = useCollection("Griviences")

  return (
    <>
    <div>
        {error && alert(Error)}
        {documents && <ListGriviences griviences={documents} user={user}/>}
    </div> 
    </>
  )
}

export default Griviences