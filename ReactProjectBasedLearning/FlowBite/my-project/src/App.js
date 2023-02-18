import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import FindUs from "./Components/FindUs";
import ChiefMinister from "./Components/ChiefMinister";
import EducationMinister from "./Components/EducationMinister";
import AdditionalChiefSecretary from "./Components/AdditionalChiefSecretary";
import President from "./Components/President";
import Cec from "./Components/Cec";
import Dec from "./Components/Dec"
import Gallery from "./Components/Gallery";
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
    <ChiefMinister/>
    <EducationMinister/>
    <AdditionalChiefSecretary/>
    <President/>
    <Cec/>
    <Dec/>
    <Gallery/>
    <FindUs/>
    <Footer/>
    </>
    
  );
}

export default App;
