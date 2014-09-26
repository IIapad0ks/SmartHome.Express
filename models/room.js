var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
	name: String,
	home: {
		type: ObjectId,
		ref: 'shServices'
	}
});

module.exports = mongoose.model('rooms', roomSchema);