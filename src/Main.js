import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Abilities from './components/Abilities'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
      scrolling: true
    }
  }

  componentDidMount() {
    new IntersectionObserver(
      () => {
        if (!this.state.scrolling) this.props.history.push('/')
        else if (this.state.selected === '/')
          this.setState({ scrolling: false })
      },
      {
        threshold: 0.6
      }
    ).observe(document.querySelector('#profile'))
    new IntersectionObserver(
      () => {
        if (!this.state.scrolling) this.props.history.push('/experiences')
        else if (this.state.selected === '/experiences')
          this.setState({ scrolling: false })
      },
      {
        threshold: 0.6
      }
    ).observe(document.querySelector('#experiences'))
    new IntersectionObserver(
      () => {
        if (!this.state.scrolling) this.props.history.push('/abilities')
        else if (this.state.selected === '/abilities')
          this.setState({ scrolling: false })
      },
      {
        threshold: 0.6
      }
    ).observe(document.querySelector('#abilities'))
    new IntersectionObserver(
      () => {
        if (!this.state.scrolling) this.props.history.push('/projects')
        else if (this.state.selected === '/projects')
          this.setState({ scrolling: false })
      },
      {
        threshold: 0.6
      }
    ).observe(document.querySelector('#projects'))
    new IntersectionObserver(
      () => {
        if (!this.state.scrolling) this.props.history.push('/contact')
        else if (this.state.selected === '/contact')
          this.setState({ scrolling: false })
      },
      {
        threshold: 0.6
      }
    ).observe(document.querySelector('#contact'))
    setTimeout(() => {
      let { pathname } = this.props.location
      pathname = pathname.substr(1, pathname.length)
      if (pathname === '') pathname = 'profile'
      const element = document.getElementById(pathname)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
        let destination = '/' + pathname
        if (destination === '/profile') destination = '/'
        this.setState({ selected: destination, scrolling: true })
      }
    }, 1000)
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname === '/scroll') {
      let { search } = props.location
      search = search.substr(4, search.length)
      const element = document.getElementById(search)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        })
        let destination = '/' + search
        if (destination === '/profile') destination = '/'
        props.history.push(destination)
        return { selected: destination, scrolling: true }
      }
    }
    return null
  }
  render() {
    const { location } = this.props

    return (
      <div className='App'>
        <Header selected={location.pathname} />
        <div className='body'>
          <Profile />
          <div className='content' id='experiences'>
            <div>2</div>
          </div>
          <Abilities />
          <div className='content' id='projects'>
            <div>4</div>
          </div>
          <Contact />
        </div>
      </div>
    )
  }
}

export default App
