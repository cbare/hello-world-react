import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { matchPath } from 'react-router'

class Animals extends React.Component {
  render() {
    return (
      <div>
        <h1>Animals</h1>
        <ul>
          <li><Link to="/animals/dog">dog</Link></li>
          <li><Link to="/animals/cat">cat</Link></li>
          <li><Link to="/animals/moose">moose</Link></li>
          <li><Link to="/animals/sea-monkey">sea monkey</Link></li>
        </ul>

        <p>{ this.props.match.params.animal }</p>

      </div>);
  }
}

export default Animals = withRouter(Animals)
