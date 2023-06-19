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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          voluptate, esse officiis labore provident ipsam maiores a libero
          placeat, nobis similique aliquam harum reprehenderit quis quo
          consequuntur. Quia, blanditiis. Aliquam.
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
