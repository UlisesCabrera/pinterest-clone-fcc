require('dotenv').load();
var ObjectID = require('mongodb').ObjectID;

var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

exports.addNewPin = function(req, res, next) {
    //connecting to the database
    MongoClient.connect(process.env.MONGOURI, function(err, db){
        assert.equal(err, null, 'Error occured while connecting to the database');
        
        var pins = db.collection('pins');
        
        // checks if book is already in the collection
        pins.find({ name: req.body.name}).toArray(function(err, docs){
          assert.equal(err, null,'Error finding pin');
          //if found, advise user to change name
          if (docs.length >= 1) {
            console.log('pin found');
            res.send({state:'failure', book: null, message:'Pin is already on the collection, please change the name of the pin'});
          } else {
                pins.insertOne(req.body, function(err, result){
                  assert.equal(err, null,'error inserting pin');
                  assert.equal(result.result.ok, 1, 'problem inserting pin');
                  // and return inserted pin
                  console.log('inserted pin: ' + result.insertedCount);
                  res.send({state:'success', pin: result.ops[0], message:'New Pin Added'});
                });
        }});
        
        
    });    
};


exports.sendAllPins = function(req, res, next){
    
    //connecting to the database
    MongoClient.connect(process.env.MONGOURI, function(err, db){
        assert.equal(err, null, 'Error occured while connecting to the database');
        
        var pins = db.collection('pins');
        
        // sends books to client
        pins.find({}).toArray(function(err, docs){
          assert.equal(err, null,'Error finding pins');
          if (docs.length >= 1) {
            console.log('pins found');
            res.send({state:'success', pins: docs});
          } else {
            res.send({state:'failure', pins: null, message:'Error finding pins'});
        }});
        
        
    });
    
};


exports.sendUserPins = function(req,res,next) { 

    var userId = req.params.userId;
    
    //connecting to the database
    MongoClient.connect(process.env.MONGOURI, function(err, db){
        assert.equal(err, null, 'Error occured while connecting to the database');
        var pins = db.collection('pins');
        
        
        // sends books to client
        pins.find({'owner_id' : userId }).toArray(function(err, userPins){
          assert.equal(err, null,'Error finding pins');
          
          if (userPins.length >= 1) {
            res.send({state:'success', pins: userPins, message:'All pins found'});
            
          } 
          else {
            res.send({state:'failure', pins: null, message:'Error finding user pins'});
          }
            
        });
       
        
    });
}; 

exports.deletePin = function (req, res, next){
    MongoClient.connect(process.env.MONGOURI, function(err, db) {
        
        assert.equal(err, null, 'Error connecting to db');
        
        var pinId = req.params.pinId;
        
        // delete book from collection
        var o_id = new ObjectID(pinId);
        
        var pins = db.collection('pins');
        
        pins.deleteOne({'_id' : o_id}, function(err, result){
          
          assert.equal(err, null, 'error deleting pin');
          
          if (result.deletedCount == 0) {
            res.send({state:'failure', pin: null, message:'pin was not deleted'});
          } else {
            res.send({state:'success', pin: null, message:'pin deleted'});
          }
          
        });
        
    });  
};