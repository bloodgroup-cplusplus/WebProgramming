import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Cec from "./Components/Cec";
import Dec from "./Components/Dec";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"

function App() {
  return (
    <>    
    <BrowserRouter>
    <Navbar/>
    <Header/>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    <Cec/>
    <Dec/>
    <Footer/>
    </>
    
  );
}

export default App;
