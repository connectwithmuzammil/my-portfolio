import { img5 } from "../../assets/Images";
import "./Style.css";
import { NavLink } from "react-router-dom";
function About() {
  // useEffect(() => {
  //   window.addEventListener("scroll", HandleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", HandleScroll);
  //   };
  // }, []);

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
          skilled full-stack engineer with strong expertise in front-end
          development, having worked with various types of websites including
          CMS. Over the past 1+ years, I have worked professionally as a
          JavaScript developer, specializing in Node.js and React.js. During
          this time, I have achieved great success working in fast-paced team
          environments. I have a proven track record of delivering high-quality
          software solutions, creating captivating user interfaces, and ensuring
          seamless user experiences. Passionate about staying up-to-date with
          the latest front-end trends and advancements, I continuously enhance
          my skills to deliver innovative solutions.
        </p>
        <NavLink to="/" className="btn">
          Read More
        </NavLink>
        {/* </a> */}
      </div>
    </section>
  );
}

export default About;
