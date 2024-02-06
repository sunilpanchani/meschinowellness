"use client";
import React, { useState } from 'react';
import TextVideoContainer from './TextVideoContainer';
import VideoModal from './VideoModal';

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
        imageSrc: '/img/wp4.png',
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

export default WellnessEcoSystem;