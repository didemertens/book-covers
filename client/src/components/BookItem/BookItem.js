import React from 'react'

const BookItem = ({ bookData }) => (
  bookData.map(book => (
    <div key={book.id}>
      <img src={book.cover} alt={book.title} />
    </div>
  ))
)

export default BookItem