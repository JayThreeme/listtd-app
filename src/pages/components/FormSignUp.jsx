import { Input, Button, Form } from "antd";

const FormSignUp = () => {
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

        <Form.Item
          label="Confirm Password"
          name="confirmpassword"
          rules={[{ required: true, message: "Confirm your password!" }]}
        >
          <Input.Password
            placeholder="Confirm password"
            size="large"
            visibilityToggle
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 rounded-lg"
            size="large"
          >
            SignUp
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormSignUp;
