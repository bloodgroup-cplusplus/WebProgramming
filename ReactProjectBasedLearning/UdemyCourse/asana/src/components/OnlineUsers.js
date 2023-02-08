import "./OnlineUsers.css"
import {useCollection} from "../hooks/useCollection"
import Avatar from "./Avatar"
import React from 'react'

export default function OnlineUsers() {
    const {error,documents} = useCollection('users')
  return (
    <div className="user-list">
        <h2> All Users</h2>
        {error && <div className="error">{error}</div>}
        {documents && documents.map(user=>(
            <div key = {user.id}>
                <span>{}</span>
                <Avatar src={user.photoURL} />

            </div>
        ))}
      
    </div>
  )
}