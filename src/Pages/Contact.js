import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';

const Contact = () => {

    return (
        <>
            <Breadcrumb title="Contact Us" item="Contact Us" />
            <div className="v5_about_area mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="v5_section_title">
                                <h3>Contact Us</h3>
                                <p> <strong>Address:</strong> Meschino Health and Wellness,
                                    5500 Explorer Drive, 4th Floor,
                                    Toronto, L4W 5C7, Canada</p>
                                <p><strong>Email:</strong>{" "}
                                    <a href="info@meschinowellness.com">support@adeeva.com</a>
                                </p>
                                <p>
                                    <strong>Telephone:</strong> 1-888-251-1010
                                </p>
                                <p>
                                    <strong>Fax:</strong> 1-888-781-3030
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
