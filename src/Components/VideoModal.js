import React from 'react';

const VideoModal = ({ showModal, currentVideoSrc, handleOverlayClick }) => {

    return (
        <>
            {showModal && (
                <div
                    className="modal fade show d-flex align-items-center"
                    tabIndex="-1"
                    onClick={handleOverlayClick}
                    style={{
                        display: "block",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            margin: "auto",
                            minWidth: window.innerWidth > 800 ? "60%" : "100%",
                        }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                border: "none",
                                background: "transparent",
                                minHeight: "50vh",
                            }}
                        >
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

export default VideoModal;