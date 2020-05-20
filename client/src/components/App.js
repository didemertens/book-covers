import React, { useState } from 'react'

import 'normalize.css'
import '../styles/main.scss'

import BookList from './BookList/BookList'

const App = () => {
  const [theme, setTheme] = useState('light')
  const styleCSS = document.getElementById('style-direction')

  const toggleTheme = () => {
    if (theme === 'light') {
      styleCSS.href = 'https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css'
      setTheme('dark')
    } else {
      styleCSS.href = 'https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css'
      setTheme('light')
    }
  }

  return (
    <div data-test="app-component">
      <div className="app__header">
        <h1>Judge a book by its cover</h1>
        <button className="app__button--theme" data-test="theme-btn" onClick={() => toggleTheme()}>
          {
            theme === 'light'
              ?
              '🌙'
              :
              '☀️'
          }
        </button>
      </div>
      <BookList />
    </div >
  )
}

export default App