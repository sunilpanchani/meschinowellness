import React, { useState } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import TextVideoContainer from '../Common/TextVideoContainer';
import Title from '../Common/Title';
import About2 from '../assets/img/about2.png';

const CorporateWellness = () => {

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
        title: "CORPORATE WELLNESS",
        description1: `The Meschino Health Risk Assessment offers a robust online assessment, providing aggregate data to assess and address health risks impacting your organization and workforce.
        Our Wellness Platform offers personalized programs, tracking tools, coaching support, and resources to improve individual health and quality of life.
        At the corporate level, it captures aggregate data on the entire employee population.
        This aggregate data provides corporations/plan sponsors with a real-time snap shot of the health risks and health behaviours of their overall employee/plan member base.
        This data can be used towards implementing health initiatives that are relevant to the employee/plan member population, such as:`,
        description2: ``,
        listItems: ["Smoking Cessation Programs", "Mental Health Prevention", "Stress Management", "Diabetes Management", "High Cholesterol", "High Blood Pressure", "Weight Loss"],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/YgKqgwkbtZ8",
    };

    return (
        <>
            <Title title="Corporate Wellness - Meschino Health and Wellness" />
            <Breadcrumb title="Wellness Program" item="Corp Health" />
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

export default CorporateWellness;