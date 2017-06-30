import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Author extends Component {
  render () {
    let author = this.props.author

    return (
      <div className='author'>
        <div>
          Name: <span>{author.name}</span>
        </div>
        <div>
          <img src={author.image} alt='authorImg' width='150' height='150' />
        </div>
        <div>
          <Link to={`/authors/${author.id}`}>Details</Link>
        </div>
        <br />
      </div>
    )
  }
}

export default Author
