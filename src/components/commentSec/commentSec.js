/* eslint-disable react/no-unescaped-entities */
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Col, Row } from 'antd';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import star from '../../images/star.png';

const Comment = ({ title, author, comment, rate }) => {
  const temp = [1, 2, 3, 4, 5];
  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 30,
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
      }}
    >
      <p>
        <span style={{ fontWeight: 700 }}>{title}</span> - {author}
      </p>
      <p>{comment}</p>
      <div style={{ display: 'flex', gap: 5 }}>
        {temp.map((i) => {
          if (i <= rate)
            return <img src={star} style={{ width: '100%', maxWidth: 25 }} />;
        })}
      </div>
    </div>
  );
};

const CommentSec = () => {
  return (
    <Row
      style={{
        padding: '50px 0',
        backgroundColor: '#E8E9EB',
      }}
    >
      <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }}>
        <Row gutter={[30, 30]}>
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 14, offset: 0 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2 style={{ fontWeight: 700 }}>
              Don't take our word for It: Uncover the Life-Changing Impact of
              Relationship Recharge on Couples
            </h2>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 10, offset: 0 }}>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              style={{ padding: 30 }}
            >
              <SwiperSlide key={1}>
                <Comment
                  title="Better Communication"
                  author="Sarah and James"
                  comment="Our communication used to be a huge hurdle in our relationship, but Relationship Recharge helped us develop better listening and expressing skills. The AI-powered guidance was a game-changer for us, and we've never been more in sync as a couple. Thank you, Relationship Recharge!"
                  rate={5}
                />
              </SwiperSlide>
              <SwiperSlide key={2}>
                <Comment
                  title="Better Communication"
                  author="Sarah and James"
                  comment="Our communication used to be a huge hurdle in our relationship, but Relationship Recharge helped us develop better listening and expressing skills. The AI-powered guidance was a game-changer for us, and we've never been more in sync as a couple. Thank you, Relationship Recharge!"
                  rate={5}
                />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CommentSec;
