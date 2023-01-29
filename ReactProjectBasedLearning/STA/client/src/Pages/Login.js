//import { getDocs } from 'firebase/firestore'
import React from 'react'

/*async function user_login()
{
  var flag=false 
  const querySnapshot=await getDocs(collection(db,"Teachers_Data"));
  querySnapshot.forEach((doc)=>{
    if(doc.data()["sta"]==)
    {
      


    }
  })

}*/
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