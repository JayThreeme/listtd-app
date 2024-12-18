import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { logopng } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  signInWithGoogle,
  getGoogleRedirectResult,
} from "../firebaseConfig/auth";
import FormLogin from "./components/FormLogin";

const Login = () => {
  const [user, setUser] = useState(null); // User state
  const [loading, setLoading] = useState(false); // Loading state for Google login
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch Google redirect result on component mount
  useEffect(() => {
    const fetchRedirectResult = async () => {
      try {
        const loggedInUser = await getGoogleRedirectResult();
        if (loggedInUser) {
          setUser(loggedInUser);
          navigate("/user");
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error in redirect result:", error.message);
      }
    };

    fetchRedirectResult();
  }, [navigate]);

  // Handle Google login
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

        <FormLogin />

        <div className="flex flex-col gap-3">
          <Button
            icon={<GoogleOutlined />}
            className="flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
            size="large"
            loading={loading} // Show spinner during login
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </Button>
          <div className="border-t border-gray-300 my-6"></div>
        </div>

        <div className="text-center mb-5">
          <p className="text-gray-500 my-6">
            Don’t have an account? <Link to="/signup">SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
