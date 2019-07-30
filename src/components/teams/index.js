import React from 'react'
import { Route } from 'react-router-dom'
import TeamNav from './nav'
import Team from './team'

class Teams extends React.Component {
  render() {
    return (
      <div>
        <TeamNav />

        <Route path="/:teamId" exact component={Team} />
      </div>
    )
  }
}

export default Teams
