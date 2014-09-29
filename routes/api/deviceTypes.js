var express = require('express');
var mongoose = require('mongoose');
var DeviceType = require('../../models/deviceType');

var router = express.Router();

// GET deviceTypes/
router.get('/', function(req, res) {
	DeviceType.find().populate('class').exec(function(err, deviceTypes){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(deviceTypes);
	});
});

// GET deviceTypes/5
router.get('/:id', function(req, res){
	DeviceType.findById(req.params.id).populate('class').exec(function(err, deviceType){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(deviceType);
	});
});

// POST /deviceType
router.post('/', function(req, res){
	var deviceType = new DeviceType(DeviceType.getFromBody(req.body));

	deviceType.save(function(err, deviceType){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(deviceType.populate('class'));
	});
});

// PUT deviceType/
router.put('/', function(req, res){
	var deviceType = DeviceType.getFromBody(req.body);
	DeviceType.findByIdAndUpdate(deviceType._id, deviceType).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

// DELETE deviceType/5
router.delete('/:id', function(req, res){
	DeviceType.findByIdAndRemove(req.params.id).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

module.exports = router;