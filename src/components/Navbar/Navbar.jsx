import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import logo from "../../assets/logo.png";
import "./Navbar.css";
// import Signup from '../Signup/Signup';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function Movetoheader() {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="Logo" onClick={Movetoheader} />
          </div>
          <div className="gpt3__navbar-links_container">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/">What is GPT3</Link>
            </p>
            <p>
              <Link to="/">Open AI</Link>
            </p>
            <p>
              <Link to="/">Case Studies</Link>
            </p>
            <p>
              <Link to="/">Library</Link>
            </p>
          </div>
          <div className="gpt3__navbar-sign">
            <Link to="/Signup">
              <button type="button">Sign up</button>
            </Link>
          </div>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                  <Link to="/">Home</Link>
                </p>
                <p>
                  <Link to="/">What is GPT3?</Link>
                </p>
                <p>
                  <Link to="/">Open AI</Link>
                </p>
                <p>
                  <Link to="/">Case Studies</Link>
                </p>
                <p>
                  <Link to="/">Library</Link>
                </p>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                {/* Use Link component to navigate to Signup page */}
                <Link to="/Signup">
                  <button type="button">Sign up</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
