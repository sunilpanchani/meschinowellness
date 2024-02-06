"use client";
import React from 'react';
import Link from 'next/link';

const TabOptions = ({ handleImageClick }) => {

    const TabOption = [
        {
            id: "1",
            image: '/img/op1.png',
            title: "Health Risk Assessment",
            sectionId: "HealthRiskSection",
        },
        {
            id: "2",
            image: '/img/op2.png',
            title: "My Wellness Report",
            sectionId: "MyWellnessReport",
        },
        {
            id: "3",
            image: '/img/op3.png',
            title: "My Wellness Plan",
            sectionId: "MyWellnessReport",
        },
        {
            id: "4",
            image: '/img/op4.png',
            title: "Get RewarDed",
            sectionId: "MyWellnessReport",
        },
    ];

    return (
        <>
            <div className="v5_opeining_timte_area">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        {TabOption.map((option) => (
                            <div key={option.id} className="col-12 col-md-6 col-lg-3">
                                <div
                                    className="v5_single_opt"
                                    onClick={() => handleImageClick(option.id)}
                                >
                                    <span className="op_img">
                                        <img src={option.image} alt="" />
                                    </span>
                                    <h5>{option.title}</h5>
                                    <span>{option.content}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabOptions;