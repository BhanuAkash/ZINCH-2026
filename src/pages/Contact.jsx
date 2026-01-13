import { motion } from "framer-motion";
import { FiUser, FiMail } from "react-icons/fi";
import heroImg from "../assets/images/get-started.png";

import mediumIcon from "../assets/icons/medium.png";
import youtubeIcon from "../assets/icons/youtube.png";

import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import "./Contact.css";

export default function GetStartedSection() {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Get Started */}
            <section className="get-started-section">
                <div className="container">
                    <div className="get-started-grid">

                        {/* LEFT IMAGE */}
                        <motion.div
                            className="get-started-left"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={heroImg} alt="Get Started" className="get-started-image" />
                        </motion.div>

                        {/* RIGHT FORM */}
                        <motion.div
                            className="get-started-right"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
                            <h2 className="get-title">Get started now</h2>
                            <p className="get-subtitle">
                                Enter your credentials to access to your account
                            </p>

                            <form className="get-form">

                                {/* Name */}
                                <div className="get-field">
                                    <label className="get-label">Name</label>
                                    <div className="get-input">
                                        <span className="get-icon">
                                            <FiUser />
                                        </span>
                                        <input type="text" placeholder="Name" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="get-field">
                                    <label className="get-label">Email address</label>
                                    <div className="get-input">
                                        <span className="get-icon">
                                            <FiMail />
                                        </span>
                                        <input type="email" placeholder="Enter your email" />
                                    </div>
                                </div>


                                {/* Link Work */}
                                <div className="get-field">
                                    <label className="get-label">Link your work</label>

                                    {/* Medium */}
                                    <div className="get-input mb-14">
                                        <span className="get-icon-img">
                                            <img src={mediumIcon} alt="Medium" />
                                        </span>
                                        <input type="text" placeholder="e.g., medium.com/yourname" />
                                    </div>

                                    {/* YouTube */}
                                    <div className="get-input">
                                        <span className="get-icon-img">
                                            <img src={youtubeIcon} alt="YouTube" />
                                        </span>
                                        <input type="text" placeholder="e.g., youtube.com/yourname" />
                                    </div>
                                </div>

                                {/* Button */}
                                <button type="submit" className="get-btn">
                                    Login
                                </button>

                                <p className="get-footer">
                                    Have an account? <a href="#">Sign up</a>
                                </p>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}
