import { useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash, FaFileImage, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { uploadingImageToCloudinary } from '../../utils/cloudinary';
import Swal from 'sweetalert2'
const schema = yup.object({
    name: yup.string().required('Full Name is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    role: yup.string().required('Role is required'),
    user_avatar: yup.mixed().required('Profile picture is required'),
}).required();

const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const { createUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (data) => {
        console.log('Form Data:', data);
        const { email, name, role, user_avatar, password } = data;
        const avatarFile = user_avatar[0];
        const image = await uploadingImageToCloudinary(avatarFile);
        const userData = {
            name,
            email,
            role,
            avatar: image,
        }
        try {
            await createUser(email, password);
            const res = await axiosPublic.post(`/users`, userData);
            if (res.data.success) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Account Created Successfully!!",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
                navigate('/');
            }
        } catch (error) {
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
        <div className="font-[sans-serif] relative">
            <div className="h-[240px] font-[sans-serif]">
                <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Banner Image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative -mt-40 m-4 text">
                <form
                    className="bg-white max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8 rounded-2xl"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mb-12">
                        <h3 className="text-gray-800 text-3xl font-bold text-center">Register</h3>
                    </div>

                    {/* Full Name */}
                    <div>
                        <label className="text-gray-800 block mb-2">Full Name</label>
                        <div className="relative flex items-center">
                            <input
                                {...register('name')}
                                type="text"
                                className="w-full bg-transparent text-lg text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                                placeholder="Enter name"
                            />
                            <FaUser className="w-[18px] h-[18px] absolute right-2" />
                        </div>
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="mt-8">
                        <label className="text-gray-800 block mb-2">Email</label>
                        <div className="relative flex items-center">
                            <input
                                {...register('email')}
                                type="text"
                                className="w-full bg-transparent text-lg text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                                placeholder="Enter email"
                            />
                            <FaEnvelope className="w-[18px] h-[18px] absolute right-2" />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="mt-8">
                        <label className="text-gray-800 block mb-2">Password</label>
                        <div className="relative flex items-center">
                            <input
                                {...register('password')}
                                type={showPassword ? 'text' : 'password'}
                                className="w-full bg-transparent text-lg text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                                placeholder="Enter password"
                            />
                            {showPassword ? (
                                <FaEyeSlash
                                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                                    onClick={() => setShowPassword(false)}
                                />
                            ) : (
                                <FaEye
                                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                                    onClick={() => setShowPassword(true)}
                                />
                            )}
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {/* Image Upload */}
                    <div className="mt-8">
                        <label className="text-gray-800 block mb-2">Upload your profile picture</label>
                        <div className="relative flex items-center">
                            <input
                                {...register('user_avatar')}
                                type="file"
                                className="w-full bg-transparent text-lg text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                            />
                            <FaFileImage className="w-[18px] h-[18px] absolute right-2" />
                        </div>
                        {errors.user_avatar && (
                            <p className="text-red-500 text-sm">{errors.user_avatar.message}</p>
                        )}
                    </div>

                    {/* Role Selection */}
                    <div className="mt-8">
                        <label className="text-gray-800 block mb-2">Select your role</label>
                        <div className="relative flex items-center">
                            <select
                                {...register('role')}
                                className="w-full bg-transparent text-lg text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                            >
                                <option value="" disabled>Select your role</option>
                                <option value="worker">Worker</option>
                                <option value="task_creator">Task Creator</option>
                            </select>
                        </div>
                        {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                    </div>



                    {/* Submit Button */}
                    <div className="mt-8">
                        <div className="flex items-center justify-center">
                            <button className="group relative h-12 overflow-hidden rounded-md bg-blue-500 px-6 text-neutral-50 transition">
                                <span>Create Account</span>
                                <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
                            </button>
                        </div>
                        <p className="text-gray-800 mt-8 text-center">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-blue-500 font-semibold hover:underline ml-1"
                            >
                                Login here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
