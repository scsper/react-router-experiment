import React from 'react'
import { connect } from 'react-redux'
import Capsules from '../capsules'

class Team extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.team.name}</h1>

        <Capsules teamId={this.props.team.id} url={this.props.match.url} />
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
