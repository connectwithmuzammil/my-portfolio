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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              nulla quo neque iste molestiae incidunt culpa, voluptatibus saepe
              odio tempore beatae voluptates obcaecati
            </p>
            <NavLink to="/" className="btn">
              Read More
            </NavLink>
            {/* <a href="#" className="btn">
            </a> */}
          </div>

          <div className="service-box">
            <CodeIcon className="icon" />
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              nulla quo neque iste molestiae incidunt culpa, voluptatibus saepe
              odio tempore beatae voluptates obcaecati
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
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              nulla quo neque iste molestiae incidunt culpa, voluptatibus saepe
              odio tempore beatae voluptates obcaecati
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
