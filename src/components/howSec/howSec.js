import { Col, Row } from 'antd';

import how from '../../images/how.png';

const HowSec = () => {
  return (
    <Row
      style={{
        background:
          'linear-gradient(180deg, #E8E9EB 81.25%, rgba(239, 241, 243, 0) 100%)',
        padding: '50px 0',
      }}
    >
      <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h1 className="title">How It Works?</h1>
          <h3>5 Simple Steps to Strengthen Your Relationship</h3>
        </div>
        <Row>
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 12, offset: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1 style={{ fontWeight: 700 }}>
              Create Your Profile and Kick-Start Your Relationship Journey
            </h1>
            <p>
              Sign up and create your profile on Relationship Recharge,
              providing information about your relationship history and current
              challenges.
            </p>
            <p>
              Creating your profile is easy and quick, and allows Relationship
              Recharge to personalize your experience and provide guidance that
              is tailored to your specific needs.
            </p>
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 12, offset: 0 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img style={{ width: '100%', maxWidth: 350 }} src={how} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HowSec;
