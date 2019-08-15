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
    title: "Question 1",
    description: "This is the description for question 1",
    href: "http://localhost:7000/question/2",
    answers : [
      {
        title: "Answer 1",
        value: "",
        imageURL: "http://placehold.it/400x300",
      },
      {
        title: "Answer 2",
        value: "",
        imageURL: "http://placehold.it/400x300",
      },
      {
        title: "Answer 3",
        value: "",
        imageURL: "http://placehold.it/400x300",
      }
    ]
  },
  {
      title: "Question 2",
      description: "This is the description for question 2",
      href: "http://localhost:7000/question/3",
      answers : [
        {
          title: "Answer 1",
          value: "",
          imageURL: "http://placehold.it/400x300",
        },
        {
          title: "Answer 2",
          value: "",
          imageURL: "http://placehold.it/400x300",
        }

      ]
    },
    {
        title: "Question 3",
        description: "This is the description for question 3",
        href: "http://localhost:7000/question/4",
        answers : [
          {
            title: "Answer 1",
            value: "",
            imageURL: "http://placehold.it/400x300",
          },
          {
            title: "Answer 2",
            value: "",
            imageURL: "http://placehold.it/400x300",
          },
          {
            title: "Answer 3",
            value: "",
            imageURL: "http://placehold.it/400x300",
          },
          {
            title: "Answer 4",
            value: "",
            imageURL: "http://placehold.it/400x300",
          }

        ]
      },
      {
          title: "Question 4",
          description: "This is the description for question 4",
          href: "http://localhost:7000/question/5",
          answers : [
            {
              title: "Answer 1",
              value: "",
              imageURL: "http://placehold.it/400x300",
            },
            {
              title: "Answer 2",
              value: "",
              imageURL: "http://placehold.it/400x300",
            },
            {
              title: "Answer 3",
              value: "",
              imageURL: "http://placehold.it/400x300",
            },
            {
              title: "Answer 4",
              value: "",
              imageURL: "http://placehold.it/400x300",
            },
            {
              title: "Answer 5",
              value: "",
              imageURL: "http://placehold.it/400x300",
            }

          ]
        },
        {
            title: "Question 5",
            description: "This is the description for question 5",
            href: "http://localhost:7000/question/6",
            answers : [
              {
                title: "Answer 1",
                value: "",
                imageURL: "http://placehold.it/400x300",
              },
              {
                title: "Answer 2",
                value: "",
                imageURL: "http://placehold.it/400x300",
              },
              {
                title: "Answer 3",
                value: "",
                imageURL: "http://placehold.it/400x300",
              },
              {
                title: "Answer 4",
                value: "",
                imageURL: "http://placehold.it/400x300",
              },
              {
                title: "Answer 5",
                value: "",
                imageURL: "http://placehold.it/400x300",
              },
              {
                title: "Answer 6",
                value: "",
                imageURL: "http://placehold.it/400x300",
              }

            ]
          },
          {
              title: "Question 6",
              description: "This is the description for question 6",
              href: "http://localhost:7000/results",
              answers : [
                {
                  title: "Answer 1",
                  value: "",
                  imageURL: "http://placehold.it/400x300",
                },
                {
                  title: "Answer 2",
                  value: "",
                  imageURL: "http://placehold.it/400x300",
                },
                {
                  title: "Answer 3",
                  value: "",
                  imageURL: "http://placehold.it/400x300",
                },
                {
                  title: "Answer 4",
                  value: "",
                  imageURL: "http://placehold.it/400x300",
                },
                {
                  title: "Answer 5",
                  value: "",
                  imageURL: "http://placehold.it/400x300",
                }

              ]
            }
];



/* GET home page. */
router.get('/:questionId', function(req, res, next) {
  res.render('pages/question', {question: questions[req.params.questionId - 1]});
});

function redirecttonextQuestion(questionNumber){
  if(questionNumber == 0){
    window.open("http://localhost:7000/question/3");
    console.log("question1");
  }
  else if(questionNumber == 1){
      window.open("http://localhost:7000/question/4");
      console.log("question2");
  }
  else if(questionNumber == 2){
      window.open("http://localhost:7000/question/5");
      console.log("question3");
  }
  else if(questionNumber == 4){
      window.open("http://localhost:7000/question/6");
      console.log("question4");
  }
}

module.exports = router;
