import React from 'react'

class BookList extends React.Component {
  state = {
    bookData: null
  }

  async componentDidMount() {
    this.getBookCovers()
  }

  async getBookCovers() {
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
      <div className="list__wrapper">
        <div className="list__gallery">
          {bookData && bookData.map(book => (
            <div key={book.id}>
              <img src={book.cover} alt={book.title} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default BookList