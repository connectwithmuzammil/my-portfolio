import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Style.css";
import HeroSection from "../HeroSection/Index";
const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
