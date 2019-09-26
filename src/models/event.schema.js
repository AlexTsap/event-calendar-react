const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    start: Number,
    duration: Number,
    title: String
});

module.exports =  mongoose.model("Event", eventSchema);
