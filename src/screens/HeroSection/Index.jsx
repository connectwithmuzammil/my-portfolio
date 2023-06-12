import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { img4, img5, img6 } from "../../assets/Images";
import "./Style.css";
const HeroSection = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>M Muzammil Khan</h1>
          <h3>
            And I'm a <span>Full Stack Developer</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ea, tempora cupiditate asperiores omnis eos nobis nemo quae ipsum,
            voluptas nisi.
          </p>
          <div className="social-media">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="">
              <TwitterIcon />
            </a>
            <a href="">
              <InstagramIcon />
            </a>
            <a href="">
              <LinkedInIcon />
            </a>
          </div>
          <a href="#" download="muzammil" className="btn">
            Download CV
          </a>
        </div>

        <div className="home-img">
          <img src={img6} alt="" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
