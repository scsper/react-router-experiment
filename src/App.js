import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/home'
import Teams from './components/pages/teams'
import Team from './components/pages/team'
import Capsule from './components/pages/capsule'
import Docs from './components/pages/docs'
import PageNav from './components/page-nav'
import './app.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <PageNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/docs" exact component={Docs} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/teams/:teamId" exact component={Team} />
          <Route path="/teams/:teamId/capsules/:capsuleId" exact component={Capsule} />
          <Route component={() => '404 Not Found'} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
