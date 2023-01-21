import React from 'react'
import {db} from "../Config"
import {collection} from "firebase/firestore"
import {storage} from "firebase/storage"

const Signup = () => {
  return (
    <div>
      <form type="POST">
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