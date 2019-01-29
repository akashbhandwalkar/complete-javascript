var express = require('express');
var router = express.Router();
const studentController = require('../controllers').student;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({ title: 'Exprexpressess' });
});


module.exports = router;
