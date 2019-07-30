import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Capsule extends React.Component {
  render() {
    return <Link to={`${this.props.match.path}/:capsuleId`} />
  }
}

function mapStateToProps(state, ownProps) {
  return {
    capsule: state.capsules[ownProps.capsuleId],
  }
}

export default connect(mapStateToProps)(Capsule)
