import { Col, Row } from 'antd';
import styled from 'styled-components';

import bot from '../../images/heartAndBot.png';
import msgs from '../../images/messages.png';
import shape from '../../images/shape1.png';

const Title = styled.h1({
  fontWeight: 700,
  fontSize: '2.5rem',
  margin: '0 0 20px 0',
});

const RedTitle = styled(Title)({
  color: '#CA275A',
});

const StyledRow = styled(Row)(
  {
    paddingBlock: 40,
  },
  ({ theme }) => `
  ${theme.breakpoints.xl} {
    padding-block: 80px;
  }
`
);

const Shape = styled.img(
  ({ theme }) => `
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    ${theme.breakpoints.xl} {
      display: block;
    }
    `
);

const ChatImg = styled.img(
  ({ theme }) => `
    display: none;
    ${theme.breakpoints.xl} {
      display: block;
    }
`
);

const ChatBtn = styled.div(
  ({ theme }) => `
    width: 100%;
    display: flex;
    justify-content: center;
    margin-block: 20px;
    button {
      width: 100%;
    }
    ${theme.breakpoints.xl} {
      display: none;
    }
    ${theme.breakpoints.lg} {
      button {
        width: 80%;
      }
    }
`
);

const BotBtn = styled.button(
  ({ theme }) => `
    display: none;
    ${theme.breakpoints.xl} {
      display: block;
    }
`
);

const BotImg = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  margin: 0 auto;
`;

const Oval = styled.div(
  ({ theme }) => `
    width: 45%;
    ${theme.breakpoints.xl} {
      width: 25%;
    }
`
);

const MainSec = () => {
  return (
    <>
      <StyledRow style={{ position: 'relative' }} className="mainSec">
        <Shape src={shape} style={{ position: 'absolute', top: 0, left: 0 }} />
        <Col xs={{ span: 20, offset: 2 }} xl={{ span: 7, offset: 5 }}>
          <RedTitle>Rediscover the Magic</RedTitle>
          <Title>of Your Relationship</Title>
          <h2>
            Empowering Couples Through{' '}
            <span style={{ fontWeight: 700 }}>AI-Powered</span> Personal
            Relationship Guidance.
          </h2>
          <ChatImg src={msgs} />
          <ChatBtn>
            <button className="normalBtn">GET STARTED FOR FREE</button>
          </ChatBtn>
        </Col>
        <Col xs={{ span: 20, offset: 2 }} xl={{ span: 7 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <BotImg src={bot} />
          </div>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <BotBtn
              className="normalBtn"
              style={{
                width: '70%',
                transform: 'translate(0, -2px)',
                paddingBlock: 15,
              }}
            >
              GET STARTED FOR FREE
            </BotBtn>
          </div>
        </Col>
      </StyledRow>
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '200%',
            height: '500px',
            transform: 'translate(-25%, 0)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(180deg, #E5923E 0%, #DF836E 51.39%, #D4573F 100%)',
              borderRadius: '100%',
            }}
          >
            <Oval
              style={{
                height: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              <Title>Welcome to Relationship Recharge!</Title>
              <h3 style={{ marginBottom: 40 }}>
                AI Technology, Personalized Coaching, and Virtual Therapy to
                Overcome Relationship Challenges and Achieve Fulfillment.
              </h3>
              <p style={{ textAlign: 'left' }}>
                Relationship Recharge is a revolutionary platform designed to
                help couples build stronger, healthier, and more fulfilling
                connections. Our innovative solution combines cutting-edge AI
                technology, personalized coaching, virtual therapy, and
                community support to address common relationship challenges and
                promote growth.
              </p>
            </Oval>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSec;
