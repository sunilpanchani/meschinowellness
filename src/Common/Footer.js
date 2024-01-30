import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 col-12">
                <div className="footer_content_box">
                  <div className="footer_logo">
                    <img src="assets/img/logo2.png" alt="" />
                  </div>
                  <p>
                    Mauna Loa the biggest volcano on Earth and one of the most
                    active covers half the Island of Hawaii.
                  </p>
                  <ul className="footer_contact_inf">
                    <li>
                      <a href="tel:0621099222">
                        <i className="zmdi zmdi-phone"></i>1-888-770-1075
                      </a>
                    </li>
                    <li>
                      <a href="mailto:huel.simone@hotmail.com">
                        <i className="zmdi zmdi-email"></i>{" "}
                        info@meschinowellness.com
                      </a>
                    </li>
                    <li>
                      <i className="zmdi zmdi-pin"></i>
                      <span>
                        Meschino Health and Wellness,
                        5500 Explorer Drive, 4th Floor,
                        Toronto, L4W 5C7, Canada
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-12">
                <div className="footer_widget">
                  <h4>Services link</h4>
                  <ul className="widget_menu">
                    <li>
                      <Link to="/wellness-program-individual-wellness">
                        <i className="zmdi zmdi-long-arrow-right"></i> Individual Wellness
                      </Link>
                    </li>
                    <li>
                      <Link to="/wellness-program-mental-wellness">
                        <i className="zmdi zmdi-long-arrow-right"></i> Mental Health
                      </Link>
                    </li>
                    <li>
                      <Link to="/wellness-program-corporate-wellness">
                        <i className="zmdi zmdi-long-arrow-right"></i> Corp Health
                      </Link>
                    </li>
                    <li>
                      <Link to="/wellness-program-wellness-eco-system">
                        <i className="zmdi zmdi-long-arrow-right"></i>Wellness Eco-System
                      </Link>
                    </li>
                    <li>
                      <Link to="/wellness-program-meschino-health-literacy">
                        <i className="zmdi zmdi-long-arrow-right"></i>Meschino Health Literacy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-12">
                <div className="footer_widget">
                  <h4>Useful link</h4>
                  <ul className="widget_menu">
                    <li>
                      <Link to="/about-us">
                        <i className="zmdi zmdi-long-arrow-right"></i> About us
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-dr-meschino">
                        <i className="zmdi zmdi-long-arrow-right"></i> Dr. James Meschino
                      </Link>
                    </li>
                    <li>
                      <Link to="/how-it-works-for-individuals">
                        <i className="zmdi zmdi-long-arrow-right"></i> How It Works (Individual)
                      </Link>
                    </li>
                    <li>
                      <Link to="/how-it-works-for-organizations">
                        <i className="zmdi zmdi-long-arrow-right"></i> How It Works (Organization)
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-us">
                        <i className="zmdi zmdi-long-arrow-right"></i> Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-12">
                <div className="footer_widget">
                  <h4>Stay connected</h4>
                  <ul className="widget_menu">
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-facebook"></i> Like us on
                        facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-twitter"></i> Follow us on
                        twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-pinterest"></i> Follow us on
                        Pintarest
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-linkedin"></i> Follow us on
                        linkedin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-instagram"></i> Follow us on
                        instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_area">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>
                  ©2018 Crazycafe.All Rights Reserved. Designed by{" "}
                  <a href="#">
                    <i className="zmdi zmdi-favorite-outline"></i> Crazycafe.net
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
