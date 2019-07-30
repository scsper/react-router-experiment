import React from 'react'
import { connect } from 'react-redux'

class Team extends React.Component {
  render() {
    return <div>This is a team {this.props.team.name}</div>
  }
}

function mapStateToProps(state, ownProps) {
  const teamId = ownProps.match.params.teamId
  return {
    team: state.teams[teamId],
  }
}

export default connect(mapStateToProps)(Team)
