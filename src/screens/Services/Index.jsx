import CodeIcon from "@mui/icons-material/Code";
import "./Style.css";
import { NavLink } from "react-router-dom";
const Services = () => {
  // useEffect(() => {
  //   window.addEventListener("scroll", HandleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", HandleScroll);
  //   };
  // }, []);
  return (
    <>
      <section className="service" id="service">
        <h2 className="heading">
          Our <span>Services</span>
        </h2>

        {/* {servicesData.map((service) => {
          console.log("service", service);
          const { id } = service;
          return <ServiceCard key={id} {...service} />;
        })} */}
        <div className="service-container">
          <div className="service-box">
            <CodeIcon className="icon" />
            <h3>Web Development</h3>
            <p>
              I have a strong proficiency in implementing industry-standard
              coding conventions, auto layouts, and optimized database designs.
              My expertise lies in creating responsive applications with
              user-friendly interfaces and scalable solutions to meet the needs
              of a large user base.
            </p>
            <NavLink to="/" className="btn">
              Read More
            </NavLink>
            {/* <a href="#" className="btn">
            </a> */}
          </div>

          <div className="service-box">
            <CodeIcon className="icon" />
            <h3>CMS Development</h3>
            <p>
              I specialize in CMS development services using Wix Editor X and
              Velo. With my expertise, I can create highly customizable and
              dynamic websites that cater to your specific content management
              needs.By leveraging the powerful features of Wix Editor X and
              Velo, I ensure seamless integration of databases.
            </p>
            <NavLink to="/" className="btn">
              Read More
            </NavLink>

            {/* <a href="#" className="btn">
              Read More
            </a> */}
          </div>

          <div className="service-box">
            <CodeIcon className="icon" />
            <h3>Web Designing</h3>
            <p>
              top-notch web design services that captivate and engage your
              audience. With a keen eye for aesthetics and a deep understanding
              of user experience, I create stunning and user-friendly
              websites that leave a lasting impression. Whether you're looking
              for a sleek and modern design.
            </p>
            <NavLink to="/" className="btn">
              Read More
            </NavLink>

            {/* <a href="#" className="btn">
              Read More
            </a> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
