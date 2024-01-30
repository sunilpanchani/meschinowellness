import React, { useState, useRef } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import TabOptions from '../Common/TabOptions';
import TextVideoContainer from '../Common/TextVideoContainer';
import ContentDisplay from '../Common/ContentDisplay';
import Title from '../Common/Title';
import About2 from '../assets/img/about2.png';
import About3 from '../assets/img/about3.png';

const Individual = () => {

    const [activeTab, setActiveTab] = useState("1");
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
        setActiveTab(id);

        switch (id) {
            case "1":
                healthRiskRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case "2":
                wellnessReportRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case "3":
                wellnessPlanRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case "4":
                rewardedRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    const HowItWorksData1 = {
        imageSrc: About2,
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
        imageSrc: About3,
        title: "MY WELLNESS PLAN",
        description1: `My Wellness Plan, stemming from your My Wellness Report, offers a personalized approach to goal-setting for your well-being.
        This tool enables you to select foods, activities, supplements, and strategies tailored to your health objectives.
        Whether you opt for a moderate or aggressive approach, the Wellness Plan puts you in control of defining and pursuing your wellness goals.
        With user-friendly prompts, you can easily review your status for specific health risks, conveniently color-coded as red, blue, or green.`,
        description2: `If your risk status is red or blue, one or more recommended goals will appear and a number of prompts will guide you through the process leading to a plan to reduce or eliminate the specified health risk.
        It's an easy and inspiring process that enables you to create your own, practical plan for wellness success, based on your personal taste preferences, time table, level of motivation and other factors.`,
        listItems: [],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/IruSnZz_ngQ",
    };

    const ContentDisplayData1 = {
        view: '1',
        imageUrl: About2,
        title: "MY WELLNESS REPORT",
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
        imageUrl: About3,
        title: "GET REWARDED",
        description1: `As a user, you will earn reward points for achieving goals, using tracking tools, completing learn & earn modules and interacting with the Meschino Wellness Platform in a variety of ways. In recognition of your efforts, you will be rewarded an Achievement Status(AS) Badge.
        These Recognitions Badges recognize the health achievements.`,
        description2: `There are 6 badges and each badge has 5 stars.
        As you accumulate points you will receive a badge.
        Each badge represents a higher level of accomplishment.
        The ultimate achievement is the “Health & Wellness Superstar” award given to anyone who has received all 6 AS Badges.`,
        listItems: [],
        handlePlayClick: handlePlayClick,
        videoSrc: "https://www.youtube.com/embed/kDdDvz7MoSQ",
    };

    return (
        <>
            <Title title="How It Works - Meschino Health and Wellness" />
            <Breadcrumb title="How It Works" item="Individual" />
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

export default Individual;