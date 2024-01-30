import React, { useState } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import TextVideoContainer from '../Common/TextVideoContainer';
import About2 from '../assets/img/about2.png';

const WellnessEcoSystem = () => {

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
        title: "WELLNESS ECO-SYSTEM",
        description1: `Meschino Wellness is adopting technology that swiftly updates health status based on blood test results.
        Apple Inc. and other companies are enabling access to personal health data through smart apps.
        With this technology, Meschino Wellness can promptly notify users of any health changes, offering goal recommendations for improvement, including diet and lifestyle adjustments.`,
        description2: `With the rapid growth and popularity of smart apps like Apple Healthkit, Google Fit and the explosion of wearables like Fitbit and Jawbone the Wellness Online Eco -System can be both exciting and intimidating.
        The Meschino Health & Wellness Platform integrates with the most popular wearables and health technologies, and is committed to assessing and embracing any resources in the Online Wellness Eco-System that can help our users achieve their health goals.`,
        listItems: [],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/VFttzqZCTFE",
    };

    return (
        <>
            <Breadcrumb title="Wellness Program" item="Wellness Eco-System" />
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

export default WellnessEcoSystem;