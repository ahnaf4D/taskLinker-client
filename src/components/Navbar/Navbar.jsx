import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import coinImage from '../../assets/dollar.png';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const user = false;

    const handleToggle = () => setMenuOpen(!menuOpen);

    const navItems = [
        { id: 1, path: "/", alt: "Home" },
        { id: 2, path: "/blogs", alt: "Blogs" },
        ...(user ? [{ id: 3, path: "/dashboard", alt: "Dashboard" }] : []),
    ];

    const linkStyle = (isActive) =>
        isActive
            ? "mx-2 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-md shadow-lg transition"
            : "text-lg font-semibold text-gray-300 hover:text-white hover:bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-md shadow-md transition";

    return (
        <header className="bg-gradient-to-b from-gray-900 to-gray-800 text-white  w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4 sm:px-10">
                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
                    <img src={Logo} alt="Logo" className="h-10 w-10" />
                    <span>Task<span className="text-yellow-400 text-3xl">L</span>inker</span>
                </NavLink>

                {/* Toggle Button for Mobile */}
                <button
                    onClick={handleToggle}
                    className="lg:hidden flex items-center justify-center w-12 h-12 border rounded-full bg-gray-800 text-white shadow-md hover:bg-gray-700 transition"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex lg:items-center">
                    {navItems.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className={({ isActive }) => linkStyle(isActive)}
                        >
                            {item.alt}
                        </NavLink>
                    ))}
                </nav>
                {user && <><div className="hidden lg:flex items-center space-x-4">
                    <button className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-md shadow-md hover:opacity-90 transition">
                        <FaUserCircle className="text-xl" />
                        Profile
                    </button>
                    <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md shadow-md font-bold">
                        <span>0</span>
                        <img src={coinImage} alt="coins" className="h-5 w-5" />
                    </div>
                    <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-md shadow-md hover:opacity-90 transition">
                        Logout
                    </button>
                </div></>}
                {!user && <div className="hidden lg:flex">
                    <Link to='/login'>
                        <button className="mx-2 bg-red-400 font-semibold px-4 py-2 rounded-sm hover:bg-blue-500 hover:transition-all">Login</button>
                    </Link>
                    <Link to='/register'>
                        <button className="bg-green-400 text-black font-semibold px-4 py-2 rounded-sm hover:bg-orange-500 hover:transition-all">Register</button>
                    </Link>

                </div>
                }

            </div>

            <div
                className={`fixed top-0 left-0 w-full h-full bg-gray-900 text-white z-50 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-500 ease-in-out`}
            >
                {/* Header Section */}
                <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
                    <NavLink to="/" className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
                        <img src={Logo} alt="Logo" className="h-10 w-10" />
                        <span>
                            Task<span className="text-yellow-400">L</span>inker
                        </span>
                    </NavLink>
                    <button
                        onClick={handleToggle}
                        className="text-white text-2xl"
                        aria-label="Close Menu"
                    >
                        <FiX />
                    </button>
                </div>

                {/* Profile Button */}
                {user && <div className="flex justify-center mt-6">
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-md shadow-md hover:opacity-90 transition">
                        <FaUserCircle className="text-2xl" />
                        Profile
                    </button>
                </div>}


                {/* Navigation Links */}
                <nav className="flex flex-col items-center mt-10 space-y-6">
                    {navItems.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className={({ isActive }) =>
                                `text-2xl font-semibold ${isActive ? "text-blue-400" : "hover:text-blue-400"
                                }`
                            }
                            onClick={handleToggle}
                        >
                            {item.alt}
                        </NavLink>
                    ))}
                </nav>

                {/* Footer Section */}
                <div className="flex flex-col items-center mt-12 space-y-6">
                    {user && <>
                        {/* Coins Display */}
                        <div className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md shadow-md">
                            <span>0</span>
                            <img src={coinImage} alt="coins" className="h-5 w-5" />
                        </div>

                        {/* Logout Button */}
                        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-md shadow-md hover:opacity-90 transition">
                            Logout
                        </button>
                    </>}


                    {/* Auth Buttons */}
                    <div className="flex space-x-4">
                        <Link to="/login">
                            <button className="bg-red-400 font-semibold px-4 py-2 rounded-sm hover:bg-blue-500 transition-all">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="bg-green-400 text-black font-semibold px-4 py-2 rounded-sm hover:bg-orange-500 transition-all">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Navbar;
