import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode.js';

const Navbar = (props) => {
  // const [darkMode, setDarkMode] = useDarkMode('darkModeOn', false);
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
