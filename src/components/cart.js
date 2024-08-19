import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Footer from './footer';
import CheckoutModal from './modal-checkout';

function Cart({ cart, removeFromCart }) {
  const [showModal, setShowModal] = useState(false);
  const totalPrice = cart.reduce((total, book) => total + book.price, 0);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className='main'>
      {cart.length === 0 ? (
        <h2 className="cart-empty">Add a book to your cart</h2>
      ) : (
        <>
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="btn btn-colors" onClick={handleShow}>Checkout</button>
          </div>
          <div className="cart-grid">
            {cart.map(book => (
              <div key={book.id} className="card">
                <img src={book.imageUrl} alt={book.title} className="card-img" />
                <div>
                  <p className="card-title">{book.title}</p>
                  <p className="card-author">{book.author}</p>
                  <span className="card-price">${book.price}</span>
                </div>
                <button className="btn-colors btn-card" onClick={() => removeFromCart(book.id)}>
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      <Footer />

      <CheckoutModal show={showModal} handleClose={handleClose} cart={cart} totalPrice={totalPrice} />
    </div>
  );
}

export default Cart;
