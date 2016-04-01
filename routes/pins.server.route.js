var express = require('express');
var router = express.Router();
var pinsController = require('../controllers/pins.server.controller');

/* GET home page. */
router.get('/', pinsController.sendAllPins);
router.get('/:userId', pinsController.sendUserPins);
router.post('/', pinsController.addNewPin);
router.delete('/:pinId', pinsController.deletePin);


module.exports = router;