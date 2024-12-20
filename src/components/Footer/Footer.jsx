import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { navLinks } from "../../data/Navmenu"; 

import './Footer.css'; 

const Footer = () => {
  const [active, setActive] = useState("hero");   
  const [toggle, setToggle] = useState(false);  
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      setScrolled(scrollTop > 100); 
    };

    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {  
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,  
        rootMargin: '0px 0px -50% 0px' 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section)); 
  }, []);

  return (
    <footer className={`footer ${scrolled ? 'scrolled' : ''}`}>
      <div className="footer-container">
        {/* Logo Link */}
        <Link
          to="/"
          className="logo"
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          <p className="logo-text">JCS</p>
        </Link>

        {/* Main Nav Links */}
        <ul className="nav-links">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`nav-item ${active === nav.id ? "active" : ""}`}
              onClick={() => setActive(nav.id)}
            >
              {active === nav.id && <div className="active-indicator"></div>}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="menu-container">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="menu-icon"
            onClick={() => setToggle(!toggle)} 
          />

         
          <div className={`mobile-menu ${toggle ? 'open' : ''}`}>
            <ul className="mobile-nav-links">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`mobile-nav-item ${active === nav.id ? "active" : ""}`}
                  onClick={() => {
                    setToggle(!toggle);  
                    setActive(nav.id);   
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;