import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'

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
    this.handleUserForm = this.handleUserForm.bind(this)
    this.handleUserRegistration = this.handleUserRegistration.bind(this)

    UserStore.on(
      UserStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration
    )
  }

  componentWillUnmount () {
    UserStore.removeListener(
      UserStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration
    )
  }

  handleUserChange (event) {
    const target = event.target
    const field = target.name
    const value = target.value

    const user = this.state.user
    user[field] = value

    this.setState({user})
  }

  handleUserRegistration (data) {
    if (!data.success) {
      const firstError = Object.keys(data.errors).map(k => data.errors[k])[0]

      this.setState({
        error: firstError
      })
    } else {
      this.props.history.push('/users/login')
    }
  }

  handleUserForm (event) {
    event.preventDefault()

    if (!this.validateUser()) {
      return
    }

    UserActions.register(this.state.user)
  }

  validateUser () {
    const user = this.state.user
    let formIsValid = true
    let error = ''

    if (user.password !== user.confirmPassword) {
      error = 'Passwords do not match'

      formIsValid = false
    }

    if (error) {
      this.setState({error})
    }

    return formIsValid
  }

  render () {
    return (
      <div>
        Register Page
        <RegisterForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange}
          onSave={this.handleUserForm} />
      </div>
    )
  }
}

export default RegisterPage
