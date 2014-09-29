var express = require('express');
var mongoose = require('mongoose');
var DeviceClass = require('../../models/deviceClass');

var router = express.Router();

// GET deviceClasss/
router.get('/', function(req, res) {
	DeviceClass.find().exec(function(err, deviceClasss){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(deviceClasss);
	});
});

// GET deviceClasss/5
router.get('/:id', function(req, res){
	DeviceClass.findById(req.params.id).exec(function(err, deviceClass){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(deviceClass);
	});
});

// POST /deviceClass
router.post('/', function(req, res){
	var deviceClass = new DeviceClass(req.body);

	deviceClass.save(function(err, deviceClass){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(deviceClass);
	});
});

// PUT deviceClass/
router.put('/', function(req, res){
	DeviceClass.findByIdAndUpdate(req.body._id, req.body).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

// DELETE deviceClass/5
router.delete('/:id', function(req, res){
	DeviceClass.findByIdAndRemove(req.params.id).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

module.exports = router;