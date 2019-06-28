import React from 'react';

function Book({ match }) {
  return (
    <div>
      <h3>{match.params.bookTitle}</h3>
    </div>
  )
}

export default Book;