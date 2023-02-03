import './App.css';

//import routes 

import{BrowserRouter, Routes, Route} from 'react-router-dom'

// page components 

import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

function App() {
  return (
    <div className="App">
      Happy hour
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path ="/create" element={<Create/>}/>
        <Route path ="/search" element={<Search/>}/>
        <Route path = "/recipes/:id" element={<Recipe/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
