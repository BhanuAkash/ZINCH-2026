import { motion } from "framer-motion";
import "./BrandSlider.css";

import Google from "../assets/logos/brands/slider-1.png";
import Slack from "../assets/logos/brands/slider-2.png";
import Heroku from "../assets/logos/brands/slider-3.png";
import Agworld from "../assets/logos/brands/slider-4.png";
import Riotinto from "../assets/logos/brands/slider-5.png";

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
