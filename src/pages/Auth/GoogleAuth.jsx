import Swal from 'sweetalert2';
import GoogleLogo from '../../assets/google.png';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const GoogleAuth = ({ page }) => {
    const { googleLogin, user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            // Perform Google login
            await googleLogin();

            // If the page is 'login', just navigate after login
            if (page === 'login') {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Signed in with Google',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/');
                return;
            }
            const userData = {
                name: user?.displayName,
                email: user?.email,
                role: "worker",
                coin: 10,
                avatar: {
                    secure_url: user.photoURL || "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
                },
            };
            // Send data to server
            const res = await axiosPublic.post('/users', userData);
            if (res.data?.success) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Signed up with Google',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/');
                location.reload();
            } else {
                throw new Error('Failed to save user data on the server.');
            }
        } catch (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: error.message || 'Failed to login or signup with Google',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div className="flex justify-center mt-6">
            <button
                onClick={handleGoogleLogin}
                className="flex items-center px-6 py-3 text-black bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 focus:outline-none rounded-lg shadow-md transition-all duration-300"
            >
                <img src={GoogleLogo} className="h-6 w-6 mr-2" alt="Google Logo" />
                <span className="text-lg font-medium">Google Login</span>
            </button>
        </div>
    );
};

export default GoogleAuth;
