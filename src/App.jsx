import React from 'react';
import { Link } from 'react-router-dom'
import { concat, join, drop, forEach } from 'lodash'

let laser_noises = ['zap!', 'zot!', 'peew!']

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {blast: [], timers: []};
    this.activateLasers = this.activateLasers.bind(this);
    this.deactivateLasers = this.deactivateLasers.bind(this);
  }

  componentWillUnmount() {
    forEach(this.state.timers, timer => {
      clearTimeout(timer)
    })
    this.state = {blast: [], timers: []};
  }

  deactivateLasers() {
    this.setState(state => ({blast: this.state.blast.slice(1),
                             timers: drop(this.state.timers)}))
  }

  activateLasers() {
    this.setState(state => ({
      blast: concat(this.state.blast, laser_noises[Math.floor(Math.random()*3)]),
      timers: concat(this.state.timers, setTimeout(this.deactivateLasers, 2000 + 1000*(this.state.blast.length)))})
    )
  }

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello Cruel World</h1>
        <p>Check out some <Link to="/animals">animals</Link>.</p>
        <p><Link to="/jazz">Jazz</Link>.</p>
      <button onClick={this.activateLasers}>Activate Lasers</button>
      <div id="blast-zone">{join(this.state.blast, ' ')}</div>
     </div>);
  }
}
