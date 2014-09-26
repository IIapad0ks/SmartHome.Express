var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceTypeSchema = new Schema({
	name: String,
	needTimeControl: Boolean,
	hasValue: Boolean,
	symbol: String,
	minValue: Number,
	maxValue: Number,
	deviceClass: {
		type: ObjectId,
		ref: 'deviceClasses'
	}
});

module.exports = mongoose.model('deviceTypes', deviceTypeSchema);