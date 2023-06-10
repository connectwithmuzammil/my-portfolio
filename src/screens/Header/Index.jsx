import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Style.css";
const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <a href="#" className="logo">
          Muzammil
        </a>

        <MenuIcon id="menu-icon"></MenuIcon>

        <nav className="nav">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
