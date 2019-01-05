const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VotingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    vote: Boolean
});

module.exports = mongoose.model('vote', VotingSchema);