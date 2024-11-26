import { Card, Button, Col, Row } from "antd";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">
          About Us
        </h2>

        {/* Mission Statement */}
        <div className="mb-12 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            At Linktd, our goal is to simplify your job application process and
            make it easier to track, organize, and manage your job applications.
            We help you build your resume and stay on top of opportunities—all
            in one place!
          </p>
        </div>

        {/* Features Cards */}
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card
              title="Track Your Applications"
              bordered={false}
              className="shadow-md"
              cover={
                <img
                  alt="track applications"
                  src="https://via.placeholder.com/300"
                />
              }
            >
              <p>
                Keep all your job applications organized in one place. Track
                their status, deadlines, and more.
              </p>
            </Card>
          </Col>

          <Col span={12}>
            <Card
              title="Generate Resumes"
              bordered={false}
              className="shadow-md"
              cover={
                <img
                  alt="generate resumes"
                  src="https://via.placeholder.com/300"
                />
              }
            >
              <p>
                Create and manage multiple versions of your resume with ease.
                Tailor your resume for each job application.
              </p>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button
            type="primary"
            size="large"
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
