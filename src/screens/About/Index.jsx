import React from "react";
import { img5 } from "../../assets/Images";
import "./Style.css";
function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={img5} alt="" />
      </div>

      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Front-End Developer</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          voluptate, esse officiis labore provident ipsam maiores a libero
          placeat, nobis similique aliquam harum reprehenderit quis quo
          consequuntur. Quia, blanditiis. Aliquam.
        </p>
        <a href="#" className="btn">
          {" "}
          Read More
        </a>
      </div>
    </section>
  );
}

export default About;
