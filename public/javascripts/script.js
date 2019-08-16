
var quote = localStorage.getItem('quote') || 0;

function displayQuote() {
  //quote = localStorage.getItem("saveQuote");
  document.getElementById("quote").innerHTML = "" + quote;
  console.log(quote);
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


function increaseQuote(value) {
  quote = parseInt(quote);
  quote +=value;
  document.getElementById("quote").innerHTML = "" + quote;
  console.log(quote);

  localStorage.setItem("quote", quote);
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
