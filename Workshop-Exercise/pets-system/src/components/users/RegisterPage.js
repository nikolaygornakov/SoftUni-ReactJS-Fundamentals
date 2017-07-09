import React, { Component } from 'react'
import FormHelpers from '../common/helpers/FormHelpers'
import RegisterForm from './RegisterForm'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'
import toastr from 'toastr'

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
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserRegistration (data) {
    if (!data.success) {
      let firstError = data.message

      if (data.errors) {
        firstError = Object.keys(data.errors).map(k => data.errors[k])[0]
      }

      toastr.error(firstError)

      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
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
      toastr.error(error)
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
