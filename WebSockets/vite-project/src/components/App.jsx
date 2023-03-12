import { useState } from 'react'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)
  const[id,setId] = useState()

  return (
    <>
    {id}
    <Login onIdSubmit={setId}/>
    </>
  )
}

export default App
