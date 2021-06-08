var timerEl = document.querySelector('.navbar-text');
var start = document.getElementById("startQuiz");
var page = document.getElementById("page-one")
var b1 = document.getElementById("c1")
var b2 = document.getElementById("c2")
var b3 = document.getElementById("c3")
var b4 = document.getElementById("c4")
var newQuest = document.getElementById('message')
var gameQuest = document.getElementById('gameQuestion')
var message = document.getElementById('correctWrong')

var i = 0;
var time = 60;
var results = 0;
var topresults = [];

// set question arrays and and answers 

var questions =[
 
{
    q1:"Which of the following is not a Javascript data type?",
    choices : ["Number" , "String" , "Equation" , "Object"],
    answer : "Equation"
  },
{
    q1:"Which company developed JavaScript?",
    choices : ["Microsoft" , "Netscape" ,"Google" , "All of the above"],
    answer : "Netscape"
  },
   {
    q1:"Javascript is?",
    choices : ["A scripting language" , "An Object-based Programming language", "Inserted into HTML pages" , "All of the above"],
    answer : "All of the above"
  },
{
    q1:"True or False: Undeclared and undefined variables are the same thing.",
    choices : ["False" , "True"],
    answer : "False"
  },
{
    q1:"What is an undefined value in JavaScript?",
    choices : ["Variable used in the code doesn't exist" , "Variable is not assigned to any value" , "Property does not exist" , "All of the above"],
    answer : "All of the above"}
  ];


// create timer

function countdown() {
    var timeLeft = 61;
  
var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " Seconds ";
    if (timeLeft=== 0){
      clearInterval(timeInterval);
      timerEl.textContent = "Times Up"
      endGame()
    
    }
    else if (i === questions.length){
      clearInterval(timeInterval);
    } 
    
   },1000);
   console.log(timeLeft);
 }

 start.addEventListener("click", function(){
    countdown ();
    game()
    start.disabled = true;
    
});

// start game
function game (){
b1.hidden = false;
b2.hidden = false;
b3.hidden = false;
b4.hidden = false;


start.hidden = true;
newQuest.hidden = true;

if (i === questions.length){
  endGame()
}
  else {
   gameQuest.textContent = questions[i]["q1"];
    b1.textContent = questions[i]["choices"][0];
    b2.textContent = questions[i]["choices"][1];
    b3.textContent = questions[i]["choices"][2];
    b4.textContent = questions[i]["choices"][3];
  }
}

function endGame (){
  gameQuest.textContent = "Thanks for taking the quiz!"
  b1.remove();
  b2.remove();
  b3.remove();
  b4.remove();
  message.textContent = 'your results '+ results;
  localStorage.setItem("results",results);
  var done = document.createElement("button")
  done.innerHTML = 'Done'
  document.body.appendChild(done);

  done.addEventListener('click', function(){
  window.location.href = 'results.html'
  })


}

// game 

b1.addEventListener('click',function(){
if (questions[i]["choices"][0] === questions[i]['answer']){
  message.textContent = "correct";
  results++
}
else{
  message.textContent = "incorrect";
  time -=10
}
i++
game();
})
b2.addEventListener('click',function(){
  if (questions[i]["choices"][1] === questions[i]['answer']){
    message.textContent = "correct";
    results++
  }
  else{
    message.textContent = "incorrect";
    time-=10
  }
  i++
game();
})
  b3.addEventListener('click',function(){
    if (questions[i]["choices"][2] === questions[i]['answer']){
      message.textContent = "correct";
      results++
    }
    else{
      message.textContent = "incorrect";
      time-=10
    }
    i++
game();
})
    b4.addEventListener('click',function(){
      if (questions[i]["choices"][3] === questions[i]['answer']){
        message.textContent = "correct";
        results++
      }
      else{
        message.textContent = "incorrect";
        time-=10
      }
      i++
game();
})
console.log(results)
