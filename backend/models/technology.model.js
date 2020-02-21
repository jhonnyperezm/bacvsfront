const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TechnologySchema = new Schema({
    name: {type: String, maxlength: 50},
    description: {type: String},
    logo: {type: String},
    tags: [{type: String}]
}, {timestamp: {createdAt: true, updatedAt: true}});

module.exports = mongoose.model('Technology', TechnologySchema);
