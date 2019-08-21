
/*document.getElementById("testFunction").addEventListener("click", function(){
  console.log("this is a test function");
});*/

function testFunction() {
console.log("this is a test function");
}


var quote = localStorage.getItem('quote') || 0;

var breakdownString = localStorage.getItem('breakdownString') || "";



//selected answers
/*
var question1answer = breakdownString.charAt(1);
var question2answer = breakdownString.charAt(3);
var question3answer = breakdownString.charAt(5);
var question4answer = breakdownString.charAt(7);
var question5answer = breakdownString.charAt(9);
var question6answer = breakdownString.charAt(11); */
var myReq = document.getElementById("requirements");
myReq.value = breakdownString;

var myQuote = document.getElementById("quotePara");
myQuote.value = quote;

for (var i = 1; i < 12; i += 2) {
  document.getElementById("question" + i).innerHTML = breakdownString.charAt(i);
  console.log('i is ' + i)
}

/*
divide the question and answer by number of questions a1 a2 a3 q1 q2 abcdefg

call function to get breakdown string and parse it out and gets the results

creat function in express,w hen you hit results / whatever that id is, results/:resultid
then have a route that renders this page (results page) with the answers
*/


/*
breakdown = [];
var storedbreakdown = JSON.parse(localStorage.getItem("breakdown"));
*/




/*
 You need to use getItem to retrieve the old list, append to it, then save it back to localStorage:
 */

//...


function displayQuote() {
  //quote = localStorage.getItem("saveQuote");
  document.getElementById("quote").innerHTML = "" + quote;
  console.log(quote);
  //console.log("breakdown is " + breakdown);
  //console.log("stored breakdown is " + storedbreakdown);
}

function generateEstimate(){
  var inputs = document.getElementsByClassName("final-quote"),
  x=inputs.length;
  while(x--)
  quote = Math.floor(quote);
  inputs[0].innerHTML = "" + quote;
  quote *= 1.20;
  quote = Math.floor(quote);
  inputs[1].innerHTML = "" + quote;
}


function increaseQuote(value,questionNo,answerNo) {
  quote = parseInt(quote);
  quote +=value;
  document.getElementById("quote").innerHTML = "" + quote;
  console.log("value is " + value);
  console.log("question number is " + questionNo);
  console.log("answer number is " + answerNo);
  questionNo.toString();
  answerNo.toString();
  breakdownString = breakdownString.concat(questionNo);
  breakdownString = breakdownString.concat(answerNo);
  //num.toString();
  //str1.concat(str2);
  localStorage.setItem("quote", quote);
  localStorage.setItem("breakdownString", breakdownString);
  console.log("value of breakdown string is " + breakdownString);
  //localStorage.setItem("breakdown", JSON.stringify(breakdown));

}




function breakdownReveal() {

var x = document.getElementById("breakdownDIV");
//x.innerHTML = breakdownString;
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function storeAnswer(storedAns) {
  console.log(storedAns);
}

function goBack() {
  window.history.back();
}

function startQuiz() {
  localStorage.clear();
  location.href = "http://localhost:7000/question/1";
}



/*


/*

/*

document.getElementById("startBtn").addEventListener("click", function(){
  location.href = "http://localhost:7000/question/1";
});


function ButtonAction(sectionid){
  if(sectionid == '1'){
    HideShow("section1", "traits");
  }
  else if(sectionid == '2'){
    HideShow("traits", "career");
  }
  else {
    HideShow("career", "results");
    CalculateResults();
  }
}

function HideShow(sectiontoHide,sectiontoReveal){
  document.getElementById(sectiontoHide).style.display = "none";
  document.getElementById(sectiontoReveal).style.display = "block";
}*/

/*
var inputs = document.getElementsByClassName("preference"),
x=inputs.length;
while(x--)
inputs[x].addEventListener("click", function(){ ButtonAppear(button1); });
*/
