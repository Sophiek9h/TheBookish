import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navbar';
import Landing from './components/landing';
import Books from './components/books';
import Wishlist from './components/wishlist';
import Fiction from './components/fiction';
import NonFiction from './components/nonfiction';
import Mystery from './components/mystery';
import History from './components/history';
import Cart from './components/cart';

function AppRouter() {
  // Initialize wishlist and cart from localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error('Failed to load wishlist from localStorage:', error);
      return [];
    }
  });

  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    // Save wishlist to localStorage whenever it changes
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch (error) {
      console.error('Failed to save wishlist to localStorage:', error);
    }
  }, [wishlist]);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [cart]);

  const addToWishlist = (book) => {
    if (!wishlist.find(item => item.id === book.id)) {
      setWishlist([...wishlist, book]);
    }
  };

  const addToCart = (book) => {
    if (!cart.find(item => item.id === book.id)) {
      setCart([...cart, book]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route 
          path="/" 
          element={<Landing addToWishlist={addToWishlist} addToCart={addToCart} />} 
        />
        <Route 
          path="/books" 
          element={<Books addToWishlist={addToWishlist} addToCart={addToCart} />} 
        />
        <Route 
          path="/wishlist" 
          element={<Wishlist wishlist={wishlist} addToCart={addToCart} removeFromWishlist={removeFromWishlist}/>} 
        />
        <Route 
          path="/cart" 
          element={<Cart cart={cart} removeFromCart={removeFromCart} />} 
        />
        <Route path="/categories/fiction" element={<Fiction addToWishlist={addToWishlist} addToCart={addToCart} /> } />
        <Route path="/categories/non-fiction" element={<NonFiction addToWishlist={addToWishlist} addToCart={addToCart} />} />
        <Route path="/categories/mystery" element={<Mystery addToWishlist={addToWishlist} addToCart={addToCart} />} />
        <Route path="/categories/history" element={<History addToWishlist={addToWishlist} addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
