import { motion } from "framer-motion";
import heroImg from "../assets/images/banner-image.png";
import BrandSlider from "./BrandSlider";
import { Link } from "react-router-dom";
import Logo from "../assets/logos/logo.png";
import Rocket from "../assets/icons/rocket-01.png";
import PlayButton from "../assets/icons/play-circle.png";
import HeroShape from "../assets/shapes/shape-1.png";
import './HeroSection.css'

const title = "From Idea to Impact";

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
        <section className="py-lg-5 py-2 overflow-hidden position-relative">
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

                {/* Logo */}
                <Link className="navbar-brand fw-bold d-flex justify-content-lg-start justify-content-center" to="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="img-fluid my-lg-0 my-3"
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
                            className="text-muted fs-5 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: 0.4 }}
                        >
                            The open collaboration platform where 1,200+ visionaries
                            turn raw ideas into launched software.
                        </motion.p>
                        <div className=" d-lg-block d-none">
                            {/* Buttons */}
                            <motion.div
                                className="d-flex gap-3 justify-content-center justify-content-lg-start"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                <motion.button
                                    className="btn btn-violet rounded-pill fw-bold px-4 responsive-btn"
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src={Rocket} className="me-2 w-sm-20" style={{ width: "30px" }} alt="" />
                                    Launch your idea
                                </motion.button>

                                <motion.button
                                    className="btn gradient-border-btn rounded-pill fw-bold px-4 responsive-btn"
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src={PlayButton} className="me-2 w-sm-20" style={{ width: "30px" }} alt="" />
                                    See how it works
                                </motion.button>
                            </motion.div>
                        </div>


                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-6 position-relative my-lg-3 my-0">

                        <div className="hero-image-center">

                            {/* Background glow */}
                            <motion.div
                                className="hero-image-bg"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8 }}
                            />

                            {/* Main hero image */}
                            <motion.img
                                src={heroImg}
                                alt="Hero"
                                className="hero-image"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.3 }}
                            />
                        </div>
                        {/* Buttons */}
                        <motion.div
                            className="d-flex gap-3 justify-content-center justify-content-lg-start d-block d-lg-none mt-3"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <motion.button
                                className="btn btn-violet rounded-pill fw-bold px-md-4 px-2 responsive-btn"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img src={Rocket} className="me-2 w-sm-20" style={{ width: "30px" }} alt="" />
                                Launch your idea
                            </motion.button>

                            <motion.button
                                className="btn gradient-border-btn rounded-pill fw-bold px-md-4 px-2 responsive-btn"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img src={PlayButton} className="me-2 w-sm-20" style={{ width: "30px" }} alt="" />
                                See how it works
                            </motion.button>
                        </motion.div>

                    </div>

                </div>
                <motion.img
                    src={HeroShape}
                    alt="Shape"
                    className="hero-page-shape-img d-lg-none d-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                />

                <BrandSlider />
            </div>
        </section>
    );
}
