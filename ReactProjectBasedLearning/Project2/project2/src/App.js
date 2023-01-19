import './App.css';

const App =() => {
  //const name= 'Chad'
  const name=null
  //ternary variables 
  const isNameShowing = false;
  return (
    <div className="App">
      <h1> Hello, {isNameShowing?name :"someone"}</h1>
      {name? (
          <>
          test
          </>
         ) : (
          <h1> test</h1>
         )}

      
    </div>
  );
}

export default App;
