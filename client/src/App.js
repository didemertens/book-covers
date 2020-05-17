import React from 'react'

import 'normalize.css'
import './styles/main.scss'

import BookList from './components/BookList/BookList'

const App = () => {
  return (
    <div data-test="app-component">
      <h1>Judge a book by its cover</h1>
      <BookList />
    </div>
  )
}

export default App;
