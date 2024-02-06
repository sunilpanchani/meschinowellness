"use client";
import React, { useState } from "react";
import ContentDisplay from './ContentDisplay';
import VideoModal from "./VideoModal";

const HRA = () => {

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

  const ContentDisplayData = [
    {
      view: '1',
      imageUrl: '/img/about2.png',
      title: "What is Health Risk Assessment (HRA) ?",
      description1: `Health Risk Assessment (HRA) is the primary method for
      identifying and classifying the occupational health risk and
      its level of risk to the human in working environment. It is
      and gas industry, where workers are exposed to a variety of
      an important part of health and safety management in the oil
      potential hazards, including:`,
      listItems: ["Heat and cold stress", "Infectious diseases"],
      showButton: true,
      buttonStyle: '1',
      handlePlayClick: handlePlayClick,
      videoSrc: "https://www.youtube.com/embed/DLd_a15Lx88",
    },
    {
      view: '2',
      imageUrl: '/img/about3.png',
      title: "How It Works ?",
      description1: `The Meschino Health Risk Assessment, developed in 2005 and
      updated in 2014, stems from over 25 years of clinical
      experience. Originally designed for doctors, it's the most
      comprehensive tool, uncovering nutrient deficiencies, drug
      interactions, and more.With 200+ questions, the Meschino HRA takes just 15 minutes, offering a crucial personal roadmap to a healthier, fitter, and more energetic self.
      It can be classfied in two different
      section of :`,
      listItems: ["Individual", "Organization"],
      showButton: true,
      handlePlayClick: handlePlayClick,
      videoSrc: "https://www.youtube.com/embed/yzJuRsKX2CE",
    },
  ];

  return (
    <>
      {ContentDisplayData.map((item, index) => (
        <ContentDisplay key={index}  {...item} />
      ))}

      <VideoModal
        showModal={showModal}
        currentVideoSrc={currentVideoSrc}
        handleOverlayClick={handleOverlayClick}
      />
    </>
  );
};

export default HRA;
