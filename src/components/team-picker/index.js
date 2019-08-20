import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class TeamPicker extends React.Component {
  render() {
    const options = this.props.teams.map(team => (
      <li key={team.id}>
        <Link to={this.props.match.url + `/${team.id}`}>{team.name}</Link>
      </li>
    ))

    return (
      <div>
        <ul>{options}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    teams: Object.values(state.teams),
  }
}

export default connect(mapStateToProps)(TeamPicker)
