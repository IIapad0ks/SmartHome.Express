var mongoose = require('mongoose');

var dp = require('../services/deepPopulater');

var Schema = mongoose.Schema;

var triggerSchema = new Schema({
	name: String,
	value: Number,
	condition: String,
	device: {
		type: Schema.ObjectId,
		ref: 'devices'
	},
	sensor: {
		type: Schema.ObjectId,
		ref: 'devices'
	},
	action: {
		type: Schema.ObjectId,
		ref: 'actions'
	}
});

var populateListPath = 'action device device.room device.type device.type.class sensor sensor.room sensor.type sensor.type.class';

triggerSchema.methods = {
	getPopulated: function(cb){
		dp.deepPopulate(this, populateListPath, {}, function(err, trigger){
			if(err){
				cb(err);
				return;
			}

			cb(null, trigger);
		});
	}
};

triggerSchema.statics = {
	getPopulated: function(triggers, cb){
		dp.deepPopulateAll(triggers, populateListPath, {}, function(err, triggers){
			if(err){
				cb(err);
				return;
			}

			cb(null, triggers);
		});
	},
	getFromBody: function(trigger){
		if(typeof(trigger.action) === "object"){
			trigger.action = trigger.action._id;
		}

		if(typeof(trigger.device) === "object"){
			trigger.device = trigger.device._id;
		}

		if(typeof(trigger.sensor) === "object"){
			trigger.sensor = trigger.sensor._id;
		}

		return trigger;
	}
};

module.exports = mongoose.model('triggers', triggerSchema);