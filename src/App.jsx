import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Calendar from './components/calendar/Calendar';
import './App.css';
import EventAM from "./components/events/EventAM";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Calendar/>
                <div className="content-wrapper">
                    <EventAM />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
