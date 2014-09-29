var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceTypeSchema = new Schema({
	name: String,
	needTimeControl: Boolean,
	hasValue: Boolean,
	symbol: String,
	minValue: Number,
	maxValue: Number,
	class: {
		type: Schema.ObjectId,
		ref: 'deviceClasses'
	}
});

deviceTypeSchema.statics = {
	getFromBody: function(deviceType){
		if(typeof(deviceType.class) === "object"){
			deviceType.class = deviceType.class._id;
		}

		return deviceType;
	}
}

module.exports = mongoose.model('deviceTypes', deviceTypeSchema);