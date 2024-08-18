import React from "react";
import { Modal, Button } from "react-bootstrap";

function BookDetailModal({ show, handleClose, book, addToCart, addToWishlist }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={book.imageUrl} alt={book.title} className="img-fluid mb-3" />
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Price:</strong> ${book.price}</p>
        <p><strong>Rating:</strong> {book.rating}</p>
        <p><strong>Description:</strong> {book.description}</p>

        <div className="reviews-section">
          <h5>Reviews</h5>
          <div className="reviews-grid">
            {book.reviews.map((review, index) => (
              <div key={index} className="review-item">
                <p>"{review}"</p>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button className="btn btn-colors btn-card" onClick={() => addToCart(book)}>
          Add to Cart
        </Button>
        <Button className="btn btn-colors btn-card" onClick={() => addToWishlist(book)}>
          Add to Wishlist
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookDetailModal;
