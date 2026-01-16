import { motion } from "framer-motion";
import "./BrandSlider.css";

import Google from "../assets/logos/logo.png";
import Slack from "../assets/logos/logo.png";
import Heroku from "../assets/logos/logo.png";
import Agworld from "../assets/logos/logo.png";
import Riotinto from "../assets/logos/logo.png";

const brands = [Google, Slack, Heroku, Agworld, Riotinto];

export default function BrandSlider() {
    return (
        <div className="brand-wrapper mt-5">
            <h5 className="text-secondary mb-5 text-lg-start text-center">Trusted by industry leaders worldwide</h5>
            <motion.div
                className="brand-track"
                animate={{ x: [0, "-50%"] }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...brands, ...brands].map((logo, i) => (
                    <div key={i} className="brand-item">
                        <img src={logo} alt="brand" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
