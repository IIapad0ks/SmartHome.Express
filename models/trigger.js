var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var triggerSchema = new Schema({
	name: String,
	setValue: Number,
	condition: Number,
	device: {
		type: ObjectId,
		ref: 'devices'
	},
	sensor: {
		type: ObjectId,
		ref: 'devices'
	},
	action: {
		type: ObjectId,
		ref: 'triggers'
	}
});

module.exports = mongoose.model('triggers', triggerSchema);