import React, { useState } from "react";
import Doctor1 from "../assets/img/v5_about2.png";
import Doctor2 from "../assets/img/v5_about.png";
import Doctor3 from "../assets/img/v5_about3.png";

const Info = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePlayClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setShowModal(false);
    }
  };

  const modals = [
    {
      id: 1,
      videoSrc: "https://www.youtube.com/embed/4gHsS489nHw",
    },
  ];

  const DoctorImage1 = {
    backgroundImage: `url(${Doctor1})`,
  };

  const DoctorImage2 = {
    backgroundImage: `url(${Doctor2})`,
  };

  const DoctorImage3 = {
    backgroundImage: `url(${Doctor3})`,
  };

  return (
    <>
      <div className="v5_about_area mt-5 p-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-6">
              <div className="v5 about_img_wrap">
                <div className="single_about_img" style={DoctorImage1}></div>
                <a className="single_about_img active" style={DoctorImage2}></a>
                <div className="single_about_img" style={DoctorImage3}></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="v5_section_title">
                <h3>About DR. Meschino</h3>
                <p>
                  Especially significant in a state imperiled by rising sea
                  levels and overi by Dr. James Meschino is an accomplished
                  educator, author, and researcher specializing in human
                  nutrition and biology. With a Master's Degree in Science, he
                  is recognized as an expert in nutrition, anti-aging, fitness,
                  and wellness. As the founder of the RenaiSanté Institute of
                  Integrative Medicine, he has lectured to healthcare
                  professionals across North America and is an associate
                  professor at the Canadian Memorial Chiropractic College.
                </p>
                <p>
                  Dr. Meschino's expertise lies in understanding the aging
                  process and its connection to diseases, particularly cancer.
                  He advocates evidence-based strategies involving diet,
                  exercise, and supplementation to maintain optimal body and
                  brain function.
                </p>
                <a
                  href="#"
                  onClick={handlePlayClick}
                  className="video_popup about_btn v3"
                >
                  <i className="zmdi zmdi-play"></i> Learn More About DR.
                  Meschino
                </a>
              </div>
            </div>
            {modals.map((modal) => (
              <div key={modal.id}>
                {showModal && (
                  <div
                    className="modal fade show d-flex align-items-center"
                    style={{
                      display: "block",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    tabIndex="-1"
                    onClick={handleOverlayClick}
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      style={{
                        margin: "auto",
                        minWidth: window.innerWidth > 800 ? "70%" : "100%",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className="modal-content"
                        style={{
                          border: "none",
                          background: "transparent",
                          minHeight: "50vh",
                        }}
                      >
                        <div className="modal-body">
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              className="embed-responsive-item"
                              src={modal.videoSrc}
                              allowFullScreen
                              title="YouTube Video"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
