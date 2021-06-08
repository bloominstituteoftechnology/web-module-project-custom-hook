import React from 'react'; // removed { useState } to clear the following warning in console: Line 1:17:  'useState' is defined but never used  no-unused-vars

const Navbar = (props) => {
  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
