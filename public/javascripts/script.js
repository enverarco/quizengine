
/*document.getElementById("testFunction").addEventListener("click", function(){
  console.log("this is a test function");
});*/

/* var encrypted = CryptoJS.AES.encrypt("Q1A3Q2A1Q3A2Q4A2Q5A2Q6A5", "Secret Passphrase");
alert(encrypted.toString());
var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
alert(decrypted.toString(CryptoJS.enc.Utf8)); */

//alert("question page number is " + questions[1].pageNo );

var myURL = window.location.href;
//alert(myURL);


var q1 = myURL.charAt(33);
var q2 = myURL.charAt(37);
var q3 = myURL.charAt(41);
var q4 = myURL.charAt(45);
var q5 = myURL.charAt(49);
var q6 = myURL.charAt(53);

/*console.log("q1 is " + q1);
console.log("q2 is " + q2);
console.log("q3 is " + q3);
console.log("q4 is " + q4);
console.log("q5 is " + q5);
console.log("q6 is " + q6);*/

var quote = localStorage.getItem('quote') || 0;
var quotestrfromURL = myURL.split('m')[1];

if (window.location.href.indexOf("m") > -1)
{
  quotestrfromURL = parseInt(quotestrfromURL, 10);
  quote = parseInt(quote);
  quote += quotestrfromURL
  //alert("quote string from url is " + quotestrfromURL);
  //alert("quote is " + quote);
}

var breakdownString = localStorage.getItem('breakdownString') || "";

//if(window.location.href = "http://localhost:7000/results")

  var myReq = document.getElementById("requirements");
  myReq.value = breakdownString;

  var myQuote = document.getElementById("quotePara");
  myQuote.value = quote;




if (breakdownString != ""){
  for (var i = 3; i < 24; i += 4) {
    document.getElementById("question" + i).innerHTML = breakdownString.charAt(i);
    console.log('i is ' + i)
  }
}

else{
    document.getElementById("question3").innerHTML = q1;
    document.getElementById("question7").innerHTML = q2;
    document.getElementById("question11").innerHTML = q3;
    document.getElementById("question15").innerHTML = q4;
    document.getElementById("question19").innerHTML = q5;
    document.getElementById("question23").innerHTML = q6;
}



/*
divide the question and answer by number of questions a1 a2 a3 q1 q2 abcdefg

call function to get breakdown string and parse it out and gets the results

creat function in express, when you hit results / whatever that id is, results/:resultid
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


var shareLink = window.location.href + "/" + breakdownString + "m" + quote
document.getElementById("shareLink").value = shareLink;

function shareLink() {
  alert(window.location.href + "/" + breakdownString + "m" + quote)
}

function copyText() {
  var copyText = document.getElementById("shareLink"); /* Get the text field */
  copyText.select();   /* Select the text field */
  document.execCommand("copy"); /* Copy the text inside the text field */
}

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

var breakdown = {total: 0};
function increaseQuote(value,questionNo,answerNo) {
  
  quote = parseInt(quote);
  quote +=value;
  document.getElementById("quote").innerHTML = "" + quote;
  console.log("value is " + value);
  console.log("question number is " + questionNo);
  console.log("answer number is " + answerNo);

  //push the image
  //puhs the question title
  questionNo.toString();
  answerNo.toString();
  /*breakdown.total += value;
  breakdown[questionNo] = {answer: answerNo, value: value};
  localStorage.setItem("breakdown", JSON.stringify(breakdown));
  breakdown = JSON.parse(localStorage.getItem("breakdown"));

  FormData();*/

  breakdownString = breakdownString.concat('Q')
  breakdownString = breakdownString.concat(questionNo);
  breakdownString = breakdownString.concat('A')
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
