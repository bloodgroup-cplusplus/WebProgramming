import './App.css';
import Header from "./Header";
import Content from "./Content"
import Footer from "./Footer"
// this is a functional components
function App() {
  // objects cannot be rendered 
  // a boolean will not be rendered as well
  // a value gets rendered 
  // a string gets rendered 
  // anything gets rendered 
  // value 
  // curly braces plus comment 
 
  return (

    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
        </div>
  );
}

export default App;
