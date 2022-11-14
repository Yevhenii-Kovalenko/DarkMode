import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

function Navbar(props) {
   const {darkMode , toggleDark} = useContext(DarkModeContext);
   return ( 
      <nav 
      className={darkMode ? "dark" : ""}>
         <img  className='nav--logo_icon'
               src="./images/react-icon-small.png"/>
         <h3 className='nav--logo_text'>ReactFacts</h3>
         <div className='toggler'>
            <p className='toggler--light'>Light</p>
               <div 
                  onClick={toggleDark}
                  className="toggler--slider">
                  <div class="toggler--slider--circle"></div>
               </div>
            <p className='toggler--dark'>Dark</p>
         </div>
      </nav>
   );
}

export default Navbar;
