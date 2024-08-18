import React from 'react';
import Footer from './footer';
import data from './data'
import Card from './cards';

function Fiction({ addToCart, addToWishlist }) {

   // filter for fiction books
   const fictionBooks = data.filter(item => item.category === 'Fiction');

   const fictionCards = fictionBooks.map(item => (
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
                {fictionCards}
            </div>
        </div>


    <Footer/>
    </>
  );
}

export default Fiction;
