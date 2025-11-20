var express = require('express');
var router = express.Router();

/* Get the users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*Exports router */
module.exports = router;
