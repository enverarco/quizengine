var express = require('express');
var router = express.Router();

/* Success page shows after email is sent */
router.get('/', function(req, res, next) {
  res.render('pages/success');
});

module.exports = router;
