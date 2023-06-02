import { Col, Input, Row } from 'antd';

import couple from '../../images/join.png';
import bot from '../../images/joinBot.png';

const EmailSec = () => {
  return (
    <Row style={{ padding: '80px 0' }}>
      <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 30 }} className="title">
          Join us in Igniting the Flames of long lasting relationships
        </h1>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 20, offset: 2 }}>
            <p>
              Our cutting-edge technology and expert guidance are designed to
              inspire and empower you to build meaningful relationships and
              discover new paths to personal growth. Join us in our quest to
              revolutionize the way we navigate relationships, and unlock the
              full potential of your love life.
            </p>
          </Col>
        </Row>
        <Row gutter={[10, 30]}>
          <Col
            xs={{ span: 12, offset: 0, order: 1 }}
            lg={{ span: 6, offset: 0, order: 1 }}
          >
            <img style={{ width: '100%', maxWidth: 400 }} src={bot} />
          </Col>
          <Col
            xs={{ span: 24, offset: 0, order: 3 }}
            lg={{ span: 12, offset: 0, order: 2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Input className="emailInput" placeholder="Email..." type="email" />
            <button
              style={{ width: '80%', padding: '15px 30px' }}
              className="normalBtn"
            >
              SIGN UP FOR FREE TODAY!
            </button>
          </Col>
          <Col
            xs={{ span: 12, offset: 0, order: 2 }}
            lg={{ span: 6, offset: 0, order: 3 }}
          >
            <img style={{ width: '100%', maxWidth: 400 }} src={couple} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EmailSec;
