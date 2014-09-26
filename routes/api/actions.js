var express = require('express');
var mongoose = require('mongoose');
var Action = require('../models/action');

var router = express.Router();

// GET actions/
router.get('/', function(req, res) {
	Action.find().exec(function(err, actions){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(actions);
	});
});

// GET actions/5
router.get('/:id', function(req, res){
	Action.findById(req.params.id).exec(function(err, action){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(action);
	});
});

// POST /action
router.post('/', function(req, res){
	var action = new Action(req.body);

	action.save(function(err, newAction){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(newAction);
	});
});

// PUT action/
router.put('/', function(req, res){
	Action.FindByIdAndUpdate(req.body.id, req.body).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

// DELETE action/5
router.delete('/:id', function(req, res){
	Action.FindByIdAndRemove(req.params.id).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

module.exports = router;