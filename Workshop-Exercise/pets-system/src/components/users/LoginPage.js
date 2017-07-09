import React, { Component } from 'react'
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
    const target = event.target
    const field = target.name
    const value = target.value

    const user = this.state.user
    user[field] = value

    this.setState({ user })
  }

  handleUserLogin (event) {
    event.preventDefault()
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
