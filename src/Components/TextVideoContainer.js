import React from 'react';

const TextVideoContainer = ({ imageSrc, title, description1, description2, listItems, handlePlayClick, videoSrc, view }) => {

    return (
        <>
            {view === 'Mental Health' ? (
                <div className="about_area p-4 mt-4 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about_content">
                                    <h2>
                                        <span className="regular">{title}</span>
                                    </h2>
                                    <p>{description1}</p>
                                    <ul>
                                        {listItems.map((item, index) => (
                                            <li key={index}>
                                                <i className="zmdi zmdi-play-circle"></i> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p>{description2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="about_area p-4 mt-4 mb-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 order-lg-7">
                                    <div className="about_video_content">
                                        <a href="#" className="video_popup">
                                            <img src={imageSrc} alt="" className="img-fluid rounded" onClick={(e) => handlePlayClick(e, videoSrc)} />
                                            <span className="icon">
                                                <i className="zmdi zmdi-play-circle-outline"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about_content">
                                        <h2>
                                            <span className="regular">{title}</span>
                                        </h2>
                                        <p>{description1}</p>
                                        <ul>
                                            {listItems.map((item, index) => (
                                                <li key={index}>
                                                    <i className="zmdi zmdi-play-circle"></i> {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <p>{description2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default TextVideoContainer;