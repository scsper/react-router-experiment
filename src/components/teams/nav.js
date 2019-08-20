import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class TeamNav extends React.Component {
  render() {
    const options = this.props.teams.map(team => (
      <li key={team.id}>
        <Link to={`/teams/${team.id}`}>{team.name}</Link>
      </li>
    ))

    return <ul>{options}</ul>
  }
}

function mapStateToProps(state) {
  return {
    teams: Object.values(state.teams),
  }
}

export default connect(mapStateToProps)(TeamNav)
