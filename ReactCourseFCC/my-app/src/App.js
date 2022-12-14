import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar'

/*function App() {
  return (
    <div>
      <img src={logo} width="100px"/>
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was first relased in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
      </ul>


    </div>
  );
}
*/

function Content()
{
  return(
    <>
    <h1>Why are we excited to learn react</h1>
    <ol>
      <li>chad</li>
      <li>lol</li>
      <li>bale</li>
    </ol>
  
  </> )
  }


function MainContent()
{
  return (
    <div>
      <Header />
      <Content />
      <Footer/>
    </div>
  )

}

function Header()
{
  return (
    <>
    <header>
      <nav className='nav'>
        <img src={logo} className="nav-logo"/>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    </>

  )
}

function Footer()
{
  return (
    <footer>
      <small>copyright 2021 ziroll development. All rights reserved</small>
    </footer>
  )
}

export default function App()
{
  return (
    <div>
      <Navbar/>
      <Main/>

    </div>
  )
}


