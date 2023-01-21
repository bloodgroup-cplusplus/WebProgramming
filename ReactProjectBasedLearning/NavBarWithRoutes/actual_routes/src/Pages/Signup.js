import React from 'react'

const Signup = () => {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type='text' name="sta_id" required />
        </label>
        <br></br>

        <label> 
          Designation:
          <input type="text" name="name" required/>
        </label>
        
          <br></br>
        <label>
          Passport_Photo:
          <input type="file" accept="image/*" id="upload" required/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Signup