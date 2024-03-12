"use client";
import React, { useEffect, useState } from "react";

const Welcome = () => {

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="welcome_areaa">
        <div className="container">
          {/* <div
            style={{
              display: "flex",
              position: "relative",
              height: windowWidth < 768 ? '400px' : '700px',
              minHeight: "400px",
            }}
          > */}
          <div className="single_welcome_slider">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-7">
                <div className="welcome_content">
                  <h1 className="text-uppercase">optimal personal wellness</h1>
                  <p>
                    By using the Meschino Health Risk Assessment, individuals can gain valuable insights into nutrient deficiencies, drug interactions, and potential hazards in their working environment, empowering them to make informed choices for achieving optimal personal wellness.
                  </p>
                  <a href="#" className="custom_btn">
                    Know more <i className="zmdi zmdi-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w_man">
              <div style={{ height: "857px", display: 'block', width: '100%' }}>
                <img src='/img/welcome1.png' alt="" width="504" />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
