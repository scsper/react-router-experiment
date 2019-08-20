import React from 'react'
import TeamNav from '../team-nav'

class Teams extends React.Component {
  render() {
    return (
      <div>
        <TeamNav match={this.props.match} />
      </div>
    )
  }
}

export default Teams
