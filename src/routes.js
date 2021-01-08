import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddMovie from './pages/AddMovie'
import SelectMovie from './pages/SelectMovie'
import NotFound from './pages/NotFound'

const Routes = (props) => {
  let { movies } = props
  return (
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/add-movie" render={() => (
            <AddMovie movies={movies} />
          )}
        />
        <Route path="/select-movie" render={() => (
            <SelectMovie />
          )}
        />
        <Route component={NotFound} />
      </Switch>
  )
}

export default Routes
