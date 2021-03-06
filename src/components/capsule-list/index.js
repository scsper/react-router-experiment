import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CapsuleList extends React.Component {
  renderCapsules() {
    return this.props.capsuleIds.map(capsuleId => (
      <li key={capsuleId}>
        <Link to={this.props.match.url + `/${capsuleId}`}>{capsuleId}</Link>
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
  console.log('capsule list props')

  console.log(ownProps)

  const teamId = ownProps.teamId

  return {
    capsuleIds: state.teams[teamId].capsuleIds,
  }
}

export default connect(mapStateToProps)(CapsuleList)
