import React, { Component } from 'react'

import Book from './Book'
import data from '../Data'
import Helpers from '../utilities/Helpers'

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: [],
      authors: []
    }
  }
  componentDidMount () {
    data
      .getBooks()
      .then(books => {
        const maxElements = 3
        // books = books.sort((b1, b2) => b1.date < b2.date) // sort by date
        books = Helpers.sortElements(books, 'date', 'descending')
        books = Helpers.getElements(books, maxElements)

        data
          .getAuthors()
          .then(authors => {
            this.setState({
              books: books,
              authors: authors
            })
          })
      })
  }

  render () {
    let authorName = 'No Author!'
    let books = this.state.books.map(book => {
      for (let i = 0; i < this.state.authors.length; i += 1) {
        if (book.authorId === this.state.authors[i].id) {
          authorName = this.state.authors[i].name
          break
        }
      }
      return <Book key={book.id} book={book} authorName={authorName} page='home' />
    })

    return (
      <div>
        <h1>Welcome to the Book Library</h1>
        <div>
          {books}
        </div>
      </div>
    )
  }
}

export default HomePage
