import { Button, Card, Row, Col, Typography } from "antd";

import About from "./About"; // Make sure this import is correct

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-20 text-white"
        style={{ backgroundImage: "url('path-to-your-image.jpg')" }}
      >
        <div className="max-w-screen-xl mx-auto text-center">
          <Title level={1} className="text-4xl font-bold mb-4">
            Organize Your Job Applications in One Place
          </Title>
          <Paragraph className="text-xl mb-8">
            Track, manage, and follow up on all your job applications. Build
            your professional resume with ease and enhance your job search
            experience.
          </Paragraph>
          <Button type="primary" size="large" className="mr-4">
            Get Started
          </Button>
          <Button
            size="large"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <Title level={2} className="text-3xl font-semibold mb-10">
            Key Features
          </Title>
          <Row gutter={32}>
            <Col xs={24} sm={12} md={8}>
              <Card
                title="Job Application Tracker"
                bordered={false}
                className="shadow-lg hover:shadow-2xl transition-all"
                cover={
                  <img src="path-to-job-tracker-image.jpg" alt="Job Tracker" />
                }
              >
                <p>
                  Keep all your job applications in one place. View the status
                  of each application, track deadlines, and set reminders.
                </p>
                <Button type="primary" block>
                  Start Tracking
                </Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                title="Resume Builder"
                bordered={false}
                className="shadow-lg hover:shadow-2xl transition-all"
                cover={
                  <img
                    src="path-to-resume-builder-image.jpg"
                    alt="Resume Builder"
                  />
                }
              >
                <p>
                  Create a personalized, professional resume with ease. Choose
                  templates, fill in your details, and export your resume with a
                  click.
                </p>
                <Button type="primary" block>
                  Build Resume
                </Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                title="Job Alerts"
                bordered={false}
                className="shadow-lg hover:shadow-2xl transition-all"
                cover={
                  <img src="path-to-job-alerts-image.jpg" alt="Job Alerts" />
                }
              >
                <p>
                  Get notified about new job listings based on your preferences.
                  Set up alerts for your favorite positions and industries.
                </p>
                <Button type="primary" block>
                  Set Alerts
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-12 text-center">
        <Title level={2} className="text-3xl font-semibold mb-4">
          Take Control of Your Job Search Today!
        </Title>
        <Paragraph className="mb-8">
          Sign up now to start tracking your job applications, building your
          resume, and receiving job alerts.
        </Paragraph>
        <Button type="primary" size="large" href="/signup">
          Sign Up Now
        </Button>
      </section>
    </div>
  );
};

export default Home;
