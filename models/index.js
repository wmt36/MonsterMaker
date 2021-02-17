const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mmSchema = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    school: { type: String, required: true },
    position: { type: String, required: false },
    link: { type: String, required: false },
    sport: { type: String, required: true }
});

const DB = mongoose.model("MM", mmSchema);

module.exports = DB;