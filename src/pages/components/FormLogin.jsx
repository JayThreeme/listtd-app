import { Input, Button, Checkbox, Form } from "antd";

const FormLogin = () => {
  // Form submission handlers
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
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
    </>
  );
};

export default FormLogin;
