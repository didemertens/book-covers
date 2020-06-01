import React from 'react'
import BookItem from '../BookItem/BookItem'

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
          {bookData && <BookItem bookData={bookData} />}
        </div>
      </div>
    )
  }
}

export default BookList