import React from "react";
import logo from '../../logo.svg';
import './Header.css';

const Header =  ({name, city, status}) => {
    return (
        <header className="header-header">
          <img src={logo} className="header-logo" alt="logo" />
          <p>
            name : {name}
            <br/>
            city : {city}
            <br/>
            status : {status}
          </p>
          <a
            className="header-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    )
}

export default Header;