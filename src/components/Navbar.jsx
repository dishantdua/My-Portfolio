import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { useContext, useRef, useState } from 'react';
import { ScrollContext } from '../context/ScrollContext';
import resumePDF from "../assets/Resume.pdf";

export default function Navbar() {
  const { isSticky } = useContext(ScrollContext);
  const navRef = useRef();
  const burger = useRef();
  const content = useRef();
  const [nav, setNav] = useState(false);

  const hamburger = () => {
    setNav((prev) => {
      navRef.current.classList.toggle("nav-active");
      burger.current.classList.toggle("click");
      content.current.classList.toggle("nav-active");
      return !prev;
    });
  };

  const hideBar = () => {
    setNav((prev) => {
      navRef.current.classList.remove("nav-active");
      burger.current.classList.remove("click");
      content.current.classList.remove("nav-active");
      return false;
    });
  };

  return (
    <>
      <div className="Navbar">
        <section className={isSticky ? 'header sticky' : 'header'}>
          <div className="navbar" data-aos="zoom-in">
            <div className="logo">
              <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                <img src={Logo} alt="Dishant Dua" />
              </Link>
            </div>

            <div className="nav">
              <ul className="navigation" ref={navRef}>
                <li>
                  <Link onClick={hideBar} className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={100}>
                    About
                  </Link>
                </li>
                <li>
                  <Link onClick={hideBar} className="nav-link" activeClass="active" to="work" spy={true} smooth={true} offset={-200} duration={100}>
                    Work
                  </Link>
                </li>
                <li>
                  <Link onClick={hideBar} className="nav-link" activeClass="active" to="projects" spy={true} smooth={true} offset={-250} duration={100}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link onClick={hideBar} className="nav-link" activeClass="active" to="skill" spy={true} smooth={true} offset={-300} duration={100}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link onClick={hideBar} className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} offset={-350} duration={100}>
                    Contact
                  </Link>
                </li>
                <li className="resume">
                  <a href={resumePDF} download="DishantDua_Resume.pdf" onClick={hideBar} className="resume-link">
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            <div className="hamburger" onClick={hamburger} ref={burger}>
              <div className="inner-hams">
                <ul className="line"></ul>
              </div>
            </div>
          </div>
        </section>

        <div className="content" ref={content} onClick={hideBar}></div>
      </div>
    </>
  );
}
