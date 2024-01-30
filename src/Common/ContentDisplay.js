import React from 'react';

const ContentDisplay = ({ view, imageUrl, title, description1, description2, listItems, handlePlayClick, showButton, videoSrc }) => {


    return (
        <>
            <div className="about_area p-4 mt-4 mb-4">
                {view === '1' && (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="about_righ_content home_2">
                                    <div className='thumbnail_container'>
                                        <img src={imageUrl} alt="" className='image' onClick={(e) => handlePlayClick(e, videoSrc)} />
                                        <span className='icon'>
                                            <i className="zmdi zmdi-play-circle-outline"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 order-md-7">
                                <div className="about_content">
                                    <h1>
                                        <span className="regular">{title}</span>
                                    </h1>
                                    <p>{description1}</p>
                                    <ul>
                                        {listItems.map((item, index) => (
                                            <li key={index}>
                                                <i className="zmdi zmdi-play-circle"></i> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p>{description2}</p>
                                    {showButton && (
                                        <button className="custom_btn2" onClick={(e) => handlePlayClick(e, videoSrc)}>
                                            Know more <i className="zmdi zmdi-long-arrow-right"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {view === '2' && (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 order-md-6">
                                <div className="about_righ_content home_2">
                                    <div className='thumbnail_container'>
                                        <img src={imageUrl} alt="" className='image' onClick={(e) => handlePlayClick(e, videoSrc)} />
                                        <div className='icon'>
                                            <i className="zmdi zmdi-play-circle-outline"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about_content">
                                    <h1>
                                        <span className="regular">{title}</span>
                                    </h1>
                                    <p>{description1}</p>
                                    <ul>
                                        {listItems.map((item, index) => (
                                            <li key={index}>
                                                <i className="zmdi zmdi-play-circle"></i> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p>{description2}</p>
                                    {showButton && (
                                        <button className="custom_btn home_2" onClick={(e) => handlePlayClick(e, videoSrc)}>
                                            Know more
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ContentDisplay;
