import Typed from "react-typed";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { img6 } from "../../assets/Images";
import "./Style.css";
import About from "../About/Index";
import Services from "../Services/Index";
import Portfolio from "../Portfolio/Index";
import Contact from "../Contact/Index";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>M Muzammil Khan</h1>
          <h3>
            And I'm a{" "}
            <span>
              <Typed
                strings={["Front End Developer", "Full Stack Web Developer"]}
                typeSpeed={100}
                backSpeed={100}
                backDelay={1000}
                loop={true}
              />
            </span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ea, tempora cupiditate asperiores omnis eos nobis nemo quae ipsum,
            voluptas nisi.
          </p>
          <div className="social-media">
            <NavLink
              target="_blank"
              to="https://www.linkedin.com/in/muzammil-khan-7ba36b194/"
            >
              <LinkedInIcon />
            </NavLink>

            <NavLink target="_blank" to="https://twitter.com/Muzammilmmk77">
              <TwitterIcon />
            </NavLink>

            <NavLink
              target="_blank"
              to="https://www.facebook.com/profile.php?id=100009884709340"
            >
              <FacebookIcon />
            </NavLink>

            {/* <NavLink>
              <InstagramIcon />
            </NavLink> */}
          </div>
          <NavLink className="btn" href={img6} download>
            Download CV
          </NavLink>
        </div>

        <div className="home-img">
          <img src={img6} alt="" />
        </div>
      </section>
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default HeroSection;
