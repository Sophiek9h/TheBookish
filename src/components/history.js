import React from 'react';
import Footer from './footer';
import data from './data'
import Card from './cards';

function History({ addToCart, addToWishlist }) {

   // filter for hitory books
   const HistoryBooks = data.filter(item => item.category === 'History');

   const HistoryCards = HistoryBooks.map(item => (
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
                {HistoryCards}
            </div>
        </div>


    <Footer/>
    </>
  );
}

export default History;
