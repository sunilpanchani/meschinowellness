"use client";
import React, { useState } from 'react';
import TextVideoContainer from './TextVideoContainer';
import VideoModal from './VideoModal';

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
        imageSrc: '/img/wp3.png',
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
            {[TextVideoContainerData].map((id, index) => (
                <TextVideoContainer key={index} {...id} />
            ))}
            <VideoModal
                showModal={showModal}
                currentVideoSrc={currentVideoSrc}
                handleOverlayClick={handleOverlayClick}
            />
        </>
    );
};

export default CorporateWellness;