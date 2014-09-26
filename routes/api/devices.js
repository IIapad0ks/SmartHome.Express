var express = require('express');
var mongoose = require('mongoose');
var Device = require('../models/device');

var router = express.Router();

// GET devices/
router.get('/', function(req, res) {
	Device.find().exec(function(err, devices){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(devices);
	});
});

// GET devices/5
router.get('/:id', function(req, res){
	Device.findById(req.params.id).exec(function(err, device){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(device);
	});
});

// POST /device
router.post('/', function(req, res){
	var device = new Device(req.body);

	device.save(function(err, newDevice){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(newDevice);
	});
});

// PUT device/
router.put('/', function(req, res){
	Device.FindByIdAndUpdate(req.body.id, req.body).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

// DELETE device/5
router.delete('/:id', function(req, res){
	Device.FindByIdAndRemove(req.params.id).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

module.exports = router;