import React from 'react'

class App extends React.Component {
  state = {
    bookData: null
  }

  async componentDidMount() {
    try {
      const res = await fetch('/books')
      const data = await res.json()
      console.log(data)
      this.setState({ bookData: data.bookCovers })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { bookData } = this.state
    console.log(bookData)
    return (
      <div>
        <h1>Judge a book by its cover</h1>
        <ul>
          {bookData && bookData.map(book => (
            <li key={book.id}>
              <img src={book.cover} alt={book.title} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
