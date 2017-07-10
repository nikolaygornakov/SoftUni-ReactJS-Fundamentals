import React, { Component } from 'react'
import Input from '../common/forms/Input'

class LoginForm extends Component {
  render () {
    return (
      <form>
        <div>
          {this.props.error}
        </div>
        <Input
          type='email'
          name='email'
          placeholder='E-mail'
          value={this.props.user.email}
          onChange={this.props.onChange} />
        <br />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          value={this.props.user.password}
          onChange={this.props.onChange} />
        <br />
        <input type='submit' value='Login' onClick={this.props.onSave} />
      </form>
    )
  }
}

export default LoginForm
