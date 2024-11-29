import { useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

// Validation schema
const schema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
}).required();

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const { loginUser } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (data) => {
        try {
            await loginUser(data?.email, data?.password);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successful!!",
                showConfirmButton: false,
                timer: 1500
            });
            reset();
            navigate('/');
        }
        catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className="font-sans relative">
            {/* Banner Section */}
            <div className="h-[240px]">
                <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Login Form */}
            <div className="relative -mt-40 m-4">
                <form
                    className="bg-white max-w-xl w-full mx-auto shadow-lg p-8 rounded-2xl"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h3 className="text-gray-800 text-3xl font-bold text-center mb-12">Login</h3>

                    {/* Email Input */}
                    <div className="mt-8">
                        <label className="text-gray-800 block mb-2">Email</label>
                        <div className="relative">
                            <input
                                {...register('email')}
                                type="text"
                                placeholder="Enter email"
                                className="w-full bg-transparent text-lg text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                            />
                            <FaEnvelope className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="mt-8">
                        <label className="text-gray-800 block mb-2">Password</label>
                        <div className="relative">
                            <input
                                {...register('password')}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter password"
                                className="w-full bg-transparent text-lg text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                            />
                            {showPassword ? (
                                <FaEyeSlash
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
                                    onClick={() => setShowPassword(false)}
                                />
                            ) : (
                                <FaEye
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
                                    onClick={() => setShowPassword(true)}
                                />
                            )}
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="w-full h-12 rounded-md bg-blue-500 text-white font-semibold transition hover:bg-blue-600"
                        >
                            Login
                        </button>
                        <p className="text-gray-800 mt-4 text-center">
                            Don't have an account?
                            <Link
                                to="/register"
                                className="text-blue-500 font-semibold hover:underline ml-1"
                            >
                                Register here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
