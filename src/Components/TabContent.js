import React from "react";

const TabContent = ({ tab, isActive, handleTabClick }) => {
  return (
    <>
      <div
        className={`about_area pb_none ${isActive ? "active-tab" : ""}`}
        key={tab.id}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-6">
              <div className="about_righ_content home_2">
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={tab.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                      }}
                      onClick={tab.buttonClick}
                    />
                    <a
                      href="#"
                      style={{
                        position: "absolute",
                        zIndex: 1,
                      }}
                    >
                      <i
                        className="zmdi zmdi-play-circle"
                        style={{
                          fontSize: "4rem",
                          color: "rgba(255,255,255,0.8)",
                        }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_content">
                <h1>
                  <span className="regular">{tab.title}</span>
                </h1>
                <p>{tab.paragraph}</p>
                <ul>
                  <li>
                    <i className="zmdi zmdi-play-circle"></i> Individual
                  </li>
                  <li>
                    <i className="zmdi zmdi-play-circle"></i> Organization
                  </li>
                </ul>
                <button
                  className="custom_btn home_2"
                  onClick={() => handleTabClick(tab.id)}
                >
                  Know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabContent;
