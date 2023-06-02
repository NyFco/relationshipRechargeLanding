/* eslint-disable @typescript-eslint/no-empty-function */
import { Col, Form, Input, Row } from 'antd';
import axios from 'axios';
import styled from 'styled-components';

import orangHeart from '../../images/heart1.png';
import pinkHeart from '../../images/heart2.png';
import blueHeart from '../../images/heart3.png';
import greenHeart from '../../images/heart4.png';
import pink2Heart from '../../images/heart5.png';
import orange2Heart from '../../images/heart6.png';
import yellowHeart from '../../images/heart7.png';
import beigeHeart from '../../images/heart8.png';

const StyledInput = styled(Input)({
  padding: 15,
});

const FormItem = styled(Form.Item)({
  width: '100%',
});

const FormSec = () => {
  const [form] = Form.useForm();

  const submitFormHandler = () => {
    form
      .validateFields()
      .then(() => {
        axios
          .post('https://kidwiz.weblast.net/api/users/', form.getFieldsValue())
          .then(() => {
            form.resetFields();
          });
      })
      .catch(() => {});
  };

  return (
    <Row style={{ paddingBlock: 70, overflow: 'hidden' }}>
      <Col
        xs={{ span: 20, offset: 2 }}
        lg={{ span: 16, offset: 4 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className="title" style={{ textAlign: 'center' }}>
          Be among the first to see
        </h1>
        <h1
          className="title"
          style={{ color: '#CA275A', textAlign: 'center', marginBottom: 10 }}
        >
          Relationship Recharge in action
        </h1>
        <h3 style={{ textAlign: 'center', marginBottom: 50 }}>
          Transform Your Relationship ❤️
        </h3>
        <Row>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>
            <Form
              form={form}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
                border: '2px solid #CA275A',
                backgroundColor: '#fff',
                borderRadius: 20,
                padding: 30,
                boxShadow: '-4px 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              <img
                style={{
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  width: '100%',
                  maxWidth: 70,
                }}
                src={orangHeart}
              />
              <img
                style={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: '100%',
                  maxWidth: 40,
                }}
                src={pinkHeart}
              />
              <img
                style={{
                  position: 'absolute',
                  top: '30%',
                  right: -60,
                  width: '100%',
                  maxWidth: 50,
                  zIndex: -1,
                }}
                src={orange2Heart}
              />
              <img
                style={{
                  position: 'absolute',
                  bottom: '45%',
                  right: -110,
                  width: '100%',
                  maxWidth: 50,
                  zIndex: -1,
                  overflow: 'hidden',
                }}
                src={beigeHeart}
              />
              <img
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  right: -60,
                  width: '100%',
                  maxWidth: 70,
                  zIndex: -1,
                }}
                src={yellowHeart}
              />
              <img
                style={{
                  position: 'absolute',
                  top: '30%',
                  left: -80,
                  width: '100%',
                  maxWidth: 50,
                  zIndex: -1,
                }}
                src={pink2Heart}
              />
              <img
                style={{
                  position: 'absolute',
                  bottom: '30%',
                  left: -60,
                  width: '100%',
                  maxWidth: 70,
                  zIndex: -1,
                }}
                src={greenHeart}
              />
              <h2 style={{ fontWeight: 700, textAlign: 'center' }}>
                Join us for Launch Day!
              </h2>
              <FormItem
                rules={[
                  {
                    required: true,
                    type: 'email',
                  },
                ]}
                name="email"
              >
                <StyledInput placeholder="Email Address" type="email" />
              </FormItem>
              <FormItem name="first_name">
                <StyledInput placeholder="First name" />
              </FormItem>
              <FormItem name="last_name">
                <StyledInput placeholder="Last name" />
              </FormItem>
              <p style={{ color: '#7C8175', paddingInline: 15 }}>
                By submitting your details you hereby agree to our Terms &
                Conditions and Privacy Policy. You may always opt-out from our
                mailing lists in accordance with the Privacy Policy.
              </p>
              <button
                onClick={submitFormHandler}
                style={{ width: '100%' }}
                className="normalBtn"
              >
                GET EXCLUSIVE EARLY ACCESS
              </button>
              <img
                style={{
                  position: 'absolute',
                  bottom: -20,
                  left: -20,
                  width: '100%',
                  maxWidth: 50,
                }}
                src={blueHeart}
              />
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default FormSec;
