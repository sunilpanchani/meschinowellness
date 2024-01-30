import React from 'react';
import Op1 from "../assets/img/op1.png";
import Op2 from "../assets/img/op2.png";
import Op3 from "../assets/img/op3.png";
import Op4 from "../assets/img/op4.png";

const TabOptions = ({ handleImageClick }) => {

    const TabOption = [
        {
            id: "1",
            image: Op1,
            title: "Health Risk Assessment",
        },
        {
            id: "2",
            image: Op2,
            title: "My wellness Report",
        },
        {
            id: "3",
            image: Op3,
            title: "My Wellness Plan",
        },
        {
            id: "4",
            image: Op4,
            title: "Get RewarDed",
        },
    ];

    return (
        <>
            <div className="v5_opeining_timte_area">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        {TabOption.map((option) => (
                            <div key={option.id} className="col-12 col-md-6 col-lg-3">
                                <a className='v5_single_opt'
                                    href={option.link}
                                    onClick={() => handleImageClick(option.id)}
                                >
                                    <span className="op_img">
                                        <img src={option.image} alt="" />
                                    </span>
                                    <h5>{option.title}</h5>
                                    <span>{option.content}</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabOptions;