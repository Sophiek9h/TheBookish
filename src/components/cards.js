import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import star from "../images/Star.png";
import BookDetailModal from "./bookdetails";

export default function Card({ item, addToCart, addToWishlist }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="card">
      <img src={item.imageUrl} alt="" className="card-img" onClick={handleShow} />

      <div className="card-stats">
        <img src={star} alt="" className="card-star" />
        <span>{item.rating}</span>
      </div>

      <p className="card-title">{item.title}</p>
      <span className="card-author">{item.author}</span>
      <span className="card-price">${item.price}</span>

      <div className="card-buttons">
        <button className="btn btn-colors btn-card" onClick={() => addToCart(item)}>
          Add to Cart
        </button>
        <button className="btn btn-colors btn-card btn-wishlist" onClick={() => addToWishlist(item)}>
          <FaHeart /> 
        </button>
      </div>

      <BookDetailModal 
        show={showModal} 
        handleClose={handleClose} 
        book={item} 
        addToCart={addToCart} 
        addToWishlist={addToWishlist} 
      />
    </div>
  );
}
