import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Footer from './footer';

function WishList({ wishlist, addToCart, removeFromWishlist }) {



  return (
    <div>
      {wishlist.length === 0 ? (
        <h2 className="wishlist-empty">Add a book you like to your wishlist</h2>
      ) : (
        <div className="wishlist-grid wishlist-container">
          {wishlist.map(book => (
            <div key={book.id} className="card">
              <img src={book.imageUrl} alt={book.title} className="card-img" />
              
                <p className="card-title">{book.title}</p>
                <p className="card-author"> {book.author}</p>
                <span className="card-price">${book.price}</span>

                <div className="card-buttons">
                  <button className="btn btn-colors btn-card" onClick={() => addToCart(book)}>
                     Add to Cart
                  </button>
                  <button className="btn btn-colors btn-remove" onClick={() => removeFromWishlist(book.id)}>
                  <FaTrash />
                  </button>
                </div>
              </div>
            
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default WishList;
