import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsCart } from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'; // Import Link

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">TheBookish</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', padding: "30px" }}
            navbarScroll
          >
            <LinkContainer to="/books">
              <Nav.Link>All Books</Nav.Link>
            </LinkContainer>


            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <LinkContainer to="/categories/fiction">
                <NavDropdown.Item>Fiction</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/categories/non-fiction">
                <NavDropdown.Item>Non-fiction</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/categories/mystery">
                <NavDropdown.Item>Mystery</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/categories/history">
                <NavDropdown.Item>History</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/wishlist">
              <Nav.Link>Wishlist</Nav.Link>
            </LinkContainer>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by title"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btn btn-colors'>Search</Button>
          </Form>

          <Link to="/cart">
            <Button className="btn btn-colors ms-2">
              <BsCart size={20} />
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
