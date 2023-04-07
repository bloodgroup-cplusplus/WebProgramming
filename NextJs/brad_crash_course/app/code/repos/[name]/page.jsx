import React from 'react'
import Repo from '@/app/components/Repo'

const RepoPage = ({params:{name}}) => {
  return (
    <div className='card'>
        <Repo name={name}/>
    </div>
  )
}

export default RepoPage
