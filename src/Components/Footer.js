import React from "react";
import Link from "next/link";

const Footer = () => {

  const facebookProfileLink = 'https://www.facebook.com/Meschino.Health';
  const twitterProfileLink = 'https://twitter.com/DrJamesMeschino/status/1531621893496786951';
  const youtubeProfileLink = 'https://www.youtube.com/user/meschinohealth';
  const linkedinProfileLink = 'https://www.linkedin.com/in/james-meschino-a138686/';
  const instagramProfileLink = 'https://www.instagram.com/drjamesmeschino/';

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="footer_area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 col-12">
                <div className="footer_content_box">
                  <Link href="/" className="footer_logo">
                    <img src="/img/footer_logo.png" alt="" />
                  </Link>
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
                        Toronto, L4W 5C7, Canada.
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
                      <Link href="/wellness-program/individual-wellness">
                        <i className="zmdi zmdi-long-arrow-right"></i> Individual Wellness
                      </Link>
                    </li>
                    <li>
                      <Link href="/wellness-program/mental-wellness">
                        <i className="zmdi zmdi-long-arrow-right"></i> Mental Health
                      </Link>
                    </li>
                    <li>
                      <Link href="/wellness-program/corporate-wellness">
                        <i className="zmdi zmdi-long-arrow-right"></i> Corp Health
                      </Link>
                    </li>
                    <li>
                      <Link href="/wellness-program/wellness-eco-system">
                        <i className="zmdi zmdi-long-arrow-right"></i>Wellness Eco-System
                      </Link>
                    </li>
                    <li>
                      <Link href="/wellness-program/meschino-health-literacy">
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
                      <Link href="/about/us">
                        <i className="zmdi zmdi-long-arrow-right"></i> About us
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/dr-meschino">
                        <i className="zmdi zmdi-long-arrow-right"></i> Dr. James Meschino
                      </Link>
                    </li>
                    <li>
                      <Link href="/how-it-works/individuals">
                        <i className="zmdi zmdi-long-arrow-right"></i> How It Works (Individual)
                      </Link>
                    </li>
                    <li>
                      <Link href="/how-it-works/organizations">
                        <i className="zmdi zmdi-long-arrow-right"></i> How It Works (Organization)
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
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
                      <Link href={facebookProfileLink} target="_blank" rel="noopener noreferrer">
                        <i className="zmdi zmdi-facebook"></i> Like us on
                        facebook
                      </Link>
                    </li>
                    <li>
                      <Link href={twitterProfileLink} target="_blank" rel="noopener noreferrer">
                        <i className="zmdi zmdi-twitter"></i> Follow us on
                        twitter
                      </Link>
                    </li>
                    <li>
                      <Link href={youtubeProfileLink} target="_blank" rel="noopener noreferrer">
                        <i className="zmdi zmdi-youtube-play"></i> Follow us on
                        youtube
                      </Link>
                    </li>
                    <li>
                      <Link href={linkedinProfileLink} target="_blank" rel="noopener noreferrer">
                        <i className="zmdi zmdi-linkedin"></i> Follow us on
                        linkedin
                      </Link>
                    </li>
                    <li>
                      <Link href={instagramProfileLink} target="_blank" rel="noopener noreferrer">
                        <i className="zmdi zmdi-instagram"></i> Follow us on
                        instagram
                      </Link>
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
                  ©{currentYear} Meschino Wellness. All Rights Reserved.
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
