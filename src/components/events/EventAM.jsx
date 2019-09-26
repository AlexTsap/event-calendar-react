import React, {Component} from 'react';
import axios from 'axios';
import style from './Event.module.css';

class EventAM extends Component {
    // Initialize the state
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getEvents();
    }

    // Retrieves the list of items from the Express app
    getEvents = () => {
        axios.get('/api/events')
            .then(res => {
              const events = res.data;
              this.setState({events});
            })
    };

    render() {
        return (
            <div className={style.calendarWrapperLeft}>
                <ul>
                    {this.state.events.map((event, index) => {
                      return (
                          <li key={index}><p>{event.title}</p></li>
                      )
                    })}
                </ul>
            </div>
        );
    }
}

export default EventAM;
