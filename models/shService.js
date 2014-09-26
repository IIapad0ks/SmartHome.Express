var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shServiceSchema = new Schema({
	name: String,
	isOn: Boolean
});

module.exports = mongoose.model('shServices', shServiceSchema);