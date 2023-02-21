let btn = document.querySelector ("#btn");
btn.addEventListener('click', function (askQuestion) {
    console.log('Start');
});
// add timer here
function startTimer() { 
    let timer = document.querySelector("#startTime");
    let secondsLeft = 75;
    timer.textContent = secondsLeft;
    let interval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(interval);
        }
    }, 1000);
}

var score = 0;
var questionIndex = 0;

//timer variables 
    var timer = document.querySelector("#startTime");
    var liveTimer = document.querySelector("#liveTime");
    var questionsDiv = document.querySelector("#questionsDiv");
    //start timer, 15 sec/question
    var secondsLeft = 75; 
    //when wrong answer
    var handicap = 10;
    var ulCreate = document.createElement("ul");
   
//question variables 
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "3. parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "3. parenthesis"],
        answer: "1. quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console log"],
        answer: "4. console log"
    },

];


//call function for question
let option = document.querySelectorAll('.options');
  console.log(option);
  option.forEach(function(options, index){
    element.textContent = q.options[index];
    
    });
   
  
 //add event listener to button
 timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});
 




