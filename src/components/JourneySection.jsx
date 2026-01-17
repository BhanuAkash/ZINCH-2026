import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import JourneyImg from "../assets/images/journey-img.png"; // 👈 your right image
import "./JourneySection.css";
import { useNavigate } from "react-router-dom";

export default function JourneySection() {
    const navigate = useNavigate();

    return (
        <section className="py-5 journey-section overflow-hidden">
            <div className="container">
                <div className="row align-items-center g-5">

                    {/* LEFT CONTENT */}
                    <motion.div
                        className="col-lg-6 text-center text-lg-start"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="fw-bold display-6 mb-3">
                            The complete journey of
                            turning a project proposal
                            into a shared solution
                        </h2>

                        <p className="text-muted mb-4">
                            A collaborative platform where ideas evolve into real-world
                            solutions through structured contribution, design,
                            development, and community sharing.
                        </p>

                        <motion.button
                            className="btn gradient-border-btn rounded-pill fw-bold px-4 py-2 d-lg-block d-none"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/contact")}
                        >

                            Let's Get Started
                        </motion.button>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        className="col-lg-6 my-0"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.4 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            src={JourneyImg}
                            alt="Journey flow"
                            className="img-fluid journey-image"
                        />
                        <div className="d-flex justify-content-center mt-4">
                            <motion.button
                                className="btn gradient-border-btn rounded-pill fw-bold px-4 py-2 d-lg-none d-block"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/contact")}
                            >

                                Let's Get Started
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
