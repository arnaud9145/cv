import React from 'react'
import Header from './components/Header'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'profile'
    }
  }
  render() {
    const { selected } = this.state
    return (
      <div className='App'>
        <Header
          selected={selected}
          onChange={selected => this.setState({ selected })}
        />
        <div className='body'>
          <p>yoo</p>
        </div>
      </div>
    )
  }
}

export default App
