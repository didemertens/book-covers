import React from 'react'

class BookList extends React.Component {
  state = {
    bookData: null
  }

  async componentDidMount() {
    try {
      const res = await fetch('/books')
      const data = await res.json()
      this.setState({ bookData: data.bookCovers })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { bookData } = this.state
    return (
      <ul>
        {bookData && bookData.map(book => (
          <li key={book.id}>
            <img src={book.cover} alt={book.title} />
          </li>
        ))}
      </ul>
    )
  }
}

export default BookList