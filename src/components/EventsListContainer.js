import React from 'react'
import internet from 'superagent'
import {connect} from 'react-redux'
import EventsList from './EventsList'
import {eventsFetched} from '../actions/events'

class EventsListContainer extends React.Component {
  state = { value: ''}
  
  componentDidMount() {
    console.log('mounting?')
    internet.get('http://localhost:4000/events') 
      .then(res => {
        console.log('res.body:',res.body)
        this.props.eventsFetched(res.body)
      })
  }

  render() {
    if(!this.props.events){
      return <p>Loading...</p>
    }else{
      return <EventsList events={this.props.events} />
    }
  }
}

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = {eventsFetched}

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer)