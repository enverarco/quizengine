var myURL = window.location.href;
var quote = localStorage.getItem('quote') || 0;
var quotestrfromURL = myURL.split('-')[1];
var originalQuote = quote;

if (window.location.href.indexOf("-") > -1){
  quotestrfromURL = parseInt(quotestrfromURL, 10);
  quote = parseInt(quote);
  quote = quotestrfromURL;}

var breakdownArray = JSON.parse(localStorage.getItem("breakdownArray")) || [];

if (!breakdownArray || !breakdownArray.length || window.location.href.indexOf("-")> -1) {
  var change = document.getElementsByClassName("change");
    for(var i=0; i<change.length; i++) {
      change[i].style.display = "none"; }
}

//if breakddownarray is empty then set display of change to none

//if results is in the url then the breakdown strings equals the results URL

console.log("breakdownArray starts as " + JSON.stringify(breakdownArray));

var endurlRegex = /[1-9](?!.*\d)/;
var endurlFound = myURL.match(endurlRegex);
console.log("endurlFound is " + endurlFound);
endurlFound = parseInt(endurlFound);
var endurldoubled = endurlFound + endurlFound;
console.log("breakdownArray legnth is " + breakdownArray.length);

//question.ejs calls the function PopulateBreakdownArray() on load
//which will limit the breakdownarray the max size of the question number
// question 1's breakdownArray will have a max length of 0
//question 2's breakdownArray will have max length of 2
//question 3's breakdownArray will have max length of 3
//if edit is in the url then breakdownArray length will be unchanged
function PopulateBreakdownArray(){
  if(window.location.href.indexOf("edit") > -1) {
  }
  else{
  breakdownArray.length= endurlFound -1; }
}

//triggered on results page as on click on share link button
function ShareLink() {
  var shareLink = window.location.href
  document.getElementById("shareLink").value = shareLink + "-" + originalQuote;
  console.log("share link is " + shareLink);
}

//function to copy text for modal on share button
function CopyText() {
  var copyText = document.getElementById("shareLink"); /* Get the text field */
  copyText.select();   /* Select the text field */
  document.execCommand("copy"); /* Copy the text inside the text field */
}

//displays the quote in top right corner on question.ejs
//sets quote by adding all the values of the selected answers
function DisplayQuote() {
  quote = 0;
  for (var i = 0; i < breakdownArray.length; i++) {
  quote += parseInt(breakdownArray[i].value);
}
  document.getElementById("quote").innerHTML = "" + quote;
  console.log("quote is " + quote);
}

function GenerateEstimate(){
  var inputs = document.getElementsByClassName("final-quote"),
  x=inputs.length;
  while(x--)
    quote = Math.floor(quote);
    inputs[0].innerHTML = "" + quote;
    quote *= 1.20;
    quote = Math.floor(quote);
    inputs[1].innerHTML = "" + quote;
}

//trigger when the user selects an answer, increments quote
//appends question and answer number to breakdown string
//and sets the href to the results page with the breakdown string for the last question
function IncreaseQuote(value,questionno,answerno) {
  quote = parseInt(quote);
  //quote +=value;
  document.getElementById("quote").innerHTML = "" + quote;
  console.log("value is " + value);
  console.log("question number is " + questionno);
  console.log("answer number is " + answerno);
  answerno = (answerno + 9).toString(36); //converts answerno to a letter 1 =a, 2=b, 3=c etc
  answerno = answerno.toUpperCase();
  console.log("new answerno is " + answerno);
  localStorage.setItem("quote", quote);

/* if edit is in the url then append the breakdownArray with new answer other wise push the selected
 answer to the breakdownArray */
  if(window.location.href.indexOf("edit") > -1) {
        //Remove 1 element from index [endurlFound], and insert new answer
        breakdownArray.splice(endurlFound - 1, 1, {
        	questionno, // short for questionno: questionno
        	answerno,
        	value,
        });
  }
  else{
    breakdownArray.push( {
      questionno,
      answerno,
      value
    } );
  }

  console.log("value of breakdown array is " + JSON.stringify(breakdownArray));
  localStorage.setItem("breakdownArray", JSON.stringify(breakdownArray));
  var stringifiedbreakdownArray = JSON.stringify(breakdownArray);
  console.log("stringifiedbreakdownArray is " + stringifiedbreakdownArray);
  console.log("stringifiedbreakdownArray replace is " + stringifiedbreakdownArray)

  DisplayQuote();

  localStorage.setItem("quote", quote);
  var stringifiedbreakdownArrayRegex = /[0-9A-Z]/g;
  var stringifiedbreakdownArrayFound = stringifiedbreakdownArray.match(stringifiedbreakdownArrayRegex);
  stringifiedbreakdownArrayFound = stringifiedbreakdownArrayFound.toString().replace(/,/g , "");
  stringifiedbreakdownArrayFound = stringifiedbreakdownArrayFound.toString().toLowerCase();

  console.log("stringifiedbreakdownArrayFound is " + stringifiedbreakdownArrayFound);

  if(window.location.href.indexOf("edit") > -1) {
         var elements = document.getElementsByClassName("forward");
           for(var i=0; i<elements.length; i++) {
             elements[i].href ="http://localhost:7000/results/" + stringifiedbreakdownArrayFound; }
  }
  //the question.ejs will display answers with the class gotoResults if the quiz is on the last question
  //this loop will assign the href of that question it goes to the results page with the breakdownArray appended to the url
  var elements = document.getElementsByClassName("gotoResults");
    for(var i=0; i<elements.length; i++) {
      elements[i].href ="http://localhost:7000/results/" + stringifiedbreakdownArrayFound;  }
}

//reveals the breakdown of answers at results page
function BreakdownReveal() {
  var breakdownReveal = document.getElementById("breakdownDIV");
    if (breakdownReveal.style.display === "none") {
      breakdownReveal.style.display = "block";
    } else {
      breakdownReveal.style.display = "none";
    }
}

function GoBack() {
  window.history.back();
}

//Start the Quiz
function StartQuiz() {
  localStorage.clear();
  location.href = "/question/1";
}
