import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>    
    <BrowserRouter>
    <Navbar/>

    </BrowserRouter>
    </>
    
  );
}

export default App;
