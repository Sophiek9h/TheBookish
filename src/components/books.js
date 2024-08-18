import React from 'react';
import Footer from './footer';
import data from './data'
import Card from './cards';

function Books({ addToCart, addToWishlist }) {

  const card = data.map(item => (
    <Card
        key={item.id}
        item={item}
        addToCart={addToCart} 
        addToWishlist={addToWishlist}
    />
));

  return(
    <>
    <div className='sections-books'>
            
            <div className='book-all'>
                {card}
            </div>
        </div>


    <Footer/>
    </>
  );
}

export default Books;
