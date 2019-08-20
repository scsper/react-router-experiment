import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Capsule from './capsule'
import CapsuleList from '../capsule-list'

class Team extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.team.name}</h1>

        <CapsuleList match={this.props.match} teamId={this.props.team.id} />
        <Route path={this.props.match.url + '/:capsuleId'} exact component={Capsule} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const teamId = ownProps.match.params.teamId

  return {
    team: state.teams[teamId],
  }
}

export default connect(mapStateToProps)(Team)
