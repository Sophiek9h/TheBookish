import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBook, FaTruck, FaCreditCard, FaTag } from 'react-icons/fa';
import libraryImage from '../images/library.png'; // replace with your image path

function LibrarySection() {
    return (
        <Container className="my-5 library-section">
            <Row className="align-items-center">
                <Col md={6} className='lib-img'>
                    <img src={libraryImage} alt="Library" className="img-fluid " />
                </Col>
                <Col md={6}>
                    <h2 className="mb-4"><span className='Brand-hero'>TheBookish </span> at your service</h2>
                    <p className="text-muted mb-4">
                        Explore a wide range of quality books with fast delivery, easy payment methods, and exclusive offers. Start your journey today!
                    </p>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center mb-3">
                            <FaBook className="icon mr-3" />
                            <span>Quality Books</span>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <FaTruck className="icon mr-3" />
                            <span>Fast Delivery</span>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <FaCreditCard className="icon mr-3" />
                            <span>Easy Payment method</span>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <FaTag className="icon mr-3" />
                            <span>Get Offers on Books</span>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default LibrarySection;
