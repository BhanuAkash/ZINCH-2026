import { Link } from "react-router-dom";
import Logo from '../assets/logos/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-4">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="img-fluid"
                        style={{ width: "140px", height: "auto" }}
                    />

                </Link>

            </div>
        </nav>
    );
}
