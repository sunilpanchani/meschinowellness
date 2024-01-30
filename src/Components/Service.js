import React from "react";
import { Link } from "react-router-dom";

const Service = () => {

  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <>
      <div className="cbox_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 text-center">
              <div className="section_title">
                <h1>Meschino Wellness Program</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <Link to='/wellness-program-individual-wellness' style={linkStyles}>
                <div className="single_cbox">
                  <div className="cbox_title">
                    <div className="cbox_icon">
                      <img
                        src="https://meschinowellness.net/wp-content/uploads/2015/05/employeehealth.png"
                        alt=""
                      />
                    </div>
                    <h4 className="font-weight-bold">Individual Health</h4>
                  </div>
                  <p>
                    Individual health refers to the overall well-being of a
                    person, encompassing physical, mental, and social aspects of
                    their health.
                  </p>
                  <div className="call_btn">
                    <span>Call us:</span>
                    <a href="tel:062109-9222">1-888-770-1075</a>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-3">
              <Link to='/wellness-program-mental-wellness' style={linkStyles}>
                <div className="single_cbox">
                  <div className="cbox_title">
                    <div className="cbox_icon">
                      <img
                        src="https://meschinowellness.net/wp-content/uploads/2015/05/mentalhealth.png"
                        alt=""
                      />
                    </div>
                    <h4 className="font-weight-bold">Mental Health</h4>
                  </div>
                  <p>
                    Mental health is the overall well-being of one's mind,
                    encompassing emotional resilience, cognitive function, and
                    social interactions.
                  </p>
                  <a href="#">
                    Appointment <i className="zmdi zmdi-plus"></i>
                  </a>
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-3">
              <Link to='/wellness-program-corporate-wellness' style={linkStyles}>
                <div className="single_cbox">
                  <div className="cbox_title">
                    <div className="cbox_icon">
                      <img
                        src="https://meschinowellness.net/wp-content/uploads/2015/05/corphealth.png"
                        alt=""
                      />
                    </div>
                    <h4 className="font-weight-bold">Corp Health</h4>
                  </div>
                  <p>
                    Corp Health focuses on promoting and enhancing the health and
                    well-being of employees within a company.
                  </p>
                  <a href="#">
                    Know more <i className="zmdi zmdi-plus"></i>
                  </a>
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-3">
              <Link to='/wellness-program-wellness-eco-system' style={linkStyles}>
                <div className="single_cbox">
                  <div className="cbox_title">
                    <div className="cbox_icon">
                      <img
                        src="https://meschinowellness.net/wp-content/uploads/2015/05/eco-system.png"
                        alt=""
                      />
                    </div>
                    <h4 className="font-weight-bold">Wellness Eco-System</h4>
                  </div>
                  <p>
                    A wellness ecosystem is a network of interconnected elements
                    fostering overall health and well-being.
                  </p>
                  <a href="#">
                    Know more <i className="zmdi zmdi-plus"></i>
                  </a>
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-3">
              <Link to='/wellness-program-meschino-health-literacy' style={linkStyles}>
                <div className="single_cbox">
                  <div className="cbox_title">
                    <div className="cbox_icon">
                      <img
                        src="https://meschinowellness.net/wp-content/uploads/2015/05/healthliteracy.png"
                        alt=""
                      />
                    </div>
                    <h4 className="font-weight-bold">Meschino Health Literacy</h4>
                  </div>
                  <p>
                    Health literacy is the capacity to comprehend and use health
                    information effectively for informed decision-making about
                    one's health.
                  </p>
                  <a href="#">
                    Know more <i className="zmdi zmdi-plus"></i>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
