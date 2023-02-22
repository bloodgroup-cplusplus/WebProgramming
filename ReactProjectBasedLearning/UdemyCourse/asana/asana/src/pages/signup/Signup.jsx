import React from 'react'
import { useState } from 'react'
import "./Signup.css"

const Signup = () => {
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[displayName,setDisplayName] = useState("")
  const[thumbnail,setThubnail] = useState(null)
  const[thumbnailError,setThumbnailError] = useState(null)

  const handleFileChange = (e)=>{
    setThubnail(null)
    let selected = e.target.files [0]
    console.log(selected)


    if(!selected)
    {
      setThumbnailError('Please select a file')
      return 
    }

    if(!selected.type.includes('image'))
    {
      setThumbnailError('Selected file must be an image')
      return 
    }

    if(selected.size>1000000)
    {
      setThumbnailError("image file size must be less than 10mb")
      return 
    }
    setThumbnailError(null)
    setThumbnailError(selected)
    console.log("thumbnail updated")

  }


  return (
    <form className='auth-form'>
      <h2>Sign up</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />



      </label>

      <label>
        <span>Password:</span>
        <input
          type="password"
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />

      </label>



      <label>
        <span>Display Name;</span>
        <input
          type="text"
          required
          value={displayName}
          onChange={(e)=>setDisplayName(e.target.value)}
          />



      </label>

        <label>
        <span>profile thumbnail:</span>
        <input
          type="file"
          required
          onChange={handleFileChange}
          />

    {thumbnailError && <div className='error'>{thumbnailError} </div>}
    </label>
    <button className='btn'>Sign up </button>
    </form>
  )
}

export default Signup