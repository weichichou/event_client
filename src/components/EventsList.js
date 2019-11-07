import React from 'react'
import {Link} from 'react-router-dom'

export default class EventsList extends React.Component {
    render(){
        const list = this.props.events.map(event => {
            return <h5 key={event.id}>
                   <Link to={`/events/${event.id}`} >
                     {event.name}
                   </Link>
                  </h5>
        })

        return(
            <div>
                {list}
            </div>
        )
    }
}