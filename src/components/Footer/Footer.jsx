import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:items-start">
                    {/* Logo and About Section */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <NavLink to="/" className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
                            <img src={Logo} alt="Logo" className="h-10 w-10" />
                            <span>Task<span className="text-yellow-400 text-3xl">L</span>inker</span>
                        </NavLink>
                        <p className="text-sm text-gray-400 mt-4">
                            Your ultimate task management solution. Simplify, organize, and
                            achieve your goals effortlessly with TaskLinker.
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6">
                        <a
                            href="https://linkedin.com/in/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:scale-125 transition-transform duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={28} />
                        </a>
                        <a
                            href="https://facebook.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:scale-125 transition-transform duration-300"
                            aria-label="Facebook"
                        >
                            <FaFacebook size={28} />
                        </a>
                        <a
                            href="https://github.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:scale-125 transition-transform duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub size={28} />
                        </a>
                        <a
                            href="mailto:your-email@example.com"
                            className="text-red-500 hover:scale-125 transition-transform duration-300"
                            aria-label="Email"
                        >
                            <FaEnvelope size={28} />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-10 border-t border-gray-700"></div>

                {/* Footer Navigation */}
                <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
                    <ul className="flex space-x-6 text-sm text-gray-400">
                        <li>
                            <a href="/about" className="hover:text-yellow-400 transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/features" className="hover:text-yellow-400 transition">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-yellow-400 transition">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="hover:text-yellow-400 transition">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} TaskLinker. All rights reserved.</p>
                    <p>
                        Built with <span className="text-red-500">♥</span> by{" "}
                        <a
                            href="https://github.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            Your Name
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
