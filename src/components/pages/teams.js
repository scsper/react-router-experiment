import React from 'react'
import TeamPicker from '../team-picker'

class Teams extends React.Component {
  render() {
    return (
      <div>
        <TeamPicker match={this.props.match} />
      </div>
    )
  }
}

export default Teams
