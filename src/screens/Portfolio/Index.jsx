import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  portfolio,
  ecommerce2,
  ecommerce4,
  todo1,
  todo2,
} from "../../assets/Images";
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
          <img src={ecommerce2} alt="" />
          <div className="portfolio-layer">
            <h4>Ecommerce Website</h4>
            <p>
              Developed and showcased in my portfolio: a React Redux-powered
              e-commerce website, delivering seamless online shopping
            </p>
            <NavLink
              target="_blank"
              to="https://react-ecommerce-031456.netlify.app/"
            >
              <OpenInNewIcon className="portfolio-Icon" />
            </NavLink>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={todo2} alt="" />
          <div className="portfolio-layer">
            <h4>My Text</h4>
            <p>
              showcases an app I developed for removing extra spaces, clearing
              text, and converting case with ease.
            </p>
            <NavLink
              target="_blank"
              to="https://muzammilmmk.github.io/mytextUtil/"
            >
              <OpenInNewIcon className="portfolio-Icon" />
            </NavLink>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={todo1} alt="" />
          <div className="portfolio-layer">
            <h4>Todo App</h4>
            <p>
              My portfolio features a sleek todo app I created, allowing
              seamless addition and deletion of tasks
            </p>
            <NavLink
              target="_blank"
              to="https://muzammilmmk.github.io/Todo-app/"
            >
              <OpenInNewIcon className="portfolio-Icon" />
            </NavLink>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={ecommerce4} alt="" />
          <div className="portfolio-layer">
            <h4>Display User</h4>
            <p>
              Explore a user listing website created with React and styled with
              component-based styling for a modern
            </p>
            <NavLink
              target="_blank"
              to="https://abc-website-f32af0.netlify.app/about"
            >
              <OpenInNewIcon className="portfolio-Icon" />
            </NavLink>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio} alt="" />
          <div className="portfolio-layer">
            <h4>Event Planner</h4>
            <p>Develop a Event Planner website using a wix</p>
            <NavLink
              target="_blank"
              to="https://muzammilmmk77.wixsite.com/event-planner"
            >
              <OpenInNewIcon className="portfolio-Icon" />
            </NavLink>
          </div>
        </div>

        {/* <div className="portfolio-box">
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
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
