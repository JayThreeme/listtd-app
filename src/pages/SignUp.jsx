import { logopng } from "../assets";
import FormSignUp from "./components/FormSignUp";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { signInWithGoogle } from "../firebaseConfig/auth";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setLoading(true); // Show loading spinner
    try {
      const loggedInUser = await signInWithGoogle();
      setUser(loggedInUser);
      console.log("asdasd" + user);
      navigate("/user"); // Redirect if login is successful
    } catch (error) {
      console.error("Login failed:", error.message);
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        {/* Logo and Header */}
        <div className="text-center mb-5">
          <img src={logopng} alt="logo" className="mx-auto w-36" />
        </div>

        <FormSignUp />

        <div className="flex flex-col gap-3">
          <Button
            icon={<GoogleOutlined />}
            className="flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
            size="large"
            loading={loading} // Show spinner during login
            onClick={handleGoogleSignIn}
          >
            Signup with Google
          </Button>
          <div className="border-t border-gray-300 my-6"></div>
        </div>

        <div className="text-center mb-5">
          <p className="text-gray-500 my-6">
            Already have account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
