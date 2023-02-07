// styles 

import './Dashboard.css'
import Sidebar from '../../components/Sidebar' 

import { useAuthContext } from '../../hooks/useAuthContext'

import React from 'react'

export default function Dashboard() {
  const{user} = useAuthContext()
  return (
    <>
    {user && <Sidebar/>}
    </>

      
  )
}
