import { FaCoins, FaTasks, FaLock } from "react-icons/fa";

const Feature = () => {
    const features = [
        {
            icon: <FaCoins size={30} />,
            title: "Earn Coins by Completing Tasks",
            description: "Complete simple tasks and earn coins as rewards.",
            color: "from-yellow-400 to-yellow-600",
        },
        {
            icon: <FaTasks size={30} />,
            title: "Create and Manage Tasks",
            description: "Easily create, assign, and manage tasks efficiently.",
            color: "from-blue-400 to-blue-600",
        },
        {
            icon: <FaLock size={30} />,
            title: "Secure Payments",
            description: "Guaranteed secure payment system for all transactions.",
            color: "from-green-400 to-green-600",
        },
    ];

    return (
        <div className="py-16 ">
            <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
                Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 lg:px-24">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        {/* Icon Container */}
                        <div
                            className={`absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${feature.color} shadow-lg`}
                        >
                            {feature.icon}
                        </div>
                        <div className="mt-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feature;
