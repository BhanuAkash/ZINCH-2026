import { motion } from "framer-motion";
import bg from "../assets/shapes/shape-1.png"; // put your image here
import './CareerCTA.css'
import { useNavigate } from "react-router-dom";


export default function CareerCTA() {
    const navigate = useNavigate();

    return (
        <section className="container my-5">
            <motion.div
                className="cta-wrapper row align-items-center justify-content-center mx-md-0 mx-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    backgroundImage: `url(${bg})`
                }}
            >

                <div className="col-lg-7 text-center text-lg-start">
                    <motion.h2
                        className="cta-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Join ambitious professionals and <br />
                        unlock your dream career today
                    </motion.h2>

                    <motion.p
                        className="cta-text"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                    >
                        See how Zinch helps teams stay ahead with the platform for workplace learning.
                    </motion.p>
                </div>

                <div className="col-lg-3 text-lg-end text-center mt-4 mt-lg-0">
                    <motion.button
                        className="cta-btn"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/contact")}
                    >
                        Let’s Get Started
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
}
