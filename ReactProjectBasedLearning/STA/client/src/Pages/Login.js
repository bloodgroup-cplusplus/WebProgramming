import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <label>
          STA_ID:
          <input type='text' name="sta_id" required />
        </label>
        <br></br>

        <label> 
          Teacher_Name:
          <input type="text" name="name" required/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login