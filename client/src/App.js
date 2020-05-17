import React from 'react'

class App extends React.Component {

  async componentDidMount() {
    const res = await fetch('/test')
    const data = await res.json()
    console.log(data)
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

export default App;
