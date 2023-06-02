/* eslint-disable react/no-unescaped-entities */
import { Col, Collapse, Row } from 'antd';

const { Panel } = Collapse;

const FaqSec = () => {
  return (
    <Row
      style={{
        background:
          'linear-gradient(180deg, #E5923E 0%, #DF836E 51.39%, #D4573F 100%)',
        padding: '50px 0',
      }}
    >
      <Col xs={{ span: 20, offset: 2 }} lg={{ span: 14, offset: 5 }}>
        <h1
          className="title"
          style={{ color: '#fff', textAlign: 'center', marginBottom: 50 }}
        >
          Frequently Asked Questions
        </h1>
        <Collapse accordion>
          <Panel header="What is Relationship Recharge?" key="1">
            <p>What is Relationship Recharge?</p>
          </Panel>
          <Panel header="How does the 7-day free trial work?" key="2">
            <p>How does the 7-day free trial work?</p>
          </Panel>
          <Panel header="Can I switch between plans?" key="3">
            <p>Can I switch between plans?</p>
          </Panel>
          <Panel header="How does the AI-powered guidance work?" key="4">
            <p>How does the AI-powered guidance work?</p>
          </Panel>
          <Panel
            header="Are virtual therapy sessions secure and confidential?"
            key="5"
          >
            <p>Are virtual therapy sessions secure and confidential?</p>
          </Panel>
          <Panel
            header="How do I choose focus topics for my relationship?"
            key="6"
          >
            <p>How do I choose focus topics for my relationship?</p>
          </Panel>
          <Panel
            header="Can I use Relationship Recharge if I'm single?"
            key="7"
          >
            <p>Can I use Relationship Recharge if I'm single?</p>
          </Panel>
          <Panel header="What payment methods do you accept?" key="8">
            <p>What payment methods do you accept?</p>
          </Panel>
          <Panel header="How do I cancel my subscription?" key="9">
            <p>How do I cancel my subscription?</p>
          </Panel>
          <Panel
            header="Can I get a refund if I'm not satisfied with the platform?"
            key="10"
          >
            <p>Can I get a refund if I'm not satisfied with the platform? </p>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
};

export default FaqSec;
