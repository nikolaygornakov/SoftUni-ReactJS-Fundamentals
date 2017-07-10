import React, { Component } from 'react'

class Select extends Component {
  render () {
    const options = this.props.options.map(opt =>
      <option key={opt} value={opt}>{opt}</option>
    )

    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <select
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        >
          {options}
        </select>
      </div>
    )
  }
}

export default Select
