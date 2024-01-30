import React from "react";
import Welcome1 from "../assets/img/welcome1.png";

const Welcome = () => {
  return (
    <>
      <div className="welcome_areaa">
        <div className="container">
          <div
            style={{
              display: "flex",
              position: "relative",
              height: "700px",
              minHeight: "400px",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-7">
                <div className="welcome_content">
                  <h1 className="text-uppercase">optimal personal wellness</h1>
                  <p>
                    Optimal Personal Wellness is the empowered pursuit of
                    holistic balance, fostering physical vitality, mental
                    resilience, and emotional flourishing for a life of purpose
                    and fulfillmen
                  </p>
                  <a href="#" className="custom_btn">
                    Know more <i className="zmdi zmdi-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w_man">
              <div style={{ height: "802px" }}>
                <img src={Welcome1} alt="" width="504" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
