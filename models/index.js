const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.temples = require('./temples.js')(mongoose);
db.contacts = require('./contacts.js')(mongoose);

module.exports = db;
