import { useEffect, useState } from "react";

const TopEarners = () => {
    const [earners, setEarners] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=6")
            .then((response) => response.json())
            .then((data) => {
                const users = data.results;
                const bangladeshiUsers = users.map((user) => ({
                    name: `${user.name.first} ${user.name.last}`,
                    picture: user.picture.large,
                    coins: Math.floor(Math.random() * 5000) + 1000,
                    tasksCompleted: Math.floor(Math.random() * 100) + 20,
                }));
                setEarners(bangladeshiUsers);
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="py-16 ">
            <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
                Top Earners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-24">
                {earners.map((earner, index) => (
                    <div
                        key={index}
                        className="relative my-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        {/* Profile Picture */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
                            <img
                                src={earner.picture}
                                alt={earner.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-16 text-center">
                            <h3 className="text-xl font-bold text-gray-800">
                                {earner.name}
                            </h3>
                            <p className="text-indigo-500 font-semibold text-lg mt-1">
                                {earner.coins} Coins
                            </p>
                        </div>
                        {/* Divider */}
                        <div className="border-t border-gray-200 my-4"></div>
                        {/* Task Information */}
                        <p className="text-center text-gray-600 text-sm">
                            Tasks Completed:{" "}
                            <span className="font-semibold text-gray-800">
                                {earner.tasksCompleted}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopEarners;
