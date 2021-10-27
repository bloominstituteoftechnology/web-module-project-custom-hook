import React, { useState } from 'react';


const Navbar = (props) => {
  console.log( 'nav', props.darkMode)
  
  return (
    <nav className={ props.darkMode ? 'navbar' : 'navbar dark-mode'}>
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={props.toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
