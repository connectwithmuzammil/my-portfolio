import { useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Style.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const arrowIcon = document.querySelector(".footerIcon");
    arrowIcon.addEventListener("click", handleScrollToTop);

    return () => {
      arrowIcon.removeEventListener("click", handleScrollToTop);
    };
  }, []);
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyight &copy; 2023 by Muzammil | All Rights Reserved.</p>
      </div>

      <div className="footer-iconTop">
        <NavLink to="/">
          <ArrowUpwardIcon className="footerIcon" />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
