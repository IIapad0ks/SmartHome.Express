var express = require('express');
var mongoose = require('mongoose');
var SHService = require('../models/shService');

var router = express.Router();

// GET shServices/
router.get('/', function(req, res) {
	SHService.find().exec(function(err, shServices){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(shServices);
	});
});

// GET shServices/5
router.get('/:id', function(req, res){
	SHService.findById(req.params.id).exec(function(err, shService){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(shService);
	});
});

// POST /shService
router.post('/', function(req, res){
	var shService = new SHService(req.body);

	shService.save(function(err, newSHService){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(newSHService);
	});
});

// PUT shService/
router.put('/', function(req, res){
	SHService.FindByIdAndUpdate(req.body.id, req.body).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

// DELETE shService/5
router.delete('/:id', function(req, res){
	SHService.FindByIdAndRemove(req.params.id).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

module.exports = router;