import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddMovie from './pages/AddMovie'
import NotFound from './pages/NotFound'

function Routes() {
  return (
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/add-movie" component={AddMovie} />
        <Route component={NotFound} />
      </Switch>
  )
}

export default Routes
