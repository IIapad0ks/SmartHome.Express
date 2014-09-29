var mongoose = require('mongoose');

var dp = require('../services/deepPopulater');

var Schema = mongoose.Schema;

var deviceSchema = new Schema({
	name: String,
	value: Number,
	isOn: Boolean,
	fastAccess: Boolean,
	workingTime: Number,
	room: {
		type: Schema.ObjectId,
		ref: 'rooms'
	},
	type: {
		type: Schema.ObjectId,
		ref: 'deviceTypes'
	}
});

var populateListPath = 'room type type.class';

deviceSchema.methods = {
	getPopulated: function(cb){
		dp.deepPopulate(this, populateListPath, {}, function(err, device){
			if(err){
				cb(err);
				return;
			}

			cb(null, device);
		});
	}
};

deviceSchema.statics = {
	getPopulated: function(devices, cb){
		dp.deepPopulateAll(devices, populateListPath, {}, function(err, devices){
			if(err){
				cb(err);
				return;
			}

			cb(null, devices);
		});
	},
	getFromBody: function(device){
		if(typeof(device.room) === "object"){
			device.room = device.room._id;
		}

		if(typeof(device.type) === "object"){
			device.type = device.type._id;
		}

		return device;
	}
};

module.exports = mongoose.model('devices', deviceSchema);