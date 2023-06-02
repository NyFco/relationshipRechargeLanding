import { Col, Row } from 'antd';

import why from '../../images/why.png';

const WhySec = () => {
  return (
    <Row
      style={{
        padding: '50px 0',
      }}
    >
      <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h1 className="title">
            Why Choose Us for Your Journey Towards Relationship Success?
          </h1>
        </div>
        <Row>
          <Col
            xs={{ span: 24, offset: 0, order: 2 }}
            lg={{ span: 12, offset: 0, order: 1 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img style={{ width: '100%', maxWidth: 400 }} src={why} />
          </Col>
          <Col
            xs={{ span: 24, offset: 0, order: 1 }}
            lg={{ span: 12, offset: 0, order: 2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1 style={{ fontWeight: 700 }}>
              Personalized Relationship Coaching
            </h1>
            <p>
              Our expert relationship coaches guide you through customized
              coaching sessions tailored to your specific needs and relationship
              history. Our coaches have years of experience and are trained to
              work with you on a personalized level, addressing your unique
              challenges and tailoring the coaching sessions to help you achieve
              your relationship goals.
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default WhySec;
