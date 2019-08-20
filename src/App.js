import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/home'
import Teams from './components/pages/teams'
import Team from './components/pages/team'
import Capsule from './components/pages/capsule'
import Docs from './components/pages/docs'
import PageNav from './components/page-nav'
import './app.css'

// `/teams/:teamId/capsules/:capsuleId` needs to be first in the route list because it's more specific.
// if we try to put `exact`, then the app gives us 404 not found
function App() {
  return (
    <Router>
      <div className="app-container">
        <PageNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/docs" exact component={Docs} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/teams/:teamId/capsules/:capsuleId" component={Capsule} />
          <Route path="/teams/:teamId" component={Team} />
          <Route component={() => '404 Not Found'} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
