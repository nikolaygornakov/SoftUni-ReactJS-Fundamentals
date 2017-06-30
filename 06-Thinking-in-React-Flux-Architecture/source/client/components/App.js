import React, { Component } from 'react'

import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'

import Navbar from './Navbar'
import Footer from './Footer'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = UserStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    UserStore.listen(this.onChange)
    UserActions.loginUser()
  }

  componentWillUnmount () {
    UserStore.unlisten(this.onChange)
  }

  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
