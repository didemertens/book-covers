import React from 'react'
import BookItem from '../BookItem/BookItem'
import { getBookCovers } from './services/GetCovers'

class BookList extends React.Component {
  state = {
    bookData: null
  }

  async componentDidMount() {
    try {
      const data = await getBookCovers()
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