import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useAuthContext } from './hooks/useAuthContext';



// pages and components 

import Dashboard from "./pages/dashboard/Dashboard"
import Create from "./pages/create/Create"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Project from "./pages/project/Project"
import Feed from "./pages/feed/Feed"
import Home from "./pages/home/Home"
import Navbar from './components/Navbar';

function App() {
  const{user,authIsReady} = useAuthContext()
  return (
    <div className="text-lg text-red-500">
      {authIsReady &&(
    <BrowserRouter>
      <div className='container'>

        <Navbar/>
        {/*<ResponsiveNavbar/>*/}
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path ="/login" element={!user?<Login/>:<Dashboard/>}/>
          <Route path = "/signup" element={!user?<Signup/> : <Dashboard/>}/>
          <Route path = "/feed" element={<Feed/>}/>
          <Route path = "/dashboard" element={ user?<Dashboard/>: <Login/>}/>
          <Route path = "/projects/:id" element={user?<Project/>:<Login/>}/>
          <Route path = "/chad" />
          <Route path = "/create" element = {user?<Create/>:<Login/>}/>
        </Routes>
      </div>
   </BrowserRouter>
      )}
   </div>
  );
}

export default App;
