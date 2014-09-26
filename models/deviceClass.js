var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceClassSchema = new Schema({
	name: String
});

module.exports = mongoose.model('deviceClasses', deviceClassSchema);