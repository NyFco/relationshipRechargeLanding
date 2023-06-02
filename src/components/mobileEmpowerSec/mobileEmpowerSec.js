import { Col, Row } from 'antd';

import msg from '../../images/messages.png';

const MobileEmpowerSec = () => {
  return (
    <Row>
      <Col xs={{ span: 20, offset: 2 }} lg={{ span: 0, offset: 0 }}>
        <div style={{ marginBlock: 80 }}>
          <h2>
            Empowering Individuals and Building Healthier Communities, One
            Relationship at a Time
          </h2>
          <p>
            We are dedicated to refining and expanding our offerings, always
            aiming to remain at the forefront of relationship support and
            personal development. Through our unwavering commitment to our
            vision, we aim to empower individuals and couples to build stronger,
            healthier connections and to create a world where love is nurtured
            and celebrated in all its forms.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img style={{ maxWidth: 350, width: '100%' }} src={msg} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MobileEmpowerSec;
