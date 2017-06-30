import React, { Component } from 'react'

class Details extends Component {
  componentDidMount () {
  }
  render () {
    let params = this.props.match.params
    let id = params.id

    return (
      <div>
        <h3>Book Details page</h3>
        <h5>Book Id: {id}</h5>
      </div>
    )
  }
}

export default Details
