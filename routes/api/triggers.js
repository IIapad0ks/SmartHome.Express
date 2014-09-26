var express = require('express');
var mongoose = require('mongoose');
var Trigger = require('../models/trigger');

var router = express.Router();

// GET triggers/
router.get('/', function(req, res) {
	Trigger.find().exec(function(err, triggers){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(triggers);
	});
});

// GET triggers/5
router.get('/:id', function(req, res){
	Trigger.findById(req.params.id).exec(function(err, trigger){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(trigger);
	});
});

// POST /trigger
router.post('/', function(req, res){
	var trigger = new Trigger(req.body);

	trigger.save(function(err, newTrigger){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(newTrigger);
	});
});

// PUT trigger/
router.put('/', function(req, res){
	Trigger.FindByIdAndUpdate(req.body.id, req.body).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

// DELETE trigger/5
router.delete('/:id', function(req, res){
	Trigger.FindByIdAndRemove(req.params.id).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

module.exports = router;