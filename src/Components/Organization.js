"use client";
import React, { useState, useRef } from 'react';
import TabOptions from './TabOptions';
import TextVideoContainer from './TextVideoContainer';
import ContentDisplay from './ContentDisplay';
import VideoModal from './VideoModal';

const Organization = () => {

    const [showModal, setShowModal] = useState(false);
    const [currentVideoSrc, setCurrentVideoSrc] = useState("");

    const healthRiskRef = useRef(null);
    const wellnessReportRef = useRef(null);
    const wellnessPlanRef = useRef(null);
    const rewardedRef = useRef(null);

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

    const handleImageClick = (id) => {
        const sectionRef = refs[id];
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const refs = {
        '1': healthRiskRef,
        '2': wellnessReportRef,
        '3': wellnessPlanRef,
        '4': rewardedRef,
    };

    const HowItWorksData1 = {
        imageSrc: '/img/info5.png',
        title: "Health Risk Assessment",
        description1: `The Health Risk Assessment (HRA) is an online tool initially created by Dr. James Meschino and his team in late 2005.
        With over 25 years of clinical experience, the HRA underwent significant updates, culminating in a complete transformation in 2014 to become the engine for the Meschino Wellness Platform.
        Originally designed for doctors, it is the most comprehensive Nutrition/Lifestyle Health Risk Assessment available.
        Unique features include the identification of nutrient deficiencies, drug-nutrient interactions, and nutrient depletion from medications, alcohol, and drugs, setting it apart from other HRAs.`,
        description2: `With over 200 questions, the Meschino HRA requires just 15 minutes, potentially the most impactful quarter-hour of your life.
        The resulting feedback report acts as a personalized roadmap to a fitter, healthier, leaner, more energetic you, empowering you to better manage existing health issues and enhance your prospects for a long, healthy life.
        This information fills a crucial gap in today's healthcare, as nutrition and lifestyle significantly influence your year-to-year health.
        Therefore, everyone should undergo the Meschino HRA and heed the tailored wellness plan it produces.
        To make it easy to understand and digest the report is presented in two sections:`,
        listItems: [],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/DLd_a15Lx88",
    };

    const HowItWorksData2 = {
        imageSrc: '/img/info7.png',
        title: "My Wellness Plan",
        description1: `My Wellness Plan streamlines goal-setting based on your My Wellness Report. Tailor goals to your abilities and preferences, selecting foods, activities, and strategies for health. Choose a moderate or aggressive approach. It's your opportunity to define precise goals and strategies. The plan includes prompts for easy planning and a color-coded system (red, blue, or green) for assessing health risks.`,
        description2: `If your risk status is red or blue, one or more recommended goals will appear and a number of prompts will guide you through the process leading to a plan to reduce or eliminate the specified health risk. It’s an easy and inspiring process that enables you to create your own, practical plan for wellness success, based on your personal taste preferences, time table, level of motivation, and other factors.`,
        listItems: [],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/IruSnZz_ngQ",
    };

    const ContentDisplayData1 = {
        view: '1',
        imageUrl: '/img/info6.png',
        title: "My Wellness Report",
        description1: `The Wellness Report is a personalized feedback summary from the Meschino Health Risk Assessment questionnaire.
        It offers tailored advice on diet, exercise, supplementation, and proactive strategies based on your health profile.
        The report pinpoints health risks, gives nutrition and lifestyle recommendations for existing issues, guides resistance against family-related conditions, addresses nutrient deficiencies, and more.`,
        description2: `The personalized nutrition and lifestyle strategies contained in Your My Wellness Report will provide you with a road map to the healthier, fitter, leaner, more energetic “You” and greatly enhance your chance for a long, healthy life.`,
        listItems: ["My Health Considerations", "My Health Issues"],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/yzJuRsKX2CE",
    };

    const ContentDisplayData2 = {
        view: '1',
        imageUrl: '/img/info8.png',
        title: "Get Rewarded",
        description1: `As a user, earn reward points* by achieving goals, using tracking tools, completing learn & earn modules, and engaging with the Meschino Wellness Platform. Earn an Achievement Status (AS) Badge as recognition. There are 6 badges, each with 5 stars, representing increasing accomplishment levels. Progress through badge levels to join exclusive user groups within your organization. The ultimate achievement is the 'Health & Wellness Superstar' award for receiving all 6 AS Badges.`,
        description2: ` Meschino Health & Wellness also has a custom reward program for those organizations that provide a budget that allows its members to cash in points for health-related merchandise.`,
        listItems: [],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/kDdDvz7MoSQ",
    };

    return (
        <>
            <TabOptions handleImageClick={handleImageClick} />
            <div ref={healthRiskRef}>
                {[HowItWorksData1].map((item, index) => (
                    <TextVideoContainer key={index} {...item} />
                ))}
            </div>
            <div ref={wellnessReportRef}>
                {[ContentDisplayData1].map((item, index) => (
                    <ContentDisplay key={index} {...item} />
                ))}
            </div>
            <div ref={wellnessPlanRef}>
                {[HowItWorksData2].map((item, index) => (
                    <TextVideoContainer key={index} {...item} />
                ))}
            </div>
            <div ref={rewardedRef}>
                {[ContentDisplayData2].map((item, index) => (
                    <ContentDisplay key={index} {...item} />
                ))}
            </div>
            <VideoModal
                showModal={showModal}
                currentVideoSrc={currentVideoSrc}
                handleOverlayClick={handleOverlayClick}
            />
        </>
    );
};

export default Organization;