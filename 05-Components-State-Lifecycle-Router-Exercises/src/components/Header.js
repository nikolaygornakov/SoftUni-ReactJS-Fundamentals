import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div>
        <Link to='/'>Home</Link>
        &nbsp;
        <Link to='/books/all'>Books</Link>
        &nbsp;
        <Link to={`/authors/all`}>Authors</Link>
      </div>
    )
  }
}

export default Header
