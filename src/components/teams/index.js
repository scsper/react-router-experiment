import React from 'react'
import { Route } from 'react-router-dom'
import TeamNav from './nav'
import Team from './team'

class Teams extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={TeamNav} />
        <Route path="/:teamId" component={TeamNav} />
        <Route path="/:teamId" component={Team} />
      </div>
    )
  }
}

export default Teams
