import React from 'react';
import Footer from './footer';
import data from './data'
import Card from './cards';

function Mystery({ addToCart, addToWishlist }) {

   // filter for mystery books
   const mysteryBooks = data.filter(item => item.category === 'Mystery');

   const mysteryCards = mysteryBooks.map(item => (
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
                {mysteryCards}
            </div>
        </div>


    <Footer/>
    </>
  );
}

export default Mystery;
