import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface Props {
  userData: {
    name: string;
    email: string;
    phone: string;
    country: string;
    password1: string;
    password2: string;
  };
}

const Review: React.FC<Props> = ({ userData }) => {
  return (
    <div className="fs-5 m-3">
      <Row>
        <Col xs={6} className='label-custom '>User Name</Col>
        <Col xs={6} style={{ textAlign: 'right'}}>{userData.name}</Col>
      </Row>
      <Row>
        <Col xs={6}  className='label-custom '>Phone Number</Col>
        <Col xs={6} style={{ textAlign: 'right'}}>{userData.phone}</Col>
      </Row>
      <Row>
        <Col xs={6} className='label-custom '>Country</Col>
        <Col xs={6} style={{ textAlign: 'right'}}>{userData.country}</Col>
      </Row>
    </div>
  );
};

export default Review;
