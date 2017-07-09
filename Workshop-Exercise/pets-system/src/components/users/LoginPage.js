import React, { Component } from 'react'
import FormHelpers from '../common/helpers/FormHelpers'
import LoginForm from './LoginForm'

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: 'nik@nik.bg',
        password: '123'
      },
      error: ''
    }

    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleUserLogin = this.handleUserLogin.bind(this)
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserLogin (event) {
    event.preventDefault()

    // Validate Form...
  }

  render () {
    return (
      <div>
        Login Page
        <LoginForm
          user={this.state.user}
          onChange={this.handleUserChange}
          onSave={this.handleUserLogin}
        />
      </div>
    )
  }
}

export default LoginPage
