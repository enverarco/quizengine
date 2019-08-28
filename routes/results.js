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

var questions = [{
  title: "How many pages will you need?",
  description: "ie. how it works, contact us, team, about, press, terms, FAQ, hiring",
  href: "http://localhost:7000/question/2",
  pageNo: "1",
  answers : [
    {
      title: "Answer 1",
      value: "200",
      imageURL: "../images/circleicons/cloudy.svg",
      answerNo: "1",
    },
    {
      title: "Answer 2",
      value: "400",
      imageURL: "../images/circleicons/compass.svg",
      answerNo: "2",
    },
    {
      title: "Answer 3",
      value: "300",
      imageURL: "../images/circleicons/crown.svg",
      answerNo: "3",
    }
  ]
},
{
  title: "Question 2",
  description: "This is the description for question 2",
  href: "http://localhost:7000/question/3",
  pageNo: "2",
  answers : [
    {
      title: "Answer 1",
      value: "300",
      imageURL: "../images/web/browser-10.svg",
      answerNo: "1",
    },
    {
      title: "Answer 2",
      value: "500",
      imageURL: "../images/circleicons/chat.svg",
      answerNo: "2",
    }

  ]
},
{
  title: "Question 3",
  description: "This is the description for question 3",
  href: "http://localhost:7000/question/4",
  pageNo: "3",
  answers : [
    {
      title: "Answer 1",
      value: "400",
      imageURL: "../images/circleicons/calendar.svg",
      answerNo: "1",
    },
    {
      title: "Answer 2",
      value: "200",
      imageURL: "../images/circleicons/flask.svg",
      answerNo: "2",
    },
    {
      title: "Answer 3",
      value: "300",
      imageURL: "../images/circleicons/idea.svg",
      answerNo: "3",
    },
    {
      title: "Answer 4",
      value: "200",
      imageURL: "../images/circleicons/diamond.svg",
      answerNo: "4",
    }

  ]
},
{
  title: "Question 4",
  description: "This is the description for question 4",
  href: "http://localhost:7000/question/5",
  pageNo: "4",
  answers : [
    {
      title: "Answer 1",
      value: "500",
      imageURL: "../images/web/home.svg",
      answerNo: "1",
    },
    {
      title: "Answer 2",
      value: "100",
      imageURL: "../images/web/flag.svg",
      answerNo: "2",
    },
    {
      title: "Answer 3",
      value: "200",
      imageURL: "../images/web/folder.svg",
      answerNo: "3",
    },
    {
      title: "Answer 4",
      value: "300",
      imageURL: "../images/web/download.svg",
      answerNo: "4",
    },
    {
      title: "Answer 5",
      value: "200",
      imageURL: "../images/web/laptop.svg",
      answerNo: "5",
    }

  ]
},
{
  title: "Question 5",
  description: "This is the description for question 5",
  href: "http://localhost:7000/question/6",
  pageNo: "5",
  answers : [
    {
      title: "Answer 1",
      value: "200",
      imageURL: "../images/web/profile.svg",
      answerNo: "1",
    },
    {
      title: "Answer 2",
      value: "200",
      imageURL: "../images/web/profile.svg",
      answerNo: "2",
    },
    {
      title: "Answer 3",
      value: "200",
      imageURL: "../images/web/profile.svg",
      answerNo: "3",
    },
    {
      title: "Answer 4",
      value: "200",
      imageURL: "../images/web/profile.svg",
      answerNo: "4",
    },
    {
      title: "Answer 5",
      value: "200",
      imageURL: "../images/web/profile.svg",
      answerNo: "5",
    },
    {
      title: "Answer 6",
      value: "200",
      imageURL: "../images/web/profile.svg",
      answerNo: "5",
    }

  ]
},
{
  title: "Question 6",
  description: "This is the description for question 6",
  href: "http://localhost:7000/results",
  pageNo: "6",
  answers : [
    {
      title: "Answer 1",
      value: "200",
      imageURL: "../images/web/profile.svg",
      answerNo: "1",
    },
    {
      title: "Answer 2",
      value: "200",
      imageURL: "../images/web/profile.svg",
      answerNo: "2",
    },
    {
      title: "Answer 3",
      value: "200",
      imageURL: "../images/web/profile.svg",
      answerNo: "3",
    },
    {
      title: "Answer 4",
      value: "200",
      imageURL: "../images/web/profile.svg",
      answerNo: "4",
    },
    {
      title: "Answer 5",
      value: "200",
      imageURL: "../images/web/profile.svg",
      answerNo: "5",
    }

  ]
}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/results', {question: questions});
});

router.get('/:resultsId', function(req, res, next) {
  console.log("Results Id: ", req.params.resultsId);
  // Step1 : break out into questionid and answer id
  // Get the values for those ids (title, value)
  // put them into the results array
  //let results = [];

  let results = [{
        question: "Question 1",
        answer: "This is the anser for question 1",
        value: 450,
        imageURL: "https://blah.com"
    },
    {
        question: "Question 2",
        answer: "This is the anser for question 2",
        value: 450,
        imageURL: "https://blah.com"
    }];

  res.render('pages/results', {results: results});
});



module.exports = router;
