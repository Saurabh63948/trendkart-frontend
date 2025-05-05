import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  FaInstagram,
  FaFacebookF,
  FaGooglePay,
  FaCcVisa,
  FaCcMastercard,
  FaCcApplePay,
  FaCcPaypal
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="mb-4">
          <Col md={6} className="mb-4">
            <h6>BE THE FIRST TO KNOW</h6>
            <p>Signup for updates from metti muse.</p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email..."
                className="me-2"
              />
              <Button variant="light">Subscribe</Button>
            </Form>
          </Col>
          <Col md={3}>
            <h6>CONTACT US</h6>
            <p>+44 221 130 5330</p>
            <p>customer.service@mettimuse.com</p>
            <h6 className="mt-4">CURRENCY</h6>
            <p>USD</p>
            <small className="text-muted">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </small>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row className="text-start text-md-left">
          <Col md={3} sm={6} className="mb-3">
            <h6>metti muse</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artistes</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <h6>QUICK LINKS</h6>
            <ul className="list-unstyled">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payments & Pricing</li>
              <li>Returns & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <h6>FOLLOW US</h6>
            <div className="d-flex gap-3">
              <FaInstagram size={20} />
              <FaFacebookF size={20} />
            </div>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <h6>metti muse ACCEPTS</h6>
            <div className="d-flex flex-wrap gap-3">
              <FaGooglePay size={36} />
              <FaCcVisa size={36} />
              <FaCcMastercard size={36} />
              <FaCcApplePay size={36} />
              <FaCcPaypal size={36} />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
