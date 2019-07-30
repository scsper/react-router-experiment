import React from 'react'
import { connect } from 'react-redux'
import Capsule from './capsule'
import { Route, Link } from 'react-router-dom'

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
  return {
    capsuleIds: state.teams[ownProps.teamId].capsuleIds,
  }
}

export default connect(mapStateToProps)(Capsules)
