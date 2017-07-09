import React, { Component } from 'react'

class Input extends Component {
  render () {
    let type = this.props.type || 'text'

    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.placeholder}</label>
        <input
          type={type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default Input
