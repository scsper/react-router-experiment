import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import CapsuleList from '../capsule-list'
import People from '../people'
import TeamInfo from '../team-info'
import TeamNav from '../team-nav'

class Team extends React.Component {
  render() {
    return (
      <div>
        <TeamNav match={this.props.match} />
        <h1>{this.props.team.name}</h1>

        <Route
          path={this.props.match.url}
          exact
          render={routeProps => <Redirect to={routeProps.match.url + '/capsules'} />}
        />

        <Route path={this.props.match.url + '/people'} exact component={People} />
        <Route
          path={this.props.match.url + '/capsules'}
          exact
          render={routeProps => <CapsuleList {...routeProps} teamId={this.props.match.params.teamId} />}
        />
        <Route path={this.props.match.url + '/info'} exact component={TeamInfo} />
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
