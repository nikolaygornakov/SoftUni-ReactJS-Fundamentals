import React, { Component } from 'react'
import RegisterForm from './RegisterForm'

class RegisterPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: 'nik@nik.bg',
        password: '123',
        confirmPassword: '123',
        name: 'Nik'
      },
      error: ''
    }

    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleUserRegistration = this.handleUserRegistration.bind(this)
  }

  handleUserChange (event) {
    const target = event.target
    const field = target.name
    const value = target.value

    const user = this.state.user
    user[field] = value

    this.setState({ user })
  }

  handleUserRegistration (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div>
        Register Page
        <RegisterForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange}
          onSave={this.handleUserRegistration}
        />
      </div>
    )
  }
}

export default RegisterPage
