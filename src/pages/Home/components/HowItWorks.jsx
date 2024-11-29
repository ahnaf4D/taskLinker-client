import { FaUserPlus, FaCheckCircle, FaGift } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaUserPlus size={30} className="text-white" />,
            title: "Register",
            description: "Sign up quickly to get started.",
            color: "bg-gradient-to-r from-indigo-500 to-blue-500",
        },
        {
            icon: <FaCheckCircle size={30} className="text-white" />,
            title: "Complete Tasks",
            description: "Choose tasks and complete them effortlessly.",
            color: "bg-gradient-to-r from-green-500 to-teal-500",
        },
        {
            icon: <FaGift size={30} className="text-white" />,
            title: "Earn Rewards",
            description: "Get rewarded with coins for every task you complete.",
            color: "bg-gradient-to-r from-red-500 to-pink-500",
        },
    ];


    return (
        <div className="py-16 bg-gray-50">
            <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10">
                How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-32">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center ${step.color} shadow-lg`}>
                            {step.icon}
                        </div>
                        <div className="mt-8 text-center">
                            <span className="inline-block mb-4 text-gray-400 text-lg font-semibold">
                                Step {index + 1}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-700 mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
