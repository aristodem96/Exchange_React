/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <div>
      <header className="Header" >
        <img src={require("../assets/logo.png")} className="App-logo Logo" alt="logo" />
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <NavLink to='/transactions'>Transactions</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/howtoexchange'>How To Exchange</NavLink>
            <NavLink to='/support'>Support</NavLink>
            <NavLink to='/'><button>Got Exchange</button></NavLink>
          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
          🛠️
        </button>

      </header>

    </div>
  );
}
