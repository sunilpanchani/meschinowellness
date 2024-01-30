import React from 'react';
import DoctorDetails from '../assets/img/doctor_details1.jpg';
import Breadcrumb from '../Common/Breadcrumb';

const AboutDoctor = () => {

    return (
        <>
            <Breadcrumb title="About" item="About Dr. Meschino" />
            <div className="doctor_details_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="doctor_profile">
                                <img src={DoctorDetails} alt="" />
                                <h4>Dr. James Meschino</h4>
                                <p>DC, MS, ROHP</p>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <div className="doctor_history">
                                <div className="single_doctor_history">
                                    <h4>Director of Health Promotion and Wellness for Smart Employee Benefits</h4>
                                    <p>
                                        Dr. James Meschino, DC, MS, ROHP, is a prominent figure in the world of health and wellness.
                                        With an illustrious career spanning decades, he has made significant contributions in various domains of integrative medicine and nutrition.
                                        Dr. Meschino is currently the Director of Health Promotion and Wellness at Smart Employee Benefits, where he leads initiatives to enhance the well-being of individuals.
                                    </p>
                                </div>
                                <div className="single_doctor_history">
                                    <h4>Pioneering Work at the Cancer Immunotherapy Centers</h4>
                                    <p>
                                        Dr. Meschino has also served as the Director of Nutritional Therapy at the Cancer Immunotherapy Centers in Toronto.
                                        In this role, he collaborated with a team of medical physicians and an oncology nurse, dedicated to providing patients with both conventional and innovative integrative cancer therapies.
                                        These therapies encompass dietary modification and the utilization of nutritional supplements that target crucial biological processes in the adjunctive management of cancer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="single_doctor_history">
                                <h4>A Journey of Expertise and Education</h4>
                                <p>
                                    Initially trained as a Doctor of Chiropractic, Dr. Meschino's thirst for knowledge led him to earn a master’s degree in science, specializing in human nutrition and biology at the University of Bridgeport Conn.
                                    His dedication to education extends to his role as an associate professor at the Canadian Memorial Chiropractic College in Toronto, where he has been instructing courses in biochemistry, nutrition, and natural medicine since 1984.
                                </p>
                            </div>
                            <div className="single_doctor_history">
                                <h4>Empowering Healthcare Professionals Through Education</h4>
                                <p>
                                    Dr. Meschino's commitment to education is evident in his coordination and teaching of nutrition courses at the Canadian College of Naturopathic Medicine.
                                    He continues to offer continuing education courses on nutrition and natural medicine to healthcare providers in the United States and Canada, including medical doctors, pharmacists, chiropractors, and more.
                                    He also serves as a faculty member of the American Council on Exercise (ACE), educating fitness professionals on nutrition, athletic performance, and anti-aging.
                                </p>
                            </div>
                            <div className="single_doctor_history">
                                <h4>A Notable Contribution to Integrative Cancer Therapy</h4>
                                <p>
                                    In 2010, Dr. Meschino was invited to join the faculty of the American Academy of Anti-Aging Medicine.
                                    Here, he played a pivotal role in educating medical doctors, oncologists, and naturopaths in an 8-hour, CME-approved program titled The Evidence-based Adjunctive Nutritional Management of Cancer.
                                    This program was offered to participants in the Integrative Cancer Therapy Fellowship Program, further solidifying Dr. Meschino's impact in the field.
                                </p>
                            </div>
                            <div className="single_doctor_history">
                                <h4>Diverse Clinical Experience</h4>
                                <p>
                                    Dr. Meschino's clinical experience includes practicing at the Ryerson University Health Clinic in Toronto, providing medical and allied health services to the university's students, staff, and faculty.
                                    Additionally, he regularly lectured at the Regency Natural Health Spa in Hallandale, Florida, focusing on the prevention and management of common health issues through nutrition and lifestyle management.
                                </p>
                            </div>
                            <div className="single_doctor_history">
                                <h4>A Catalyst for Education: The RenaiSanté Institute of Integrative Medicine</h4>
                                <p>
                                    A testament to his commitment to education, Dr. Meschino founded The RenaiSanté Institute of Integrative Medicine.
                                    This institute offers a range of continuing education programs on nutrition, exercise, and supplementation to healthcare professionals.
                                    These programs encompass live seminars, DVD programs, and internet-based continuing education, empowering practitioners with the latest knowledge.
                                </p>
                            </div>
                            <div className="single_doctor_history">
                                <h4>Author and Columnist Extraordinaire</h4>
                                <p>
                                    Dr. Meschino has authored and co-authored four books, including "The Winning Weigh – 7 Steps to Healthier Living," "Break The Weight-Loss Barrier," "The Wrinkle-Free Zone," and "The Meschino Optimal Living Program – 7 Steps To A Healthy, Fit, Age-Resistant Body."
                                    His extensive contributions also include over 70 health articles published by America Online (AltMed site), making him a sought-after anti-aging and nutrition columnist in professional publications and consumer magazines.
                                </p>
                            </div>
                            <div className="single_doctor_history">
                                <h4>A Voice in Media and Broadcasting</h4>
                                <p>
                                    Beyond the written word, Dr. Meschino has shared his expertise through various media platforms.
                                    He hosted his health talk radio show on 640-AM in Toronto and served as the resident wellness expert on Canadian Living, a daily national TV program on the CTV network.
                                    He has been a guest on numerous TV and radio interview shows in both Canada and the United States, including appearances on "Good Morning Texas," "KTLA" (Los Angeles), and "Great Day America" (Fox Network).
                                    His 90-minute TV special, "Healthy Aging, Naturally," even aired on Detroit PBS TV.
                                </p>
                            </div>
                            <div className="single_doctor_history">
                                <h4>Innovator in Professional Health Products</h4>
                                <p>
                                    Not stopping at education and media, Dr. Meschino is the product formulator of Adëeva Nutritionals, a line of professional ingestible health products.
                                    These products have been distributed in the offices of over 2,000 health practitioners, reflecting his commitment to providing quality health solutions.
                                    Dr. James Meschino's life's work is a testament to his unwavering dedication to promoting health, wellness, and education, leaving an indelible mark on the field of integrative medicine and nutrition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutDoctor;