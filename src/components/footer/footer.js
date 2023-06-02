import { Col, Row } from 'antd';
import styled from 'styled-components';

import fb from '../../images/facebook.png';
import ig from '../../images/instagram.png';
import li from '../../images/linkedin.png';
import tw from '../../images/twitter.png';

const Title = styled.h3({
  fontWeight: 700,
});

const Link = styled.a({
  textDecoration: 'none',
  color: '#000',
  fontWeight: 500,
});

const LinkContainer = styled(Col)({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});

const ContactContainer = styled(LinkContainer)(
  ({ theme }) => `
  align-items: center;
  ${theme.breakpoints.lg} {
    align-items: flex-start;
  }
`
);

const Footer = () => {
  return (
    <Row style={{ backgroundColor: '#EFF1F3', padding: '50px 0' }}>
      <Col span={18} offset={3}>
        <Row gutter={[0, 30]}>
          <LinkContainer
            xs={{ span: 12, offset: 0 }}
            lg={{ span: 7, offset: 0 }}
          >
            <Title>Relationship Recharge</Title>
            <Link href="">Privacy Policy</Link>
            <Link href="">Terms and Conditions</Link>
            <Link href="">Security Policy</Link>
          </LinkContainer>
          <LinkContainer
            xs={{ span: 12, offset: 0 }}
            lg={{ span: 10, offset: 0 }}
          >
            <Title>Resources</Title>
            <Link href="">Education Blogs</Link>
          </LinkContainer>
          <ContactContainer
            xs={{ span: 12, offset: 6 }}
            lg={{ span: 7, offset: 0 }}
          >
            <Title>Contact</Title>
            <Link href="">1-(530) 325-0852</Link>
            <Link href="mailto:Info@relationshiprecharge.ai">
              Info@relationshiprecharge.ai
            </Link>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 15,
              }}
            >
              <a href="">
                <img src={fb} />
              </a>
              <a href="">
                <img src={ig} />
              </a>
              <a href="">
                <img src={tw} />
              </a>
              <a href="">
                <img src={li} />
              </a>
            </div>
          </ContactContainer>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
