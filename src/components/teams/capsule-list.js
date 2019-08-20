import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Capsules extends React.Component {
  renderCapsules() {
    return this.props.capsuleIds.map(capsuleId => (
      <li>
        <Link to={`${this.props.teamId}/${capsuleId}`}>{capsuleId}</Link>
      </li>
    ))
  }
  render() {
    return (
      <div>
        <ul>{this.renderCapsules()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const teamId = ownProps.teamId

  return {
    capsuleIds: state.teams[teamId].capsuleIds,
  }
}

export default connect(mapStateToProps)(Capsules)
