
import React from 'react';
import Footer from './footer';
import data from './data'
import Card from './cards';

function Nonfiction({ addToCart, addToWishlist }) {

   // filter for nonfiction books
   const NonfictionBooks = data.filter(item => item.category === 'Nonfiction');

   const nonfictionCards = NonfictionBooks.map(item => (
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
                {nonfictionCards}
            </div>
        </div>


    <Footer/>
    </>
  );
}

export default Nonfiction;
