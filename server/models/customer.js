var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customerSchema = mongoose.Schema({
   firstname: String,
   lastname: String,
   email: String
});

module.exports = mongoose.model('Customer', customerSchema);