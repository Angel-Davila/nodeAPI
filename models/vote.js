const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    teamId: {
        required: true,
        type: String
    },
    gameplay: {
        required: true,
        type: Number
    },
    music: {
        required: true,
        type: Number
    },
    design: {
        required: true,
        type: Number
    },
    story: {
        required: true,
        type: Number
    },
    difficulty: {
        required: true,
        type: Number
    },
    commentary: {
        required: false,
        type: String
    }
});
const Vote = mongoose.model('vote', VoteSchema);

module.exports = Vote;