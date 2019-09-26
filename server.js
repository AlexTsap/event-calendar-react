const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const jsonParser = express.json();
const app = express();
const EventModel = require('./src/models/event.schema');

const port = process.env.PORT || 8080;
const server = '127.0.0.1:27017';
const db = 'event-calendar';

// let newEvent = new EventModel({start: 60, duration: 30, title: 'test'});
// newEvent.save().then(event => {
//     console.log(event);
// }).catch(err => {
//     console.log(err);
// });

mongoose.connect(`mongodb://${server}/${db}`, {useNewUrlParser: true}, (err) => {
    if (err) return console.log('Connection failed:', err);

    app.listen(port, () => {
        return console.log(`App is listening on port: ${port}`);
    });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/events', (req, res) => {
    EventModel.find({}).then(events => {
        res.send(events);
    }).catch(err => {
        console.log('No documents found:', err);
    })
});

app.get('/api/events:id', (req, res) => {
    const id = req.params.id;

    EventModel.findOne({_id: id}).then(event => {
        res.send(event);
    }).catch(err => {
        console.log('No document found:', err);
    })
});

app.put('/api/events', jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const eventStart = req.body.start;
    const eventDuration = req.body.duration;
    const eventTitle = req.body.title;
    const newEvent = {start: eventStart, duration: eventDuration, title: eventTitle};

    EventModel.insert(newEvent).then(event => {
        res.send(event);
    }).catch(err => {
        console.log('No document inserted:', err);
        res.send(err);
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});
