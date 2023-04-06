// rafce is react arrow functions component export
import React from 'react'
import Link from 'next/link'

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Chad's Media</h1>
      <ul>
        <li>
          <Link href ="/">Home</Link>
        </li>

        <li>
          <Link href = "/about">About</Link>
        </li>

        <li>
          <Link href = '/about/team'>Team</Link>
        </li>
      </ul>
    </div>
  )
}

export default Homepage