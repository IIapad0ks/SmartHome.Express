var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
	name: String,
	shService: {
		type: Schema.ObjectId,
		ref: 'shServices'
	}
});

module.exports = mongoose.model('rooms', roomSchema);