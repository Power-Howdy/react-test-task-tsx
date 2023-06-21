import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface Props {
  name: string;
  phone: string;
  country: string;
}

const Review: React.FC<Props> = ({ name, phone, country }) => {
  return (
    <div className="fs-5 m-3">
      <Row>
        <Col xs={2}>User Name</Col>
        <Col xs={10}>{name}</Col>
      </Row>
      <Row>
        <Col xs={2}>Phone Number</Col>
        <Col xs={10}>{phone}</Col>
      </Row>
      <Row>
        <Col xs={2}>Country</Col>
        <Col xs={10}>{country}</Col>
      </Row>
    </div>
  );
};

export default Review;
