import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Versions from '../versions'
import ConfigAndSecrets from '../config-and-secrets'
import CapsuleNav from '../capsule-nav'

class Capsule extends React.Component {
  render() {
    return (
      <div>
        <CapsuleNav match={this.props.match} />

        <Route
          path={this.props.match.url}
          exact
          render={routeProps => <Redirect to={routeProps.match.url + '/versions'} />}
        />

        <Route
          path={this.props.match.url + '/versions'}
          exact
          render={routeProps => (
            <Versions teamId={this.props.capsule.teamId} capsuleId={this.props.capsule.capsuleId} />
          )}
        />
        <Route path={this.props.match.url + '/configs-and-secrets'} exact component={ConfigAndSecrets} />
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
