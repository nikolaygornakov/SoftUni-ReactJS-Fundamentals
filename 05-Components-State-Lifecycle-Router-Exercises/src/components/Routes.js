import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'
import PageNotFound from './PageNotFound'
import Books from './Books'
import Details from './Details'
import Authors from './Authors'
import AuthorDetails from './AuthorDetails'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/books/all' component={Books} />
      <Route path='/books/:id' component={Details} />
      <Route path='/authors/all' component={Authors} />
      <Route path='/authors/:id' component={AuthorDetails} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes
