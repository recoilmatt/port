import React from 'react'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'

//Scrollbars
import { Scrollbars } from 'react-custom-scrollbars'

import Footer from './Footer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
      >
        {' '}
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          style={{ width: '100vw', height: '100vh' }}
        >
          <div id="wrapper">
            <Header onToggleMenu={this.handleToggleMenu} />
            {children}

            <Footer />
          </div>
        </Scrollbars>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

export default Layout
