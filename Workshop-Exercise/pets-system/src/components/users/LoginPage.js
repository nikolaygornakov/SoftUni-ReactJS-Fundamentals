import React, { Component } from 'react'
import Auth from './Auth'
import FormHelpers from '../common/forms/FormHelpers'
import LoginForm from './LoginForm'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'
import toastr from 'toastr'

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
    this.handleUserForm = this.handleUserForm.bind(this)
    this.handleUserLogin = this.handleUserLogin.bind(this)

    UserStore.on(
      UserStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin
    )
  }

  componentWillUnmount () {
    UserStore.removeListener(
      UserStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin
    )
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserForm (event) {
    event.preventDefault()

    // Validate Form...
    UserActions.login(this.state.user)
  }

  handleUserLogin (data) {
    if (!data.success) {
      toastr.error(data.message)

      this.setState({
        error: data.message
      })
    } else {
      toastr.success(data.message)
      Auth.authenticateUser(data.token)
      Auth.saveUser(data.user)

      this.props.history.push('/')
    }
  }

  render () {
    return (
      <div>
        Login Page
        <LoginForm
          user={this.state.user}
          onChange={this.handleUserChange}
          onSave={this.handleUserForm} />
      </div>
    )
  }
}

export default LoginPage
