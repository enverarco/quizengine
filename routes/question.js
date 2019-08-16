var express = require('express');
var router = express.Router();

// var questions = [
//   question1: {
//     title: "Question 1",
//     answers: [
//       {
//         title: "Answer 1",
//         value: "",
//         imageURL: "",
//       }
//     ]
//   },
//   question2: {}
//   ...
// ]

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
      },
      {
        title: "Answer 2",
        value: "400",
        imageURL: "../images/circleicons/compass.svg",
      },
      {
        title: "Answer 3",
        value: "300",
        imageURL: "../images/circleicons/crown.svg",
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
        },
        {
          title: "Answer 2",
          value: "500",
          imageURL: "../images/circleicons/chat.svg",
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
          },
          {
            title: "Answer 2",
            value: "200",
            imageURL: "../images/circleicons/flask.svg",
          },
          {
            title: "Answer 3",
            value: "300",
            imageURL: "../images/circleicons/idea.svg",
          },
          {
            title: "Answer 4",
            value: "200",
            imageURL: "../images/circleicons/diamond.svg",
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
            },
            {
              title: "Answer 2",
              value: "100",
              imageURL: "../images/web/flag.svg",
            },
            {
              title: "Answer 3",
              value: "200",
              imageURL: "../images/web/folder.svg",
            },
            {
              title: "Answer 4",
              value: "300",
              imageURL: "../images/web/download.svg",
            },
            {
              title: "Answer 5",
              value: "200",
              imageURL: "../images/web/laptop.svg",
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
              },
              {
                title: "Answer 2",
                value: "200",
                imageURL: "../images/web/profile.svg",
              },
              {
                title: "Answer 3",
                value: "200",
                imageURL: "../images/web/profile.svg",
              },
              {
                title: "Answer 4",
                value: "200",
                imageURL: "../images/web/profile.svg",
              },
              {
                title: "Answer 5",
                value: "200",
                imageURL: "../images/web/profile.svg",
              },
              {
                title: "Answer 6",
                value: "200",
                imageURL: "../images/web/profile.svg",
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
                },
                {
                  title: "Answer 2",
                  value: "200",
                  imageURL: "../images/web/profile.svg",
                },
                {
                  title: "Answer 3",
                  value: "200",
                  imageURL: "../images/web/profile.svg",
                },
                {
                  title: "Answer 4",
                  value: "200",
                  imageURL: "../images/web/profile.svg",
                },
                {
                  title: "Answer 5",
                  value: "200",
                  imageURL: "../images/web/profile.svg",
                }

              ]
            }
];



/* GET home page. */
router.get('/:questionId', function(req, res, next) {
  res.render('pages/question', {question: questions[req.params.questionId - 1]});
});


module.exports = router;
