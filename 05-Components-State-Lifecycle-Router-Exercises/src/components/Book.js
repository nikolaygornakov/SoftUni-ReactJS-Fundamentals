import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Book extends Component {
  render () {
    let book = this.props.book
    let authorName = this.props.authorName
    let pageSet = this.props.page

    if (pageSet === 'home' || pageSet === 'all') {
      return (
        <div className='book'>
          <div>
            Title: <span>{book.title}</span>
          </div>
          <div>
            Author: <span>{authorName}</span>
          </div>
          <div>
            <Link to={`/books/${book.id}`}> Details
            </Link>
          </div>
          <br />
        </div>
      )
    } else {
      return (
        <div className='book'>
          <div>
            <img
              src={book.image}
              alt='someImg'
              width='70'
              height='70' />
          </div>
          <div>
            Title: <span>{book.title}</span>
          </div>
          <div>
            Description: <span>{book.description}</span>
          </div>
          <div>
            Author: <span>{authorName}</span>
          </div>
          <div>
            Price: <span>{book.price}</span>
          </div>
          <div>
            Comments
          </div>
          <br />
        </div>
      )
    }
  }
}

export default Book
