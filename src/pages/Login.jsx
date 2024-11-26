import { Input, Button, Checkbox, Form } from "antd";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import { logopng } from "../assets";

// import { logosvg } from "../assets";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        {/* Logo and Header */}
        <div className="text-center mb-6">
          <img src={logopng} alt="logo" className="mx-auto w-36" />
          <p className="text-gray-500 mt-2">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Get started free
            </a>
          </p>
        </div>

        {/* Login Form */}
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              size="large"
              visibilityToggle
            />
          </Form.Item>

          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot my password
            </a>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 rounded-lg"
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            icon={<GoogleOutlined />}
            className="flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
            size="large"
          >
            Sign in with Google
          </Button>
          <Button
            className="flex items-center justify-center bg-black text-white hover:bg-gray-800 rounded-lg"
            size="large"
          >
            <AppleOutlined />
            <span className="ml-2">Sign in with Apple</span>
          </Button>
          <Button
            className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg"
            size="large"
          >
            Sign in with SSO
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
