import React, { useState } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import TextVideoContainer from '../Common/TextVideoContainer';
import Title from '../Common/Title';
import About2 from '../assets/img/about2.png';

const MeschinoHealthLiteracy = () => {

    const [showModal, setShowModal] = useState(false);
    const [currentVideoSrc, setCurrentVideoSrc] = useState("");

    const handlePlayClick = (e, videoSrc) => {
        e.preventDefault();
        setCurrentVideoSrc(videoSrc);
        setShowModal(true);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal")) {
            setShowModal(false);
        }
    };

    const TextVideoContainerData = {
        imageSrc: About2,
        title: "MESCHINO HEALTH LITERACY",
        description1: `Health Literacy is a term used to explain the degree of knowledge one has about how specific dietary and lifestyle practices impact disease risk and management. Many adults in our society have been shown to have poor health literacy. People with a higher degree of health literacy tend to exhibit healthier lifestyle practices and have fewer health problems as they age.`,
        description2: `The Meschino Wellness Platform provides a multi-faceted approach to improved health literacy. Users are provided with a steady stream of wellness content that is targeted to their specific health profile; in addition, they will receive Dr. Meschino’s weekly research update blogs and recipes, and will have the ability to access any other learn and earn modules, wellness articles and videos on a multitude of health topics.`,
        listItems: [],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/SwovGI9sijk",
    };

    return (
        <>
            <Title title="Meschino Health Literacy - Meschino Health and Wellness" />
            <Breadcrumb title="Wellness Program" item="Meschino Health Literacy" />
            {[TextVideoContainerData].map((id, index) => (
                <TextVideoContainer key={index} {...id} />
            ))}
            {showModal && (
                <div className="modal fade show d-flex align-items-center" tabIndex="-1"
                    onClick={handleOverlayClick}
                    style={{
                        display: "block",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}>

                    <div className="modal-dialog modal-dialog-centered"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            margin: "auto",
                            minWidth: window.innerWidth > 800 ? "60%" : "100%",
                        }}>

                        <div className="modal-content"
                            style={{
                                border: "none",
                                background: "transparent",
                                minHeight: "50vh",
                            }}>

                            <div className="modal-body">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe
                                        className="embed-responsive-item"
                                        src={currentVideoSrc}
                                        allowFullScreen
                                        title="YouTube Video"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MeschinoHealthLiteracy;