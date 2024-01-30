import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const Header = () => {

  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const renderNavigation = () => {
    if (windowWidth < 992) {
      return (
        <div className='slicknav_menu'>
          <a
            href="#"
            role="button"
            tabIndex="0"
            className="slicknav_btn"
            aria-haspopup="true"
            onClick={toggleSidebar}
            style={{ outline: 'none' }}
          >
            <span className="slicknav_menutxt"></span>
            <span className="slicknav_icon slicknav_no-text">
              <span className="slicknav_icon-bar"></span>
              <span className="slicknav_icon-bar"></span>
              <span className="slicknav_icon-bar"></span>
            </span>
          </a>
          {isSidebarOpen && (
            <ul className="slicknav_nav" aria-hidden={!isSidebarOpen} style={{ display: isSidebarOpen ? 'block' : 'none' }}>
              <MenuItem title="Home" link="/" />
              <MenuItem
                title='About'
                link=''
                submenuItems={[
                  { title: 'About Us', link: '/about-us' },
                  { title: 'About Dr. Meschino', link: '/about-dr-meschino' },
                ]}
              />
              <MenuItem
                title='How It Works'
                submenuItems={[
                  { title: 'Individuals', link: '/how-it-works-for-individuals' },
                  { title: 'Organizations', link: '/how-it-works-for-organizations' },
                ]}
              />
              <MenuItem
                title='Wellness Program'
                link=''
                submenuItems={[
                  { title: 'Individual Health', link: '/wellness-program-individual-wellness' },
                  { title: 'Mental Health', link: '/wellness-program-mental-wellness' },
                  { title: 'Corp Health', link: '/wellness-program-corporate-wellness' },
                  { title: 'Wellness Eco-System', link: '/wellness-program-wellness-eco-system' },
                  { title: 'Meschino Health Literacy', link: '/wellness-program-meschino-health-literacy' },
                ]}
              />
              <MenuItem title="Contact" link="/contact-us" />
            </ul>
          )}
        </div>
      );
    }
    else {
      return (
        <>
          <ul className="main_menu">
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
            </li>
            <li>
              <Link to="">About</Link>
              <ul>
                <li>
                  <Link to="/about-us" className={location.pathname === "/about-us" ? "active" : ""}>About Us</Link>
                </li>
                <li>
                  <Link to="/about-dr-meschino" className={location.pathname === "/about-dr-meschino" ? "active" : ""}>About Dr. Meschino</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">How It Works</Link>
              <ul>
                <li>
                  <Link to="/how-it-works-for-individuals" className={location.pathname === "/how-it-works-for-individuals" ? "active" : ""}>Individuals</Link>
                </li>
                <li>
                  <Link to="/how-it-works-for-organizations" className={location.pathname === "/how-it-works-for-organizations" ? "active" : ""}>Organizations</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">Wellness Program</Link>
              <ul>
                <li>
                  <Link to="/wellness-program-individual-wellness" className={location.pathname === "/wellness-program-individual-wellness" ? "active" : ""}>Individual Health</Link>
                </li>
                <li>
                  <Link to="/wellness-program-mental-wellness" className={location.pathname === "/wellness-program-mental-wellness" ? "active" : ""}>Mental Health</Link>
                </li>
                <li>
                  <Link to="/wellness-program-corporate-wellness" className={location.pathname === "/wellness-program-corporate-wellness" ? "active" : ""}>Corp Health</Link>
                </li>
                <li>
                  <Link to="/wellness-program-wellness-eco-system" className={location.pathname === "/wellness-program-wellness-eco-system" ? "active" : ""}>Wellness Eco-System</Link>
                </li>
                <li>
                  <Link to="/wellness-program-meschino-health-literacy" className={location.pathname === "/wellness-program-meschino-health-literacy" ? "active" : ""}>Meschino Health Literacy</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact-us" className={location.pathname === "/contact-us" ? "active" : ""}>Contact Us</Link>
            </li>
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <div className="header_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-6">
              <Link to="index.html" className="site_logo">
                <img src="assets/img/logo.png" alt="" />
              </Link>
            </div>
            <div className="col-lg-10 text-center col-6">
              <nav className="menu_bar">
                {renderNavigation()}
              </nav>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
