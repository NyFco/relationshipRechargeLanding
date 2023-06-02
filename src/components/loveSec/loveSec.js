/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from 'antd';
import styled from 'styled-components';

import hug from '../../images/hug.png';

const HugImg = styled.img(
  ({ theme }) => `
  width: 100%;
  max-width: 350px;
  margin-bottom: 30px;
  ${theme.breakpoints.lg} {
    margin-bottom: 0px;
  }
`
);

const LoveSec = () => {
  return (
    <Row
      style={{
        background:
          'linear-gradient(180deg, #E5923E 0%, #DF836E 51.39%, #D4573F 100%)',
        paddingBlock: 30,
      }}
    >
      <Col
        xs={{ span: 20, offset: 2, order: 2 }}
        lg={{ span: 6, offset: 6, order: 1 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
        }}
      >
        <h1 style={{ fontWeight: 400 }}>
          Love is not just a feeling, it's an experience. And with every
          conversation we have, every word we exchange, we create a new chapter
          in our story. So let's keep communication open, one message at a time.
        </h1>
      </Col>
      <Col
        xs={{ span: 20, offset: 2, order: 1 }}
        lg={{ span: 6, order: 2 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HugImg src={hug} />
      </Col>
    </Row>
  );
};

export default LoveSec;
