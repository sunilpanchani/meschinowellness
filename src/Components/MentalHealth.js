"use client";
import React, { useState } from 'react';
import TextVideoContainer from './TextVideoContainer';
import VideoModal from './VideoModal';

const MentalHealth = () => {

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
        view: 'Mental Health',
        imageSrc: '',
        title: "MENTAL HEALTH",
        description1: `The Mental Health Check-Up on the Meschino Digital Wellness Platform is based on the DSM-5.
        This is the standard assessment used by psychiatrists to identity existing or impending mental health disorders, including various types of depression, anxiety, obsessive compulsive disorder, schizophrenia etc.
        The DSM-5 is an abbreviation for Diagnostic and Statistical Manual of Mental Disorders (fifth and most recent edition – 2013).
        Disability from mental health problems account for approximately 35% of all disability claims, and account for 75% of the total cost of all disability claims management.`,
        description2: `Completing the DSM-5 questionnaire notifies individuals trending towards mental health issues to consult their doctor.
        Bringing the printed mental health feedback report aids physicians in starting appropriate treatment, often medication-based, to balance neurotransmitter function.
        This prevents major crises and disability episodes.
        The Meschino Wellness Program offers free peer-support consultations to assist individuals in managing interpersonal conflicts, workplace challenges, environmental triggers, and lifestyle factors contributing to mental health problems.
        Peer-support consultants, previously affected individuals, now trained, help navigate these issues for long-term mental health success.`,
        listItems: [],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/raMbxQN1Fn8",
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

export default MentalHealth;