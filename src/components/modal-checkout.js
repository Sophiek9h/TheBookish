import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function CheckoutModal({ show, handleClose, cart, totalPrice}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Your Order:</h5>
        <ul>
          {cart.map((book, index) => (
            <li key={index}>
              {book.title} - ${book.price}
            </li>
          ))}
        </ul>
        <hr />
        <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-colors btn-card" onClick={handleClose}>
          Close
        </Button>
        <Button className="btn btn-colors btn-card" onClick={() => alert('Order Placed!')}>
          Confirm Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CheckoutModal;
