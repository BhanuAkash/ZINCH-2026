import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "./WhyChooseZinch.css";

// video
import VideoFile from "../assets/images/video-resume.mp4";

// icons
import IconShowcase from "../assets/icons/showcase.png";
import IconNetwork from "../assets/icons/network.png";
import IconCommunity from "../assets/icons/community.png";
import IconLearn from "../assets/icons/community.png"; // Assuming correct path; adjust if needed
import IconUsers from "../assets/icons/community.png"; // Assuming correct path; adjust if needed

// arrows
import Arrow1 from "../assets/icons/arrow-1.png";
import Arrow2 from "../assets/icons/arrow-2.png";

const cards = [
    {
        title: "Showcase Real Work",
        desc: "Showcase your project to stand out among all",
        icon: IconShowcase,
        button: "Add Work",
        position: "card-left-top",
    },
    {
        title: "100K+",
        desc: "Worldwide Active Users",
        icon: IconUsers,
        button: "Join Now", // Added hover button
        position: "card-left-bottom",
    },
    {
        title: "Networking",
        desc: "Worldwide Active Users",
        icon: IconNetwork,
        button: "Explore",
        position: "card-right-top",
    },
    {
        title: "Growing Community",
        desc: "Worldwide Active Users",
        icon: IconCommunity,
        button: "Join Now",
        position: "card-right-middle",
    },
    {
        title: "Learn by Watching",
        desc: "Worldwide Active Users",
        icon: IconLearn,
        button: "Watch Now",
        position: "card-right-bottom",
    },
];

export default function WhyChooseZinch() {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true; // REQUIRED for autoplay
            videoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => {
                    setIsPlaying(false);
                });
        }
    }, []);

    const handleVideoClick = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };




    return (
        <section className="why-zinch-section py-5">
            <div className="container text-center">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-7">
                        {/* HEADER */}
                        <motion.h2
                            className="fw-bold display-6 mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Why Choose Zinch in Me?
                        </motion.h2>

                        <motion.p
                            className="text-muted mb-5 fs-desc"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Unlock your true potential and discover a world of opportunities
                            that align with your skills, interests, and aspirations
                        </motion.p>
                    </div>
                </div>





                {/* MAIN WRAPPER */}
                <div
                    className="zinch-wrapper mx-auto"
                    onMouseLeave={() => setActiveIndex(0)}
                >

                    {/* CENTER LAYER */}
                    <div className="zinch-center">

                        {/* CIRCLES */}
                        <div className="video-circle circle-1"></div>
                        <div className="video-circle circle-2"></div>
                        <div className="video-circle circle-3"></div>

                        {/* VIDEO */}
                        <motion.div
                            className="video-card-wrapper"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            onClick={handleVideoClick}
                        >
                            <div className="video-card">
                                <video
                                    ref={videoRef}
                                    src={VideoFile}
                                    loop
                                    muted
                                    autoPlay
                                    playsInline
                                    className="video-element"
                                />
                                <span className="video-label">Video Resume</span>
                            </div>
                        </motion.div>

                    </div>

                    {/* ARROWS */}
                    <img src={Arrow2} className="curvy-arrow arrow-1" alt="" />
                    <img src={Arrow1} className="curvy-arrow arrow-2" alt="" />

                    {/* FEATURE CARDS */}
                    {cards.map((card, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                className={`zinch-card ${card.position} ${isActive ? "active" : ""}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="card-inner">
                                    <div className="card-icon">
                                        <img src={card.icon} alt="" />
                                    </div>

                                    <div className="card-content">
                                        <h6>{card.title}</h6>
                                        <p>{card.desc}</p>

                                        {isActive && card.button && (
                                            <motion.button
                                                className="btn btn-violet rounded-pill btn-sm mt-2"
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {card.button}
                                            </motion.button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}