var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('You are so cool');
});

router.get('/cool/beach', function(req, res, next) {
  res.send('Adoro Praia');
});

router.get('/ifc', function(req, res, next) {
  res.send('Bem Vindo ao IFC');
});
module.exports = router;
