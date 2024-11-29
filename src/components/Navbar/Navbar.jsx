import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaPlayCircle, FaUserCircle } from "react-icons/fa";
import coinImage from "../../assets/dollar.png";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useSingleUser from "../../hooks/useSingleUser";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logOutUser } = useAuth();
    const userData = useSingleUser();
    const handleLogoutUser = async () => {
        try {
            await logOutUser();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Logout Successfully!",
                showConfirmButton: false,
                timer: 1500
            });

        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    const handleToggle = () => setMenuOpen(!menuOpen);

    const navItems = [
        { id: 1, path: "/", alt: "Home" },
        { id: 2, path: "/blogs", alt: "Blogs" },
        { id: 2, path: "/contacts", alt: "Contacts" },
        ...(user ? [{ id: 3, path: "/dashboard", alt: "Dashboard" }] : []),
    ];

    const linkStyle = (isActive) =>
        isActive
            ? "mx-2 text-lg font-semibold text-white bg-gray-900 px-4 py-2 rounded-md shadow-lg transition-transform transform hover:scale-110"
            : "text-lg font-semibold text-gray-300 hover:text-white px-4 py-2 rounded-md shadow-md transition-transform transform hover:scale-105";

    return (
        <header className="bg-gray-900 text-white w-full z-50 shadow-md">
            <div className="max-w-full  mx-auto flex justify-between items-center px-2 py-4 sm:px-4">
                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
                    <img src={Logo} alt="Logo" className="h-10 w-10 transition-transform transform hover:rotate-6" />
                    <span>
                        Task<span className="text-yellow-400 text-3xl">L</span>inker
                    </span>
                </NavLink>

                {/* Toggle Button for Mobile */}
                <button
                    onClick={handleToggle}
                    className="lg:hidden flex items-center justify-center w-12 h-12 border rounded-full bg-gray-800 text-white shadow-md hover:bg-gray-700 transition-transform transform hover:scale-110"
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

                {/* For all users */}
                {user && (
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="flex items-center gap-2 px-5 py-2 bg-green-800 text-white font-medium rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                            <FaUserCircle className="text-xl" />
                            Profile
                        </button>
                        <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md shadow-md font-bold">
                            <span>{userData?.user?.coin}</span>
                            <img src={coinImage} alt="coins" className="h-5 w-5" />
                        </div>
                        <button className="px-5 py-2 bg-red-800 text-white font-medium rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-transform" onClick={handleLogoutUser}>
                            Logout
                        </button>
                    </div>
                )}
                {!user && (
                    <div className="hidden lg:flex items-center justify-end ">
                        <Link to="/login">
                            <button className="mx-2 bg-red-400 font-semibold px-4 py-2 rounded-sm hover:scale-105 transition-transform">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="bg-green-400 text-black font-semibold px-4 py-2 rounded-sm hover:scale-105 transition-transform">
                                Register
                            </button>
                        </Link>
                        <a href="https://youtu.be/xKKPFoHkib0" target="_blank" rel="noopener noreferrer">
                            <button className="mx-2 flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
                                <FaPlayCircle className="text-2xl animate-pulse" />
                                Watch Demo
                            </button>
                        </a>

                    </div>
                )}

            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-gray-900 text-white z-50 transform ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    } transition-all duration-500`}
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
                        className="text-white text-2xl transform hover:rotate-180 transition-transform"
                        aria-label="Close Menu"
                    >
                        <FiX />
                    </button>
                </div>
                {user && <div className="flex items-center justify-center"><button className="my-4 flex items-center justify-center gap-2 px-5 py-2 bg-green-800 text-white font-medium rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                    <FaUserCircle className="text-xl" />
                    Profile
                </button>
                    <div className="mx-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md shadow-md font-bold">
                        <span>{userData?.user?.coin}</span>
                        <img src={coinImage} alt="coins" className="h-5 w-5" />
                    </div>
                </div>}

                {/* Navigation Links */}
                <nav className="flex flex-col items-center mt-4 space-y-6">
                    {navItems.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className={({ isActive }) =>
                                `text-2xl font-semibold ${isActive ? "text-blue-400" : "hover:text-blue-400"
                                } transition-transform transform hover:scale-110`
                            }
                            onClick={handleToggle}
                            style={{ animationDelay: `${index * 0.1}s`, animationName: menuOpen ? "fadeIn" : "none" }}
                        >
                            {item.alt}
                        </NavLink>
                    ))}
                </nav>
                {user && <div className="flex justify-center items-center my-4"><button className="px-5 py-2 bg-red-800 text-white font-medium rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-transform" onClick={handleLogoutUser}>
                    Logout
                </button></div>}
                {/* Footer Section */}
                <div className="flex flex-col items-center mt-12 space-y-6">
                    {!user && (
                        <div className="flex space-x-4">
                            <Link to="/login">
                                <button className="bg-red-400 font-semibold px-4 py-2 rounded-sm hover:scale-105 transition-transform">
                                    Login
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="bg-green-400 text-black font-semibold px-4 py-2 rounded-sm hover:scale-105 transition-transform">
                                    Register
                                </button>
                            </Link>

                        </div>
                    )}
                    {!user && <a href="https://youtu.be/xKKPFoHkib0" target="_blank" rel="noopener noreferrer">
                        <button className="mx-2 flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
                            <FaPlayCircle className="text-2xl animate-pulse" />
                            Watch Demo
                        </button>
                    </a>}

                </div>
            </div>
        </header>
    );
};

export default Navbar;
