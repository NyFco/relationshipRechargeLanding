import { Col, Row } from 'antd';

import msg from '../../images/messages.png';
import vision from '../../images/vision.png';

const VisionSec = () => {
  return (
    <Row
      style={{
        padding: '50px 0',
        background:
          'linear-gradient(180deg, #EFF1F3 26.04%, rgba(255, 255, 255, 0) 100%)',
      }}
    >
      <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h1 className="title">Our Vision</h1>
          <h3>Empowering Relationships for a World of Love and Connection</h3>
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
              Love, Understanding, and Empathy are the Cornerstones of
              Successful Partnerships.
            </h1>
            <p>
              At Relationship Recharge, our vision is to create a world where
              every relationship has the opportunity to thrive, flourish, and
              overcome challenges. We believe that love, understanding, and
              empathy are the cornerstones of a successful partnership and that
              every couple deserves access to the tools and support needed for
              growth and personal development.
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
            <img style={{ width: '100%', maxWidth: 350 }} src={vision} />
          </Col>
        </Row>
        <h1 style={{ fontWeight: 700, textAlign: 'center', marginTop: 50 }}>
          Revolutionizing Relationship Navigation through Cutting-Edge AI
          Technology
        </h1>
        <p>
          Our innovative platform combines cutting-edge AI technology with the
          expertise of relationship professionals and therapists, ensuring that
          couples receive personalized guidance and resources tailored to their
          unique circumstances. As we continue to grow, we strive to
          revolutionize the way couples navigate their relationships, fostering
          a global community that values love, connection, and personal growth
          above all else.
        </p>
      </Col>
      <Col xs={{ span: 0, offset: 0 }} lg={{ span: 16, offset: 4 }}>
        <Row style={{ marginTop: 50 }}>
          <Col
            span={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img style={{ width: '100%', maxWidth: 350 }} src={msg} />
          </Col>
          <Col span={12}>
            <h1 style={{ fontWeight: 700, textAlign: 'right' }}>
              Empowering Individuals and Building Healthier Communities, One
              Relationship at a Time
            </h1>
            <p>
              We are dedicated to refining and expanding our offerings, always
              aiming to remain at the forefront of relationship support and
              personal development. Through our unwavering commitment to our
              vision, we aim to empower individuals and couples to build
              stronger, healthier connections and to create a world where love
              is nurtured and celebrated in all its forms.
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default VisionSec;
