/* eslint-disable react/no-unescaped-entities */
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Col, Row } from 'antd';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import offer1 from '../../images/offer1.png';
import offer2 from '../../images/offer2.png';
import offer3 from '../../images/offer3.png';
import offer4 from '../../images/offer4.png';

const Img = styled.img({
  width: '100%',
  maxWidth: 350,
});

const OfferTitle = styled.h2({
  fontWeight: 700,
});

const TextCol = styled(Col)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Offer = ({ title, desc, image }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <OfferTitle>{title}</OfferTitle>
      <p>{desc}</p>
      <Img src={image} />
    </div>
  );
};

const OfferSec = () => {
  return (
    <Row
      style={{
        padding: '50px 0',
      }}
    >
      <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }}>
        <h1 className="title" style={{ textAlign: 'center', marginBottom: 20 }}>
          What We Offer
        </h1>
        <h2 style={{ textAlign: 'center' }}>
          Navigating the Complexities of Relationships
        </h2>
        <Row>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 0, offset: 0 }}>
            <Swiper
              spaceBetween={70}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              style={{ padding: 30 }}
            >
              <SwiperSlide key={1}>
                <Offer
                  title="Revolutionary Relationship Help for Modern Couples"
                  desc="Relationship Recharge offers a comprehensive range of topics that cater to the unique needs of modern couples. Our innovative platform provides a safe and supportive space for couples to explore their issues and work together to build stronger, healthier relationships."
                  image={offer1}
                />
              </SwiperSlide>
              <SwiperSlide key={2}>
                <Offer
                  title="Effective Tools to Improve Communication and Build Trust"
                  desc="Our platform is designed to help couples improve communication and build trust. Whether you're struggling with misunderstandings, poor listening skills, or broken trust, Relationship Recharge provides the tools and resources you need to work through your issues and build a stronger connection with your partner."
                  image={offer2}
                />
              </SwiperSlide>
              <SwiperSlide key={2}>
                <Offer
                  title="Guidance for Building Intimacy and Overcoming Financial Stress"
                  desc="We understand that intimacy and financial stress can be major sources of conflict in relationships. That's why we offer guidance and support to help couples navigate these issues and build a more fulfilling, intimate relationship."
                  image={offer3}
                />
              </SwiperSlide>
              <SwiperSlide key={2}>
                <Offer
                  title="Expert Guidance for Navigating Family Dynamics and Personal Growth"
                  desc="At Relationship Recharge, we believe that personal growth and family dynamics play a critical role in building strong relationships. That's why we offer expert guidance to help couples navigate these challenges and build a stronger, more fulfilling relationship."
                  image={offer4}
                />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xs={{ span: 0, offset: 0 }} lg={{ span: 20, offset: 2 }}>
            <Row gutter={[30, 30]}>
              <TextCol span={12}>
                <OfferTitle>
                  Revolutionary Relationship Help for Modern Couples
                </OfferTitle>
                <p>
                  Relationship Recharge offers a comprehensive range of topics
                  that cater to the unique needs of modern couples. Our
                  innovative platform provides a safe and supportive space for
                  couples to explore their issues and work together to build
                  stronger, healthier relationships.
                </p>
              </TextCol>
              <Col span={12}>
                <Img src={offer1} />
              </Col>
              <Col span={12}>
                <Img src={offer2} />
              </Col>
              <TextCol span={12}>
                <OfferTitle>
                  Effective Tools to Improve Communication and Build Trust
                </OfferTitle>
                <p>
                  Our platform is designed to help couples improve communication
                  and build trust. Whether you're struggling with
                  misunderstandings, poor listening skills, or broken trust,
                  Relationship Recharge provides the tools and resources you
                  need to work through your issues and build a stronger
                  connection with your partner.
                </p>
              </TextCol>
              <TextCol span={12}>
                <OfferTitle>
                  Guidance for Building Intimacy and Overcoming Financial Stress
                </OfferTitle>
                <p>
                  We understand that intimacy and financial stress can be major
                  sources of conflict in relationships. That's why we offer
                  guidance and support to help couples navigate these issues and
                  build a more fulfilling, intimate relationship.
                </p>
              </TextCol>
              <Col span={12}>
                <Img src={offer3} />
              </Col>
              <Col span={12}>
                <Img src={offer4} />
              </Col>
              <TextCol span={12}>
                <OfferTitle>
                  Expert Guidance for Navigating Family Dynamics and Personal
                  Growth
                </OfferTitle>
                <p>
                  At Relationship Recharge, we believe that personal growth and
                  family dynamics play a critical role in building strong
                  relationships. That's why we offer expert guidance to help
                  couples navigate these challenges and build a stronger, more
                  fulfilling relationship.
                </p>
              </TextCol>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default OfferSec;
