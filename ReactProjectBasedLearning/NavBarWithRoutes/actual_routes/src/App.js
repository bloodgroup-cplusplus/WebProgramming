import logo from './logo.svg';
import './App.css';
import AppRouter from "./AppRouter"
import NavBar from "./Components/NavBar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <AppRouter/>
    </header>
    </div>
  );
}

export default App;
