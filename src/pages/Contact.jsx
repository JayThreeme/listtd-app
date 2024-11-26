import { Input, Button, Form, Row, Col } from "antd";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Contact Us
        </h2>

        {/* Contact Form */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl text-gray-700 mb-6">
            We&apos;d love to hear from you!
          </h3>
          <Form
            name="contactForm"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={(values) => console.log("Form Values:", values)}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea rows={6} placeholder="Your message" />
                </Form.Item>
              </Col>
            </Row>

            <div className="text-center">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Our Location
            </h3>
            <p className="text-gray-700">123 Linktd Avenue, City, Country</p>
            <p className="text-gray-700 mt-2">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-700">Email: support@linktd.com</p>
            <p className="text-gray-700 mt-2">Phone: +1 234 567 890</p>
            <div className="mt-4">
              <h4 className="text-lg text-gray-700">Follow Us</h4>
              <div className="flex justify-center gap-4 mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Facebook"
                    src="https://via.placeholder.com/40/3b5998/ffffff?text=F"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Twitter"
                    src="https://via.placeholder.com/40/1DA1F2/ffffff?text=T"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="LinkedIn"
                    src="https://via.placeholder.com/40/0077B5/ffffff?text=L"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
