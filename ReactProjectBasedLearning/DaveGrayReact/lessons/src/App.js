import logo from './logo.svg';
import './App.css';

function App() {
  // objects cannot be rendered 
  // a boolean will not be rendered as well
  // a value gets rendered 
  // a string gets rendered 
  // anything gets rendered 
  // value 
  // curly braces plus comment 

  const handleNameChange = () =>{
    const names=['Bob','Chad','Kyle'];
    const int= Math.floor(Math.random()*3);
    return names[int];
  }
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
          Hello {handleNameChange()}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{1+1}</p>
      </header>
    </div>
  );
}

export default App;
