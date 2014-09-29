var express = require('express');
var mongoose = require('mongoose');
var _ = require('underscore');

var Device = require('../../models/device');

var router = express.Router();

// GET devices/
router.get('/', function(req, res) {
	Device.find().exec(function(err, devices){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		Device.getPopulated(devices, function(err, devices){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}

			res.send(devices);
		});
	});
});

// GET devices/device
router.get('/device', function(req, res){
	Device.find().exec(function(err, devices){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		Device.getPopulated(devices, function(err, devices){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}

			devices = _.filter(devices, function(device){
				return device.type.class._id == "5429100f7c8865f0b594ebe4";
			});

			res.send(devices);
		});
	});
});

// GET devices/sensor
router.get('/sensor', function(req, res){
	Device.find().exec(function(err, devices){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		Device.getPopulated(devices, function(err, devices){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}

			devices = _.filter(devices, function(device){
				return device.type.class._id == "542910167c8865f0b594ebe5";
			});

			res.send(devices);
		});
	});
});

// GET devices/room/5
router.get('/room/:id', function(req, res){
	Device.find({room: req.params.id}).exec(function(err, devices){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		Device.getPopulated(devices, function(err, devices){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}

			res.send(devices);	
		});
	});
});

// GET devices/5
router.get('/:id', function(req, res){
	Device.findById(req.params.id).exec(function(err, device){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		device.getPopulated(function(err, device){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}

			res.send(device);
		});
	});
});

// POST /device
router.post('/', function(req, res){
	var device = new Device(Device.getFromBody(req.body));

	device.save(function(err, device){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		device.getPopulated(function(err, device){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}

			res.send(device);	
		});
	});
});

// PUT device/
router.put('/', function(req, res){
	var device = Device.getFromBody(req.body);
	Device.findByIdAndUpdate(device._id, device).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

// DELETE device/5
router.delete('/:id', function(req, res){
	Device.findByIdAndRemove(req.params.id).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

module.exports = router;