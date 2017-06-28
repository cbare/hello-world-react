import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getStore } from './store'
import { get } from 'lodash'
import styles from './styles.css'


function Musician(props) {
    return (
        <div>
            <h2>{ props.name }</h2>
            <ul>
                {props.albums.map( (album,i) => <li key={i}>{album.title}</li> ) }
            </ul>
        </div>
    )
}

function Nav(props) {
  return (
    <div id='nav'>
      <span>JAZZ</span>
      <ul>
      { props.musicians.map( (musician, i) => (
          <li key={i}><Link to={'/jazz/'+musician.nick}>{ musician.nick }</Link></li> )) }
      </ul>
    </div>
  )
}

class Jazz extends React.Component {
  render() {
    const nick = this.props.match.params.nick
    return (
      <div>
        <Nav musicians={this.props.musicians}/>
        { this.props.musicians.
            filter( musician => musician.nick===nick).
            map( (musician, i) => (
          <Musician key={i} name={musician.name} albums={musician.albums}/> )) }
        <div><Link to="/">home</Link></div>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  musicians: state.musicians || {}
})

export default withRouter(connect(mapStateToProps)(Jazz))
