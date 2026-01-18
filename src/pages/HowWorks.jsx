import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PlayButton from "../assets/icons/play-circle.png";
import Logo from "../assets/logos/logo.png";
import Rocket from "../assets/icons/rocket-01.png";
import HeroShape from "../assets/shapes/shape-1.png";
import howItWorksImg from "../assets/images/how-works.png";
import "./HowWorks.css";
import Header from '../components/Navbar'
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

const pointsData = [
    {
        id: 1,
        description: "We understand user needs and define the project scope.",
        top: 4.5,
        left: 27.5,

        title: "1. Propose a Solution",
        subtitle: "Have an idea that solves a real problem?",
        desc:
            "Submit your proposal with a clear problem statement, objectives, and expected impact.\nEvery great product starts with a strong idea.",
    },
    {
        id: 2,
        title: "Planning & Strategy",
        description: "Roadmap creation and technical planning.",
        bottom: 40.5,
        left: 2,
    },
    {
        id: 3,
        title: "Development",
        description: "Design, coding, and feature implementation.",
        bottom: 1,
        left: 18,
    },
    {
        id: 4,
        title: "Development",
        description: "Design, coding, and feature implementation.",
        bottom: 41,
        left: 36.5,
    },
    {
        id: 5,
        title: "Development",
        description: "Design, coding, and feature implementation.",
        bottom: 9,
        right: 33,
    },
    {
        id: 6,
        title: "Development",
        description: "Design, coding, and feature implementation.",
        bottom: 18.5,
        right: 20,
    },
    {
        id: 7,
        title: "Development",
        description: "Design, coding, and feature implementation.",
        bottom: 44.5,
        right: 10,
    }
];


export default function HeroSection() {

    const navigate = useNavigate();

    const [activeId, setActiveId] = useState(null);

    const [activeStep, setActiveStep] = useState(null);

    const activeContent = activeStep ? stepsData[activeStep] : null;

    return (
        <>
            {/* Header */}
            <Header />

            {/* ======================= HERO / BANNER  ======================= */}
            <section className="py-lg-5 py-2 how-work-hero-section d-flex align-items-center justify-content-center overflow-hidden position-relative"
            >
                {/* Decorative shape */}
                <motion.img
                    src={HeroShape}
                    alt="Shape"
                    className="hero-page-shape-img d-lg-block d-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                />
                <div className="container">



                    <div className="row align-items-center g-5">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-6 m-0 text-center text-lg-start">

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
                                className="text-muted fs-5 mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ delay: 0.4 }}
                            >
                                The open collaboration platform where 1,200+ visionaries
                                turn raw ideas into launched software.
                            </motion.p>
                            <div className="d-lg-block d-none">
                                <motion.div
                                    className="d-flex gap-3 justify-content-center justify-content-lg-start"
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                >
                                    {/* Launch Button */}
                                    <motion.button
                                        className="btn btn-violet rounded-pill fw-bold px-4 responsive-btn"
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate("/contact")}
                                    >
                                        <img
                                            src={Rocket}
                                            className="me-2 w-sm-20"
                                            style={{ width: "30px" }}
                                            alt=""
                                        />
                                        Launch your idea
                                    </motion.button>

                                    {/* See How It Works Button */}

                                </motion.div>
                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-lg-6 position-relative my-lg-3 my-0">


                            {/* Buttons */}
                            <motion.div
                                className="d-flex gap-3 justify-content-center justify-content-lg-start d-block d-lg-none mt-3"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                {/* Launch Button */}
                                <motion.button
                                    className="btn btn-violet rounded-pill fw-bold px-md-4 px-2 responsive-btn"
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate("/contact")}
                                >
                                    <img
                                        src={Rocket}
                                        className="me-2 w-sm-20"
                                        style={{ width: "30px" }}
                                        alt=""
                                    />
                                    Launch your idea
                                </motion.button>

                                {/* See How It Works Button */}

                            </motion.div>
                        </div>

                    </div>
                    {/* <motion.img
                    src={HeroShape}
                    alt="Shape"
                    className="hero-page-shape-img d-lg-none d-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                /> */}
                </div>
            </section>

            {/* ======================= HOW IT WORKS (IMAGE + HOVERS) ======================= */}
            <section className="howworks-section">
                <div className="container">
                    <motion.h2
                        className="howworks-title fw-medium mb-5"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        How it Works
                    </motion.h2>

                    <div className="ibp-wrapper position-relative">
                        <img src={howItWorksImg} alt="Process Flow" className="img-fluid w-100" />

                        {pointsData.map((point) => (
                            <div
                                key={point.id}
                                className="ibp-pointWrap"
                                style={{
                                    ...(point.top !== undefined && { top: `${point.top}%` }),
                                    ...(point.bottom !== undefined && { bottom: `${point.bottom}%` }),
                                    ...(point.left !== undefined && { left: `${point.left}%` }),
                                    ...(point.right !== undefined && { right: `${point.right}%` }),
                                }}
                                onMouseEnter={() => {
                                    setActiveId(point.id);
                                    setActiveStep(`step${point.id}`);
                                }}
                                onMouseLeave={() => {
                                    setActiveId(null);
                                    setActiveStep(null);
                                }}
                            >
                                {/* NUMBER */}
                                <div className="ibp-number">{point.id}</div>

                                {/* BLINKING DOT */}
                                <span className="ibp-blink" />

                                {/* ✅ POPUP CARD ABOVE NUMBER */}
                                <AnimatePresence>
                                    {activeId === point.id && activeContent && (
                                        <motion.div
                                            className="howworks-popup-card"
                                            initial={{ opacity: 0, y: 14, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 14, scale: 0.96 }}
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
                        ))}



                    </div>

                    <motion.div
                        className="howworks-image-wrapper"
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >


                        {/* ✅ Hover Layer */}
                        <div className="howworks-hover-layer">



                        </div>
                    </motion.div>
                </div>


            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}
