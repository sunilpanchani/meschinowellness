import React, { useState } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import TextVideoContainer from '../Common/TextVideoContainer';
import About2 from '../assets/img/about2.png';

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
        imageSrc: About2,
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
            <Breadcrumb title="Wellness Program" item="Mental Health" />
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

export default MentalHealth;
