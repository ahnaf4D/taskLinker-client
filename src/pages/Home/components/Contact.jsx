import { useState } from 'react';
import ContactImage from '../../../assets/contact.jpg'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to API)
        console.log('Form Submitted:', formData);
    };

    return (
        <div className=" flex justify-between items-center w-full p-4 my-4">
            <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full ">
                {/* Form Section */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
                    <p className="text-center text-gray-600 mb-6">We'd love to hear from you. Please fill out the form below.</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-2 px-4 py-2 "
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-2 px-4 py-2 "
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-2 px-4 py-2 "
                                placeholder="Write your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Image Section */}
                <div className="hidden md:block w-1/2 bg-indigo-500 text-white flex items-center justify-center">
                    <img
                        src={ContactImage} // Replace with your image URL
                        alt="Contact"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
