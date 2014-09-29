var express = require('express');
var mongoose = require('mongoose');
var Room = require('../../models/room');

var router = express.Router();

// GET rooms/
router.get('/', function(req, res) {
	Room.find().populate('shService').exec(function(err, rooms){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(rooms);
	});
});

// GET rooms/5
router.get('/:id', function(req, res){
	Room.findById(req.params.id).populate('shService').exec(function(err, room){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(room);
	});
});

// POST rooms/
router.post('/', function(req, res){
	var room = new Room(req.body);

	room.save(function(err, newRoom){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(newRoom.populate('shService'));
	});
});

// PUT rooms/
router.put('/', function(req, res){
	Room.findByIdAndUpdate(req.body._id, req.body).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

// DELETE rooms/5
router.delete('/:id', function(req, res){
	Room.findByIdAndRemove(req.params.id).exec(function(err){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}

		res.send(true);
	});
});

module.exports = router;