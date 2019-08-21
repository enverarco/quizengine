var express = require('express');
var router = express.Router();
var body = require('body-parser');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'webenquiries@mastered.ie',
    pass: 'Kaph33bean'
  }
});

router.post('', function(req, res, next) {
  console.log(req.body);
  var mailOptions = {
    from: 'webenquiries@mastered.ie',
    to: 'oisin@mastered.ie',
    subject: '😍 Contact - ' + req.body.fullname,
    html:'<h3>New Enquiry</h3><p><b>Name:</b> ' + req.body.fullname + '<br><b>Email:</b> ' + req.body.email + '<br><br><b>Description:</b> ' + req.body.message + '<br><br><b>Requirements:</b> ' + req.body.requirements  + '<br><br><b>Quote:</b> ' + req.body.quotePara + '<br></p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.render('pages/success');
      return true;
    }
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/results');
});

module.exports = router;
