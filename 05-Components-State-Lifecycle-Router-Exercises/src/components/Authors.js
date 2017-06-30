import React, { Component } from 'react'

import data from '../Data'
import Author from './Author'

class Authors extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authors: []
    }
  }

  componentDidMount () {
    data
      .getAuthors()
      .then(authors => {
        this.setState({ authors: authors })
      })
  }

  render () {
    let authors = this.state.authors.map(author => (
      <Author key={author.id} author={author} />
    ))
    return (
      <div>
        <h1>Authors page</h1>
        {authors}
      </div>
    )
  }
}

export default Authors
