
/* var encrypted = CryptoJS.AES.encrypt("Q1A3Q2A1Q3A2Q4A2Q5A2Q6A5", "Secret Passphrase");
alert(encrypted.toString());
var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
alert(decrypted.toString(CryptoJS.enc.Utf8)); */

var myURL = window.location.href;
var quote = localStorage.getItem('quote') || 0;
var quotestrfromURL = myURL.split('-')[1];

if (window.location.href.indexOf("-") > -1)
{
  quotestrfromURL = parseInt(quotestrfromURL, 10);
  quote = parseInt(quote);
  quote = quotestrfromURL;
}

var breakdownString = localStorage.getItem('breakdownString') || "";
var breakdownArray = JSON.parse(localStorage.getItem("breakdownArray")) || [];

console.log("breakdownArray starts as " + JSON.stringify(breakdownArray));

var endurlRegex = /[1-3]/;
var endurlFound = myURL.match(endurlRegex);
console.log("endurlFound is " + endurlFound);
endurlFound = parseInt(endurlFound);
var endurldoubled = endurlFound + endurlFound;
var endurltripled = endurlFound + endurlFound + endurlFound;
console.log("endurldoubled is " + endurldoubled);
console.log("breakdownArray legnth is " + breakdownArray.length);

//question page is going to have a fucntion on load called Populate BreakdownArray
//which will populate the breakdownarray up to the question.no
// question 1 will have a max length of 0
//question 2 will have max length of 2
//question 3 will have max length of 3
function PopulateBreakdownArray(){
  breakdownArray.length= endurlFound -1;
/*  if (endurlFound == 1){
  breakdownArray.pop(3);
}*/

  breakdownString = breakdownString.substring(0, endurldoubled);
  console.log("breakdown string has been appended to " + breakdownString);
}


//provides the breakdownString in the form so it can be sent via the form
var myReq = document.getElementById("requirements");
myReq.value = breakdownString;
//provides the quote in the form so it can be sent via the form
var myQuote = document.getElementById("quotePara");
myQuote.value = quote;

//triggered on results page as on click on share link button
function shareLink() {
  var shareLink = window.location.href
  document.getElementById("shareLink").value = shareLink;
  console.log("share link is " + shareLink);
}

//function to copy text for modal on share button
function copyText() {
  var copyText = document.getElementById("shareLink"); /* Get the text field */
  copyText.select();   /* Select the text field */
  document.execCommand("copy"); /* Copy the text inside the text field */
}

//displays the quote in top right corner on question.ejs
function displayQuote() {
  document.getElementById("quote").innerHTML = "" + quote;
  console.log("quote is " + quote);
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

//trigger when the user selects an answer, increments quote
//appends question and answer number to breakdown string
//and sets the href to the results page with the breakdown string for the last question
function increaseQuote(value,questionno,answerno) {
  quote = parseInt(quote);
  quote +=value;
  document.getElementById("quote").innerHTML = "" + quote;
  console.log("value is " + value);
  console.log("question number is " + questionno);
  console.log("answer number is " + answerno);
  answerno = (answerno + 9).toString(36);
  answerno = answerno.toUpperCase();
  console.log("new answerno is " +   answerno);
  breakdownString = breakdownString.concat(questionno);
  breakdownString = breakdownString.concat(answerno);
  localStorage.setItem("quote", quote);
  localStorage.setItem("breakdownString", breakdownString);
  console.log("value of breakdown string is " + breakdownString);
  //changes the href of the answers at the last question so that they point to the results page
  //with breakdownstring + quote

  breakdownArray.push( {
    questionno,
    answerno,
    value
  } );

  console.log("value of breakdown array is " + JSON.stringify(breakdownArray));

  localStorage.setItem("breakdownArray", JSON.stringify(breakdownArray));

  var stringifiedbreakdownArray = JSON.stringify(breakdownArray);
  console.log("stringifiedbreakdownArray is " + stringifiedbreakdownArray);
  //var afterComma = stringifiedbreakdownArray.substr(stringifiedbreakdownArray.indexOf("questionno") + 3); // Contains 24 //
  //stringifiedbreakdownArray = stringifiedbreakdownArray.replace(/{},:/g, '');
  console.log("stringifiedbreakdownArray replace is " + stringifiedbreakdownArray)
  var stringifiedbreakdownArrayRegex = /[0-9A-Z]/g;
  var stringifiedbreakdownArrayFound = stringifiedbreakdownArray.match(stringifiedbreakdownArrayRegex);
  stringifiedbreakdownArrayFound = stringifiedbreakdownArrayFound.toString().replace(/,/g , "");
  stringifiedbreakdownArrayFound = stringifiedbreakdownArrayFound.toString().toLowerCase();

//stringifiedbreakdownArrayFound = stringifiedbreakdownArrayFound.match(stringifiedbreakdownArrayRegex);
  console.log("stringifiedbreakdownArrayFound is " + stringifiedbreakdownArrayFound);




  var elements = document.getElementsByClassName("gotoResults");
    for(var i=0; i<elements.length; i++) {
      //elements[i].href ="http://localhost:7000/results/" + breakdownString + "-" + quote;
      //elements[i].href ="http://localhost:7000/results/" + stringifiedbreakdownArrayFound + "-" + quote;
      elements[i].href ="http://localhost:7000/results/" + stringifiedbreakdownArrayFound;
    }
}

//reveals the breakdown of answers at results page
function breakdownReveal() {
  var breakdownReveal = document.getElementById("breakdownDIV");
    if (breakdownReveal.style.display === "none") {
      breakdownReveal.style.display = "block";
    } else {
      breakdownReveal.style.display = "none";
    }
}

function goBack() {
  //breakdownString = breakdownString.slice(0, -2);
  //localStorage.setItem("breakdownString", breakdownString);
  window.history.back();
}

function startQuiz() {
  localStorage.clear();
  location.href = "http://localhost:7000/question/1";
}
