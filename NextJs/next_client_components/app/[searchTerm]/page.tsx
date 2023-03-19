// create a search results compoentn s

import React from 'react'

type Props = {
    params:{
        searchTerm:string
    }
}

export default function page({params:{searchTerm}}: Props) {
  return (
    <div>page</div>
  )
}