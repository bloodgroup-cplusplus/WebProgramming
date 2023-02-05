import './App.css'
import Payment from "./Payment"
import Completion from "./Completion "

import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Payment/>}/>
        <Route path ="/completion" element={<Completion/>}/>
      </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
