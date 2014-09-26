var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var actionSchema = new Schema({
	name: String,
	canSetValue: Boolean
});

module.exports = mongoose.model('actions', actionSchema);