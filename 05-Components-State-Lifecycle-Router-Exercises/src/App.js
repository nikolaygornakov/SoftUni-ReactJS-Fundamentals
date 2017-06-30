import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './components/Routes'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <Routes />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
