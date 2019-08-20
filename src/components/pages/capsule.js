import React from 'react'
import { connect } from 'react-redux'

class Capsule extends React.Component {
  render() {
    return (
      <div>
        <div>
          This is the {this.props.capsule.teamId}.{this.props.capsule.capsuleId} capsule
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    capsule: state.capsules[ownProps.match.params.capsuleId],
  }
}

export default connect(mapStateToProps)(Capsule)
