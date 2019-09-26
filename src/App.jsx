import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Calendar from './components/calendar/Calendar';
import './App.css';
import EventAM from "./components/events/EventAM";
import EventPM from "./components/events/EventPM";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Calendar/>
                <div className="content-wrapper">
                    <EventAM />
                    <EventPM />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
