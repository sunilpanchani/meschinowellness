import React from "react";

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
                    By using the Meschino Health Risk Assessment, individuals can gain valuable insights into nutrient deficiencies, drug interactions, and potential hazards in their working environment, empowering them to make informed choices for achieving optimal personal wellness.
                  </p>
                  <a href="#" className="custom_btn">
                    Know more <i className="zmdi zmdi-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w_man">
              <div style={{ height: "802px" }}>
                <img src='/img/welcome1.png' alt="" width="504" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
