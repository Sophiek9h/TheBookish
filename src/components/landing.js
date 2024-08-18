import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import hero from '../images/herooo.png';
import hero1 from '../images/hero.png';
import hero2 from '../images/heroo.jpeg';
import data from './data';
import Card from './cards';
import LibrarySection from './services';
import Footer from './footer';

function Landing({ addToCart, addToWishlist }) {
    const navigate = useNavigate();

    const bestSellingBooks = data.slice(0, 5);
    const historyBooks = data.filter(item => item.category === 'History');
    const BusinessBooks = data.filter(item => item.category === 'Business');

    const sectionsRef = useRef([]);

    const bestSellingCards = bestSellingBooks.map(item => (
        <Card
            key={item.id}
            item={item}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
        />
    ));

    const historyCards = historyBooks.map(item => (
        <Card
            key={item.id}
            item={item}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
        />
    ));

    const businessCards = BusinessBooks.map(item => (
        <Card
            key={item.id}
            item={item}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
        />
    ));

    useEffect(() => {
        const currentSections = sectionsRef.current.filter(Boolean); // Filter out any null or undefined elements

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        currentSections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            currentSections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);



    return (
        <>
            <Container className="sections my-5">
                <Row>
                    <Col lg={6} className="d-flex align-items-center">
                        <div className="hero-section">
                            <div className="blob blob1"></div>
                            {/* <div className="blob blob2"></div> */}
                            <h1 className="mb-5">Welcome to <span className="Brand-hero">TheBookish</span></h1>
                            <p className="lead">
                                Explore our vast collection of books and take advantage of our special offers. From timeless classics to modern bestsellers, we have something for every reader.
                            </p>
                            <p className="lead">
                                Don't miss out on our featured books of the week, available at exclusive discounts. Start your literary journey today!
                            </p>
                            <button className="btn btn-colors mt-3" onClick={() => navigate('/cart')}>Shop Now</button>
                        </div>

                    </Col>
                    
                    <Col lg={6}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={hero}
                                    alt="Featured Book 1"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={hero1}
                                    alt="Featured Book 2"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={hero2}
                                    alt="Featured Book 3"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

            <div ref={el => sectionsRef.current[0] = el} className='sectionss fade-in'>
                <h3>Best-selling and Popular Books</h3>
                <div className='book-list'>
                    {bestSellingCards}
                </div>
            </div>

            <div ref={el => sectionsRef.current[1] = el} className='sectionss fade-in'>
                <h3>History Books</h3>
                <div className='book-list'>
                    {historyCards}
                </div>
            </div>

            <LibrarySection />

            <div ref={el => sectionsRef.current[2] = el} className='sectionss fade-in'>
                <h3>Nonfiction Books</h3>
                <div className='book-list'>
                    {businessCards}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Landing;
