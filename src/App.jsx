import React from 'react';
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello Cruel World</h1>
        <p>Check out some <Link to="/animals">animals</Link>.</p>
      </div>);
  }
}
