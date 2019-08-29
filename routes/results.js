var express = require('express');
var router = express.Router();
var body = require('body-parser');
var nodemailer = require('nodemailer');

let questions = require('./questions.json');

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
  res.render('pages/results', {question: questions});
});

router.get('/:resultsId', function(req, res, next) {
  console.log("Results Id: ", req.params.resultsId);
  // Step1 : break out into questionid and answer id
  var myURL = req.params.resultsId;
  var answersRegex = /[A-Z]/gi;
  var answersFound = myURL.match(answersRegex);

  //var questionRegex = /[1-99]/gi;
  //var questionsFound = myURL.match(questionRegex);

  console.log("answers found is ", answersFound);
  //console.log("question found is ", questionsFound);
  //alert(myURL);
  console.log("question length is ", questions[1].answers[1].title);

  for (var i = 0; i < answersFound.length; i++) {
    answersFound[i] = answersFound[i].charCodeAt(0) - 97;
  }

  console.log("answers found is ", answersFound);


  var results = [];
  for (var i = 0; i < answersFound.length; i++) {
      results.push( {
        question: questions[i].title,
        answer: questions[i].answers[answersFound[i]].title,
        value: questions[i].answers[answersFound[i]].value,
        imageURL: questions[i].answers[answersFound[i]].imageURL
      } );
  }

  console.log("results is ", results);

/*  let results = [{
        question: "Question 1",
        answer: "This is the anser for question 1",
        value: 450,
        imageURL: "../images/web/laptop.svg"
    },
    {
        question: "Question 2",
        answer: "This is the anser for question 2",
        value: 450,
        imageURL: "../images/web/laptop.svg"
    }]; */

  res.render('pages/results', {results: results});
});




module.exports = router;
