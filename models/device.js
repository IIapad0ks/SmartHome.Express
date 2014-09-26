var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
	name: String,
	value: Number,
	isOn: Boolean,
	fastAccess: Boolean,
	workingTime: Number,
	room: {
		type: ObjectId,
		ref: 'rooms'
	},
	type: {
		type: ObjectId,
		ref: 'deviceTypess'
	}
});

module.exports = mongoose.model('devices', deviceSchema);