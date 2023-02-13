import React from 'react'
import "./Profile.css"
import {useAuthContext} from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection"
export default function Profile() {
  const {user}=useAuthContext()
  const {documents,error} = useCollection("Teachers_Data")
  console.log(documents)
  //console.log(user.displayName)
  console.log(user.displayName)
  return (
    <>

    {error &&<p>Error</p>}

    {documents &&<div className="profile-card">
      <div className="image">
        <img src="" alt="" className="profile-img"/>
      </div>
      <div className="text-data">
        <span className="name">Sikkim Teachers Association</span>
        <span className="job">Name: {user.displayName}</span>
        {/*<--span className="job">STA ID: {documents.sta_id}</span>
        <span className="job">School:{documents.school}</span>*/}
        <span className="job">Valid upto : 31 December 2023</span>
      </div>
      <div className="image">
        <img src="" alt="" class=""/>
      </div> 
    </div>}
    </>
  )
}
