// import { useEffect, useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import "./Style.css";
// const Header = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector("header");
//       header.classList.toggle("sticky", window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // const handleMenuIconClick = () => {
//   //   console.log("CLICK handleMenuIconClick");
//   //   const menuIcon = document.querySelector("#menu-icon");
//   //   const navbar = document.querySelector(".navbar");
//   //   menuIcon.classList.toggle("bx-x");
//   //   navbar.classList.toggle("active");
//   //   // menuIcon.innerHTML = menuIcon.classList.contains("active") ? (
//   //   //   <CloseIcon />
//   //   // ) : (
//   //   //   <MenuIcon />
//   //   // );
//   // };

//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
//   // const [isMobileView, setIsMobileView] = useState(false);

//   const handleMenuIconClick = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };

//   // useEffect(() => {
//   //   const checkWindowSize = () => {
//   //     setIsMobileView(window.innerWidth <= 768);
//   //   };

//   //   checkWindowSize();
//   //   window.addEventListener("resize", checkWindowSize);

//   //   // Clean up the event listener on component unmount
//   //   return () => {
//   //     window.removeEventListener("resize", checkWindowSize);
//   //   };
//   // }, []);

//   return (
//     <>
//       <header className="header">
//         <a href="#" className="logo">
//           Muzammil
//         </a>

//         {isNavbarOpen ? (
//           <CloseIcon id="menu-icon" onClick={handleMenuIconClick}></CloseIcon>
//         ) : (
//           <MenuIcon id="menu-icon" onClick={handleMenuIconClick}></MenuIcon>
//         )}
//         {/* <MenuIcon id="menu-icon" onClick={handleMenuIconClick}></MenuIcon> */}
//         {/* <i className="bx bx-x" style={{ fontSize: "40px" }}></i> */}

//         {isNavbarOpen && (
//           <nav className="navbar">
//             <a href="#home" className="active">
//               Home
//             </a>
//             <a href="#about">About</a>
//             <a href="#services" onClick={handleMenuIconClick}>
//               Services
//             </a>
//             <a href="#portfolio" onClick={handleMenuIconClick}>
//               Portfolio
//             </a>
//             <a href="#contact">Contact</a>
//           </nav>
//         )}
//       </header>
//     </>
//   );
// };

// export default Header;
