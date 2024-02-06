"use client";
import React, { useState } from 'react';
import TextVideoContainer from './TextVideoContainer';
import VideoModal from './VideoModal';

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
        imageSrc: '/img/wp5.png',
        title: "MESCHINO HEALTH LITERACY",
        description1: `Health Literacy is a term used to explain the degree of knowledge one has about how specific dietary and lifestyle practices impact disease risk and management. Many adults in our society have been shown to have poor health literacy. People with a higher degree of health literacy tend to exhibit healthier lifestyle practices and have fewer health problems as they age.`,
        description2: `The Meschino Wellness Platform provides a multi-faceted approach to improved health literacy. Users are provided with a steady stream of wellness content that is targeted to their specific health profile; in addition, they will receive Dr. Meschino’s weekly research update blogs and recipes, and will have the ability to access any other learn and earn modules, wellness articles and videos on a multitude of health topics.`,
        listItems: [],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/SwovGI9sijk",
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

export default MeschinoHealthLiteracy;