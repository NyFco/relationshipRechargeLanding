import { Col, Row } from 'antd';
import styled from 'styled-components';

const TopicContainer = styled.h2({
  padding: 10,
  width: '100%',
  color: '#fff',
  borderRadius: 10,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
});

const Topic = ({ color, children }) => {
  return (
    <TopicContainer style={{ backgroundColor: `#${color}` }}>
      {children}
    </TopicContainer>
  );
};

const TopicsSec = () => {
  return (
    <Row style={{ paddingBlock: 50 }}>
      <Col
        xs={{ span: 20, offset: 2 }}
        md={{ span: 16, offset: 4 }}
        style={{ textAlign: 'center' }}
      >
        <h1 className="title">Topics We Cover</h1>
        <h3 style={{ marginBottom: 30 }}>
          Discover Your Relationship’s Potential with Our Wide Range of Engaging
          Topics
        </h3>
        <Row gutter={[30]}>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 4 }}>
            <Topic color="F3A600">Communication</Topic>
          </Col>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 0 }}>
            <Topic color="16627A">Trust</Topic>
          </Col>
        </Row>
        <Row gutter={[30]}>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 0 }}>
            <Topic color="D4573F">Family and Friends</Topic>
          </Col>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 0 }}>
            <Topic color="CA275A">Intimacy</Topic>
          </Col>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 0 }}>
            <Topic color="5B7569">Personal Growth</Topic>
          </Col>
        </Row>
        <Row gutter={[30]}>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 4 }}>
            <Topic color="16627A">Commitment</Topic>
          </Col>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 0 }}>
            <Topic color="D4573F">Money</Topic>
          </Col>
        </Row>
        <Row gutter={[30]}>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 8 }}>
            <Topic color="F3A600">Career or Personal Growth Issues</Topic>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TopicsSec;
