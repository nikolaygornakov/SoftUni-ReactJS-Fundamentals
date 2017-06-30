import React, { Component } from 'react'

class AuthorDetails extends Component {
  render () {
    let params = this.props.match.params
    let authorId = params.id

    return (
      <div>
        <h1>Author Details Page</h1>
        <h5>Author ID: {authorId}</h5>
      </div>
    )
  }
}

export default AuthorDetails
