var express = require('express');
var mongoose = require('mongoose');
var DeviceType = require('../models/deviceType');

var router = express.Router();

// GET deviceTypes/
router.get('/', function(req, res) {
	DeviceType.find().exec(function(err, deviceTypes){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(deviceTypes);
	});
});

// GET deviceTypes/5
router.get('/:id', function(req, res){
	DeviceType.findById(req.params.id).exec(function(err, deviceType){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(deviceType);
	});
});

// POST /deviceType
router.post('/', function(req, res){
	var deviceType = new DeviceType(req.body);

	deviceType.save(function(err, newDeviceType){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(newDeviceType);
	});
});

// PUT deviceType/
router.put('/', function(req, res){
	DeviceType.FindByIdAndUpdate(req.body.id, req.body).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

// DELETE deviceType/5
router.delete('/:id', function(req, res){
	DeviceType.FindByIdAndRemove(req.params.id).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

module.exports = router;