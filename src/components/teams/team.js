import React from 'react'
import { connect } from 'react-redux'
import CapsuleList from './capsule-list'

class Team extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.team.name}</h1>

        <CapsuleList teamId={this.props.team.id} />
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
