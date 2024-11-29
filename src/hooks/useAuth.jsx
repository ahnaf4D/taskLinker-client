import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;


// const authInfo = {
//     createUser,
//     loginUser,
//     logOutUser,
//     googleLogin,
//     user,
//     loading,
// };