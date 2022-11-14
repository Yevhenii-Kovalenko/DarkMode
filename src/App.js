import React from 'react';
import { DarkModeProvider } from './components/DarkModeContext';
import Main from './components/Main';
import Navbar from "./components/Navbar";


function App() {
  

  return (
    <DarkModeProvider>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </DarkModeProvider>
  );
}

export default App;
