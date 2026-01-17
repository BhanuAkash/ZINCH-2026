import { motion } from "framer-motion";
import { FaInstagram, FaTelegramPlane, FaTiktok, FaYoutube } from "react-icons/fa";
import logo from "../assets/logos/logo.png";
import "./Footer.css";
import CareerCTA from "./CareerCTA";
import footerBg from "../assets/images/footer-bg.png";


const fade = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 }
};

export default function Footer() {
    return (
        <>
            <div
                className="footer-main"
                style={{
                    background: `url(${footerBg}) center / cover no-repeat`
                }}
            >
                {/* Pre Footer Section */}
                <CareerCTA />

                {/* Footer Section */}
                {/* Footer Section */}
                <footer className="footer-section py-5">
                    <div className="container">
                        <div className="row gy-5">

                            {/* Brand + Contact Info */}
                            <div className="col-lg-4 col-md-6">
                                <img
                                    src={logo}
                                    alt="Zinch Logo"
                                    className="footer-logo mb-4"
                                    style={{ maxHeight: '60px', width: 'auto' }}
                                />

                                <h6 className="fw-bold mb-3">Corporate Head Office</h6>
                                <p className="text-secondary mb-2">
                                    3787 Jerry Dove Drive, Florence,<br />
                                    South Carolina, 29501, United States
                                </p>

                                <div className="mt-4">
                                    <p className="mb-2">
                                        <strong>Phone:</strong> <a href="tel:+18434967759" className="text-secondary text-decoration-none">843-496-7759</a>
                                    </p>
                                    <p className="mb-2">
                                        <strong>Fax:</strong> <span className="text-secondary">02-222264303</span>
                                    </p>
                                    <p className="mb-0">
                                        <strong>Email:</strong> <a href="mailto:info@mastershub.com" className="text-secondary text-decoration-none">info@mastershub.com</a>
                                    </p>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <h6 className="footer-title fw-bold mb-4">Quick Links</h6>
                                <ul className="list-unstyled footer-links">
                                    <li className="mb-2"><a href="/about">About Us</a></li>
                                    <li className="mb-2"><a href="/technical">Watch Technical</a></li>
                                    <li className="mb-2"><a href="/videos">Videos</a></li>
                                    <li className="mb-2"><a href="/projects">Explore Projects</a></li>
                                    <li><a href="/creators">Discover Creators</a></li>
                                </ul>
                            </div>

                            {/* For Creators */}
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <h6 className="footer-title fw-bold mb-4">For Creators</h6>
                                <ul className="list-unstyled footer-links">
                                    <li className="mb-2"><a href="/join-creator">Join as Creator</a></li>
                                    <li className="mb-2"><a href="/share-work">Share Your Work</a></li>
                                    <li className="mb-2"><a href="/collaborate">Collaborate on Projects</a></li>
                                    <li><a href="/creator-guidelines">Creator Guidelines</a></li>
                                </ul>
                            </div>

                            {/* Support */}
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <h6 className="footer-title fw-bold mb-4">Support</h6>
                                <ul className="list-unstyled footer-links">
                                    <li className="mb-2"><a href="/help">Help Center</a></li>
                                    <li className="mb-2"><a href="/community-rules">Community Rules</a></li>
                                    <li className="mb-2"><a href="/contact">Contact Us</a></li>
                                    <li><a href="/faqs">FAQs</a></li>
                                </ul>
                            </div>

                            {/* Legal */}
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <h6 className="footer-title fw-bold mb-4">Legal</h6>
                                <ul className="list-unstyled footer-links">
                                    <li className="mb-2"><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li className="mb-2"><a href="/terms">Terms & Conditions</a></li>
                                    <li><a href="/cookies">Cookie Policy</a></li>
                                </ul>
                            </div>

                        </div>

                        {/* Bottom Bar */}
                        <div className="footer-bottom mt-5 pt-4">
                            <div className="row align-items-center">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    <small>© {new Date().getFullYear()} Zinch. All rights reserved.</small>
                                </div>

                                <div className="col-md-6">
                                    <div className="social-icons d-flex justify-content-center justify-content-md-end gap-4">
                                        <a href="#" className="text-light fs-5 hover-lift"><FaInstagram /></a>
                                        <a href="#" className="text-light fs-5 hover-lift"><FaTelegramPlane /></a>
                                        <a href="#" className="text-light fs-5 hover-lift"><FaTiktok /></a>
                                        <a href="#" className="text-light fs-5 hover-lift"><FaYoutube /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>

        </>

    );
}
