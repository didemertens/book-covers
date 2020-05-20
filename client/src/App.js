import React, { useState } from 'react'

import 'normalize.css'
import './styles/main.scss'

import BookList from './components/BookList/BookList'

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
      <h1>Judge a book by its cover</h1>
      <button
        onClick={() => toggleTheme()}
      >
        {
          theme === 'light'
            ?
            '🌙'
            :
            '☀️'
        }
      </button>
      <BookList />
    </div>
  )
}

export default App



// if (lang === 'ar') {
//   style.href = '/css/style-ltr.css';
// } else {
//   style.href = '/css/style-rtl.css';
// }