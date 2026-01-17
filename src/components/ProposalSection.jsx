import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import JourneyImg from "../assets/images/proposal-img.png"; // 👈 your right image
import "./JourneySection.css";


export default function ProposalSection() {
    return (
        <section className="py-5 journey-section overflow-hidden">
            <div className="container">
                <div className="row align-items-center g-5">

                    {/* Left Image */}
                    <motion.div
                        className="col-lg-6 my-0"
                        initial={{ opacity: 0, scale: 0.94, x: 40 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1]   // premium easing (natural slide)
                        }}
                    >
                        <motion.img
                            src={JourneyImg}
                            alt="Journey flow"
                            className="img-fluid journey-image"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    </motion.div>


                    {/* Right Content */}
                    <motion.div
                        className="col-lg-6 text-center text-lg-start"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <motion.h2 className="fw-bold display-6 mb-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Where Proposals Grow Up into Products
                        </motion.h2>

                        <motion.p
                            className="text-muted mb-4"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.6 }}
                        >
                            A collaborative platform where ideas evolve into real-world
                            solutions through structured contribution, design,
                            development, and community sharing.
                        </motion.p>

                        <motion.button
                            className="btn gradient-border-btn rounded-pill fw-bold px-4 py-2"
                            whileHover={{ scale: 1.08, boxShadow: "0px 10px 30px rgba(0,0,0,0.15)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            Let's Get Started
                        </motion.button>
                    </motion.div>




                </div>
            </div>
        </section>
    );
}
