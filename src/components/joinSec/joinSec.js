import { Col, Row } from 'antd';
import styled from 'styled-components';

import bot from '../../images/joinBot.png';

const BotImg = styled.img(
  ({ theme }) => `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  max-width: 100px;
  transform: translate(-75%, -25%);
  display: none;
  ${theme.breakpoints.sm} {
    display: block;
  }
`
);

const JoinSec = () => {
  return (
    <Row style={{ marginBlock: 50 }}>
      <Col
        xs={{ span: 18, offset: 3 }}
        lg={{ span: 10, offset: 7 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 30,
          padding: '30px 0',
        }}
      >
        <h1 style={{ textAlign: 'center' }} className="title">
          Join the Relationship Recharge Community Today!
        </h1>
        <p>
          Join the Relationship Recharge community today and take the first step
          towards building a stronger, healthier relationship with your partner.
          Our platform is designed to provide you with the support, guidance,
          and resources you need to overcome your challenges and build a
          lifetime of love and happiness together.
        </p>
        <div style={{ position: 'relative' }}>
          <button className="normalBtn">GET STARTED FOR FREE!</button>
          <BotImg src={bot} />
        </div>
      </Col>
    </Row>
  );
};

export default JoinSec;
