import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Avatar1 from "../assets/images/testimonials/Ellipse 4.png";
import Avatar2 from "../assets/images/testimonials/Ellipse 5.png";
import Avatar3 from "../assets/images/testimonials/Ellipse 6.png";
import './StatsSection.css'
import PlayButton from '../assets/icons/Frame.png'
import { useNavigate } from "react-router-dom";


export default function StatsSection() {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "-100px" });

    const [contributors, setContributors] = useState(0);
    const [docs, setDocs] = useState(0);
    const [projects, setProjects] = useState(0);

    useEffect(() => {
        let timers = [];

        if (isInView) {
            animateCounter(setContributors, 2150);
            animateCounter(setDocs, 458);
            animateCounter(setProjects, 85);
        } else {
            setContributors(0);
            setDocs(0);
            setProjects(0);
        }

        function animateCounter(setter, end) {
            let current = 0;
            const duration = 1200;
            const increment = Math.ceil(end / (duration / 16));

            const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                    setter(end);
                    clearInterval(timer);
                } else {
                    setter(current);
                }
            }, 16);

            timers.push(timer);
        }

        return () => timers.forEach(clearInterval);
    }, [isInView]);

    return (
        <section ref={sectionRef} className="py-5 mb-lg-5">
            <div className="container">
                <div className="row align-items-center g-4">

                    {/* LEFT STATS */}
                    <div className="col-lg-6">
                        <div className="row text-center text-lg-start">

                            <motion.div
                                className="col-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.6 }}
                            >
                                <h2 className="fw-normal display-6 mb-1 text-center">
                                    {contributors.toLocaleString()}+
                                </h2>
                                <p className="text-muted text-sm-12 mb-0 text-center">Contributors</p>
                            </motion.div>

                            <motion.div
                                className="col-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.6 }}
                            >
                                <h2 className="fw-normal display-6 mb-1 text-center">
                                    {docs.toLocaleString()}+
                                </h2>
                                <p className="text-muted text-sm-12 mb-0 text-center">Proposal Docs</p>
                            </motion.div>

                            <motion.div
                                className="col-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.6 }}
                            >
                                <h2 className="fw-normal display-6 mb-1 text-center">
                                    {projects.toLocaleString()}+
                                </h2>
                                <p className="text-muted text-sm-12 mb-0 text-center">Projects Shipped</p>
                            </motion.div>

                        </div>
                    </div>

                    {/* RIGHT LIVE ACTIVITY */}
                    <div className="col-lg-6">
                        <motion.div
                            className="live-pill"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ amount: 0.6 }}
                        >
                            <div className="row align-items-center text-center text-lg-start g-3">

                                {/* Text */}
                                <div className="col-md-5 col-12">
                                    <div className="">
                                        SarahDev just committed <br />
                                        code to Open-Source CRM
                                    </div>
                                </div>

                                {/* Avatars */}
                                <div className="col-md-4 col-6 d-flex justify-content-center">
                                    <div className="avatar-stack">
                                        <img src={Avatar1} alt="user" />
                                        <img src={Avatar2} alt="user" />
                                        <img src={Avatar3} alt="user" />
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="col-md-3 col-6 d-flex justify-content-center justify-content-lg-end">
                                    <motion.button
                                        className="btn btn-main rounded-pill px-3 py-2 w-100 w-lg-auto"
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                        animate={{
                                            scale: [1, 1.08, 1],
                                            boxShadow: [
                                                "0 0 0 rgba(111,107,255,0.4)",
                                                "0 0 18px rgba(111,107,255,0.55)",
                                                "0 0 0 rgba(111,107,255,0.4)",
                                            ],
                                        }}
                                        transition={{
                                            duration: 1.8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        onClick={() => navigate("/contact")}
                                    >
                                        <img
                                            src={PlayButton}
                                            className="me-2"
                                            alt=""
                                            style={{ width: "20px" }}
                                        />
                                        Live Now
                                    </motion.button>

                                </div>

                            </div>
                        </motion.div>
                    </div>


                </div>
            </div>
        </section>
    );
}
