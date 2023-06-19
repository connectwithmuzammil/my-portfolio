import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { portfolio } from "../../assets/Images";
import "./Style.css";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={portfolio} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              dicta magnam
            </p>
            <NavLink to="/project">
              <OpenInNewIcon className="portfolio-Icon" />
            </NavLink>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              dicta magnam explicabo excepturi vitae adipisci commodi veritatis
              et eligendi
            </p>
            <NavLink to="/project">
              <OpenInNewIcon className="portfolio-Icon" />
            </NavLink>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              dicta magnam explicabo excepturi vitae adipisci commodi veritatis
              et eligendi
            </p>
            <NavLink to="/project">
              <OpenInNewIcon className="portfolio-Icon" />
            </NavLink>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              dicta magnam explicabo excepturi vitae adipisci commodi veritatis
              et eligendi
            </p>
            <NavLink to="/project">
              <OpenInNewIcon className="portfolio-Icon" />
            </NavLink>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              dicta magnam explicabo excepturi vitae adipisci commodi veritatis
              et eligendi
            </p>
            <NavLink to="/project">
              <OpenInNewIcon className="portfolio-Icon" />
            </NavLink>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              dicta magnam explicabo excepturi vitae adipisci commodi veritatis
              et eligendi
            </p>
            <NavLink to="/project">
              <OpenInNewIcon className="portfolio-Icon" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
