import React, { createContext } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider (props){
   const [darkMode, setDarkMode] = React.useState(true)

   const toggleDark = () => {
      setDarkMode(prevDarkMode => !prevDarkMode)
   }
   return(
      <div>
         <DarkModeContext.Provider value={{darkMode, toggleDark}}>
            {props.children}
         </DarkModeContext.Provider>
      </div>
   )
}

export {DarkModeContext , DarkModeProvider} ;