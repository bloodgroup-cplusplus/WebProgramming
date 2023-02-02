import './App.css';
import About from "./pages/About"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from './pages/ProductDetails';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1> The ninja conding comapny</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route  path ="/" element ={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path ="/products/:id" element={<ProductDetails/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path ="/test" element={(
            <div>
              <h2> Test Page</h2>
              <p>Hello!</p>
            </div>
          )}/>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
