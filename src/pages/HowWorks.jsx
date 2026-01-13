import { motion } from "framer-motion";
import heroImg from "../assets/images/banner-image.png";
import { Link } from "react-router-dom";
import Logo from "../assets/logos/logo.png";
import Rocket from "../assets/icons/rocket-01.png";
import PlayButton from "../assets/icons/play-circle.png";
import HeroShape from "../assets/shapes/shape-1.png";
import howItWorksImg from "../assets/images/how-works.png";
import './HowWorks.css'

const title = "Turn Proposals into Real-World Solutions";

/* Letter animation */
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

const letter = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

export default function HeroSection() {
    return (
        <>
            {/* Banner */}
            <section className="py-5 overflow-hidden">
                <div className="container">

                    {/* Logo */}
                    <Link className="navbar-brand fw-bold" to="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="img-fluid"
                            style={{ width: "140px" }}
                        />
                    </Link>

                    <div className="row align-items-center g-5">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-6 text-center text-lg-start">

                            {/* Animated title */}
                            <motion.h1
                                className="display-3 fw-bold mb-3"
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.6 }}
                            >
                                {title.split("").map((char, i) => (
                                    <motion.span key={i} variants={letter}>
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                className="text-muted mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ delay: 0.4 }}
                            >
                                We believe great solutions are built collaboratively. Our platform enables innovators, developers, and contributors to move seamlessly from ideas to execution—step by step.
                            </motion.p>

                            {/* Buttons */}
                            <motion.div
                                className="d-flex gap-3 justify-content-center justify-content-lg-start"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                <motion.button
                                    className="btn btn-violet rounded-pill fw-bold px-4"
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src={Rocket} className="me-2" style={{ width: "30px" }} alt="" />
                                    Launch your idea
                                </motion.button>
                            </motion.div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-lg-6 position-relative">

                            {/* Decorative shape */}
                            <motion.img
                                src={HeroShape}
                                alt="Shape"
                                className="hero-page-shape-img"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 1 }}
                            />

                            <div className="hero-image-center">


                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* How It Works */}
            <section className="howworks-section">
                <div className="container">
                    {/* Heading */}
                    <motion.h2
                        className="howworks-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        How it Works
                    </motion.h2>

                    {/* Image */}
                    <motion.div
                        className="howworks-img-wrap"
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={howItWorksImg}
                            alt="How it Works"
                            className="howworks-img"
                        />
                    </motion.div>
                </div>
            </section>
        </>

    );
}
