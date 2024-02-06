import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';

export const metadata = {
    title: "About us - Meschino Health and Wellness",
};

const page = () => {

    return (
        <>
            <Breadcrumb title="About" item="About Us" />
            <div className="mt-4 mb-4 p-4">
                <div className="container">
                    <div className="row">
                        <div className="single_faq">
                            <h4>What is the Meschino Health & Wellness Platform ?</h4>
                            <p>
                                The Meschino Health & Wellness Platform provides users with a personalized wellness plan to enable them to achieve the body nature intended them to have: fitter, healthier, leaner, and more energized.
                                After completing the Nutrition-Lifestyle Health Risk Assessment the platform instantly generates a personalized wellness plan, along with targeted daily tracking tools and coaching strategies proven to ensure weight loss and wellness success.
                                Users are up and running within 20 minutes after log in, and the motivational features keep them engaged to ensure success with their self-selected short-term and long-term goals.
                            </p>
                        </div>
                        <div className="single_faq">
                            <h4>Reduce Company Health Costs</h4>
                            <p>
                                The platform identifies physical and mental health risks that not only impact your employees’ present and future health, but also impact your bottom line.
                                By Identifying Health Risks on an aggregate basis the platform also provides a snap shot of the health profile of the entire organization, enabling the planning of future wellness initiatives that will best curb future health care, disability and absenteeism costs.
                            </p>
                        </div>
                        <div className="single_faq">
                            <h4>The Missing Link in Healthcare</h4>
                            <p>
                                The Meschino Health & Wellness platform is the missing link in today’s healthcare environment.
                                Studies show that the main factors that determine your future health and productivity are your current dietary and lifestyle practices, as well as your body weight and your vulnerability to mental health problems.
                                Our platform identifies key risks and provides the proven components shown to help individuals transition to a more proactive, health conscious lifestyle, and to stick with it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;