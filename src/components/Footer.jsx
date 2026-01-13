import { motion } from "framer-motion";
import { FaInstagram, FaTelegramPlane, FaTiktok, FaYoutube } from "react-icons/fa";
import logo from "../assets/logos/logo.png";
import "./Footer.css";

const fade = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 }
};

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row gy-4">

                    {/* Logo & Contact */}
                    <motion.div
                        className="col-lg-4 col-md-6"
                        initial={fade.initial}
                        whileInView={fade.animate}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={logo} alt="Zinch" className="footer-logo mb-3" />

                        <p className="footer-text">
                            <strong>Corporate Head Office:</strong> 3787 Jerry Dove Drive, Florence,
                            South Carolina, 29501, United States.
                        </p>
                        <div className="mt-3">

                            <p className="footer-text">
                                <strong>Phone:</strong> <a href="tel:8434967759">843-496-7759</a>
                            </p>

                            <p className="footer-text">
                                <strong>Fax:</strong> <a href="#">02-222264303</a>
                            </p>

                            <p className="footer-text">
                                <strong>Email:</strong> <a href="mailto:info@mastershub.com">info@mastershub.com</a>
                            </p>
                        </div>
                    </motion.div>

                    {/* Footer columns */}
                    {[
                        {
                            title: "Quick Links",
                            links: [
                                { label: "About Us", url: "/about" },
                                { label: "Watch Technical", url: "/technical" },
                                { label: "Videos", url: "/videos" },
                                { label: "Explore Projects", url: "/projects" },
                                { label: "Discover Creators", url: "/creators" },
                                { label: "Trending Content", url: "/trending" }
                            ]
                        },
                        {
                            title: "For Creators",
                            links: [
                                { label: "Join as Creator", url: "/join-creator" },
                                { label: "Share Your Work", url: "/share-work" },
                                { label: "Collaborate on Projects", url: "/collaborate" },
                                { label: "Creator Guidelines", url: "/creator-guidelines" }
                            ]
                        },
                        {
                            title: "Support",
                            links: [
                                { label: "Help Center", url: "/help" },
                                { label: "Community Rules", url: "/community-rules" },
                                { label: "Contact Us", url: "/contact" },
                                { label: "FAQs", url: "/faqs" }
                            ]
                        },
                        {
                            title: "Legal",
                            links: [
                                { label: "Privacy Policy", url: "/privacy-policy" },
                                { label: "Terms & Conditions", url: "/terms" },
                                { label: "Cookie Policy", url: "/cookies" }
                            ]
                        }
                    ].map((col, i) => (
                        <motion.div
                            key={i}
                            className="col-lg-2 col-md-6"
                            initial={fade.initial}
                            whileInView={fade.animate}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h6 className="footer-title">{col.title}</h6>

                            <ul className="footer-links">
                                {col.links.map((link, idx) => (
                                    <li key={idx} className="mb-2">
                                        <a href={link.url}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="footer-bottom d-flex justify-content-between align-items-center mt-4"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.35 }}
                >
                    <p className="mb-0 text-blue ">©2026 All rights reserved</p>

                    <div className="social-icons">
                        <motion.a whileHover={{ scale: 1.2 }} href="#"><FaInstagram /></motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="#"><FaTelegramPlane /></motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="#"><FaTiktok /></motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="#"><FaYoutube /></motion.a>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}
