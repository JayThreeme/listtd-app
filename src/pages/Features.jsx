import { Card, Col, Row, Button } from "antd";

const Features = () => {
  return (
    <section id="features" className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Our Features
        </h2>

        {/* Features List */}
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card
              title="Job Application Tracker"
              bordered={false}
              className="shadow-md"
              cover={
                <img
                  alt="application tracker"
                  src="https://via.placeholder.com/300"
                />
              }
            >
              <p>
                Easily track the status of your job applications. Know exactly
                where you stand with each application.
              </p>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Resume Builder"
              bordered={false}
              className="shadow-md"
              cover={
                <img
                  alt="resume builder"
                  src="https://via.placeholder.com/300"
                />
              }
            >
              <p>
                Generate a professional resume with templates that are easy to
                customize and tailor to any job.
              </p>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Deadline Reminders"
              bordered={false}
              className="shadow-md"
              cover={
                <img
                  alt="deadline reminders"
                  src="https://via.placeholder.com/300"
                />
              }
            >
              <p>
                Get reminders for your job application deadlines, ensuring you
                never miss an important date.
              </p>
            </Card>
          </Col>
        </Row>

        {/* More Features */}
        <Row gutter={[16, 16]} className="mt-12">
          <Col span={8}>
            <Card
              title="Job Search"
              bordered={false}
              className="shadow-md"
              cover={
                <img alt="job search" src="https://via.placeholder.com/300" />
              }
            >
              <p>
                Find job listings from multiple platforms and apply directly
                through your Linktd account.
              </p>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Application History"
              bordered={false}
              className="shadow-md"
              cover={
                <img
                  alt="application history"
                  src="https://via.placeholder.com/300"
                />
              }
            >
              <p>
                Keep track of your application history and see how far
                you&apos;ve come in your job search journey.
              </p>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Customizable Templates"
              bordered={false}
              className="shadow-md"
              cover={
                <img
                  alt="custom templates"
                  src="https://via.placeholder.com/300"
                />
              }
            >
              <p>
                Use customizable templates for resumes and cover letters that
                fit your personal style.
              </p>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button
            type="primary"
            size="large"
            href="/login"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Start Using Linktd
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
