import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-ghostwhite text-dark mt-5 d-flex align-items-center">
      <Container>
        <Row>
          <Col md={3} sm={6}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5>Buy</h5>
            <ul className="list-unstyled">
              <li>Deals</li>
              <li>Coupons</li>
              <li>Gift Cards</li>
              <li>Help</li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5>Sell</h5>
            <ul className="list-unstyled">
              <li>Start Selling</li>
              <li>Learn to Sell</li>
              <li>Businesses</li>
              <li>Help</li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5>Stay Connected</h5>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <small>&copy; {new Date().getFullYear()} eBay Inc. All Rights Reserved.</small>
          </Col>
          <Col md={6}>
            <ul className="list-inline float-md-end">
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#">Terms &amp; Conditions</a></li>
              <li className="list-inline-item"><a href="#">Site Map</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
