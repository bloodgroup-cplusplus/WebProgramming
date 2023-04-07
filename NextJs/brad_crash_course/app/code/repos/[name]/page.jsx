import React from 'react'

const RepoPage = ({params:{name}}) => {
  return (
    <div className='card'>
        <h2>{name}</h2>
        <p>Repo Details</p>
    </div>
  )
}

export default RepoPage
