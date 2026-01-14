import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../assets/logos/logo.png";
import Rocket from "../assets/icons/rocket-01.png";
import HeroShape from "../assets/shapes/shape-1.png";
import howItWorksImg from "../assets/images/how-works.png";
import "./HowWorks.css";
import Footer from '../components/Footer'

const title = "Turn Proposals into Real-World Solutions";

/* Letter animation */
const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.05 },
    },
};

const letter = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const stepsData = {
    step1: {
        title: "1. Propose a Solution",
        subtitle: "Have an idea that solves a real problem?",
        desc:
            "Submit your proposal with a clear problem statement, objectives, and expected impact.\nEvery great product starts with a strong idea.",
    },
    step2: {
        title: "2. Design the Solution",
        subtitle: "Create a Design Document.",
        desc:
            "Define the architecture, workflow, and technical approach. Well-structured designs help contributors understand the vision and ensure scalable, maintainable solutions.",
    },
    step3: {
        title: "3. Become a Contributor",
        subtitle: "Join the community and collaborate",
        desc:
            "Join the community and collaborate with like-minded builders. Review proposals, suggest improvements, or volunteer to work on ideas that inspire you.",
    },
    step4: {
        title: "4. Propose Queue & Share",
        subtitle: "Share with the Community.",
        desc:
            "All proposals enter a shared queue where the community can review, discuss, and refine ideas. Transparency and collaboration drive better outcomes.",
    },
    step5: {
        title: "5. Write the Code",
        subtitle: "Transform Design into Reality",
        desc:
            "Pick a proposal and start building. Convert approved designs into clean, efficient, and production-ready code with community feedback along the way.",
    },
    step6: {
        title: "6. Demo the Solution",
        subtitle: "Execute a Showcase",
        desc:
            "Present your working solution to the community. Demonstrate functionality, performance, and real-world use cases—turning concepts into proven results.",
    },
};

export default function HeroSection() {
    const [activeStep, setActiveStep] = useState(null);

    const activeContent = activeStep ? stepsData[activeStep] : null;

    return (
        <>
            {/* ======================= HERO / BANNER  ======================= */}
            <section className="hero-section">
                <div className="container">
                    {/* Logo */}
                    <Link className="hero-logo" to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>

                    <div className="row align-items-center g-5">
                        {/* LEFT CONTENT */}
                        <div className="col-lg-6 text-center text-lg-start">
                            <motion.h1
                                className="hero-title"
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

                            <motion.p
                                className="hero-desc"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ delay: 0.35 }}
                            >
                                We believe great solutions are built collaboratively. Our
                                platform enables innovators, developers, and contributors to
                                move seamlessly from ideas to execution—step by step.
                            </motion.p>

                            <motion.div
                                className="hero-btn-wrap"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ delay: 0.55, duration: 0.6 }}
                            >
                                <motion.button
                                    className="hero-btn"
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src={Rocket} alt="" />
                                    Launch your idea
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-lg-6 position-relative">
                            <motion.img
                                src={HeroShape}
                                alt="Shape"
                                className="hero-shape"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ======================= HOW IT WORKS (IMAGE + HOVERS) ======================= */}
            <section className="howworks-section">
                <div className="container">
                    <motion.h2
                        className="howworks-title"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        How it Works
                    </motion.h2>

                    <motion.div
                        className="howworks-image-wrapper"
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <img className="howworks-img" src={howItWorksImg} alt="How it Works" />

                        {/* ✅ Hover Layer */}
                        <div className="howworks-hover-layer">
                            {/* STEP 1 */}
                            <div
                                className="howworks-hotspot step1"
                                onMouseEnter={() => setActiveStep("step1")}
                                onMouseLeave={() => setActiveStep(null)}
                            />

                            {/* STEP 2 */}
                            <div
                                className="howworks-hotspot step2"
                                onMouseEnter={() => setActiveStep("step2")}
                                onMouseLeave={() => setActiveStep(null)}
                            />

                            {/* STEP 3 */}
                            <div
                                className="howworks-hotspot step3"
                                onMouseEnter={() => setActiveStep("step3")}
                                onMouseLeave={() => setActiveStep(null)}
                            />

                            {/* STEP 4 */}
                            <div
                                className="howworks-hotspot step4"
                                onMouseEnter={() => setActiveStep("step4")}
                                onMouseLeave={() => setActiveStep(null)}
                            />

                            {/* STEP 5 */}
                            <div
                                className="howworks-hotspot step5"
                                onMouseEnter={() => setActiveStep("step5")}
                                onMouseLeave={() => setActiveStep(null)}
                            />

                            {/* STEP 6 */}
                            <div
                                className="howworks-hotspot step6"
                                onMouseEnter={() => setActiveStep("step6")}
                                onMouseLeave={() => setActiveStep(null)}
                            />

                            {/* ✅ Popup Card (same for all) */}
                            <AnimatePresence>
                                {activeContent && (
                                    <motion.div
                                        className="howworks-popup-card"
                                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 12, scale: 0.96 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                    >
                                        <h4 className="popup-title">{activeContent.title}</h4>

                                        <p className="popup-subtitle">{activeContent.subtitle}</p>

                                        <p className="popup-desc">
                                            {activeContent.desc.split("\n").map((line, i) => (
                                                <span key={i}>
                                                    {line}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}
