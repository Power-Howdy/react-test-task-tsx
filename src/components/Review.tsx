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
        <Col xs={2}>User Name</Col>
        <Col xs={10}>{userData.name}</Col>
      </Row>
      <Row>
        <Col xs={2}>Phone Number</Col>
        <Col xs={10}>{userData.phone}</Col>
      </Row>
      <Row>
        <Col xs={2}>Country</Col>
        <Col xs={10}>{userData.country}</Col>
      </Row>
    </div>
  );
};

export default Review;
