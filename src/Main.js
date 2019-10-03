import React from 'react'
import Header from './components/Header'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
      scrolling: false
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

    let { pathname } = this.props.location
    pathname = pathname.substr(1, pathname.length)
    if (pathname === '') pathname = 'profile'
    const element = document.getElementById(pathname)
    if (element) {
      element.scrollIntoView({
        behavior: 'auto',
        block: 'end',
        inline: 'nearest'
      })
      const destination = '/' + pathname
      this.setState({ selected: destination, scrolling: true })
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname === '/scroll') {
      let { search } = props.location
      search = search.substr(4, search.length)
      const element = document.getElementById(search)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
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
    console.log(this.state.scrolling)

    return (
      <div className='App'>
        <Header selected={location.pathname} />
        <div className='body'>
          <div className='content'>
            <div id='profile'>1</div>
          </div>
          <div className='content'>
            <div id='experiences'>2</div>
          </div>
          <div className='content'>
            <div id='abilities'>3</div>
          </div>
          <div className='content'>
            <div id='projects'>4</div>
          </div>
          <div className='content'>
            <div id='contact'>5</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
