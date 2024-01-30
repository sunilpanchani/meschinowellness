import React, { useState } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import TextVideoContainer from '../Common/TextVideoContainer';
import About2 from '../assets/img/about2.png';

const IndividualWellness = () => {

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
        title: "INDIVIDUAL WELLNESS",
        description1: `Imagine a Wellness Program designed specifically for you. A program that carefully analyzes both your personal and family health history, your diet, your lifestyle and much more. A program that helps you to set goals and achieve them. A program that strives to provide you with the very latest information on diet, nutrition and lifestyle – not just any information, but information that addresses health issues identified by your personal analysis.`,
        description2: `Meschino Health & Wellness is that program and is, in our view, the most powerful online Health & Nutrition Assessment on the planet. It’s a wellness program that provides the most complete, thorough, comprehensive personal health analysis currently available. Complete the Meschino Health Risk Assessment in only 15 minutes and your analysis is generated in just a few seconds.`,
        listItems: [],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/raMbxQN1Fn8",
    };

    return (
        <>
            <Breadcrumb title="Wellness Program" item="Individual Wellness" />
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

export default IndividualWellness;