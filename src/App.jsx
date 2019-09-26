import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Calendar from './components/calendar/Calendar';
import './App.css';
import Event from "./components/events/Event";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Calendar/>
                <div className="content-wrapper">
                    <Event />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
