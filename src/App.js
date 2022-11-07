import React from 'react';
import Main from './components/Main';
import Navbar from "./components/Navbar";


function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDark(){
    setDarkMode(prevDarkMode => !prevDarkMode)
    console.log('click');
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDark={toggleDark}/>
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
