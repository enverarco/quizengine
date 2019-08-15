
var quote =0;


function displayQuote() {
  //quote = localStorage.getItem("saveQuote");
  document.getElementById("quote").innerHTML = "Quote: " + quote;
  console.log(quote);
}

function increaseQuote() {
  quote +=100;
  document.getElementById("quote").innerHTML = "Quote: " + quote;
  console.log(quote);
  //localStorage.setItem("saveQuote", quote);
}

function goBack() {
  window.history.back();
}


document.getElementById("startBtn").addEventListener("click", function(){
  location.href = "http://localhost:7000/question/1";
});

/*




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
