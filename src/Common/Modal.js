import React from "react";

const Modal = ({ showModal, onClose, videoSrc }) => {
    return (
        <>
            {showModal && (
                <div
                    className="modal fade show"
                    style={{
                        display: "block",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    tabIndex="-1"
                    onClick={onClose}
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        style={{
                            margin: "auto",
                            minWidth: "50%",
                        }}
                        onClick={(e) => e.stopPropagation()}
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
                                {videoSrc && (
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            className="embed-responsive-item"
                                            src={videoSrc}
                                            allowFullScreen
                                            title="YouTube Video"
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
