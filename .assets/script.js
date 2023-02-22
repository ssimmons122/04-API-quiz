var ul = document.createElement("ul");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementByID("startBtn")[0];
body.appendChild(button);

// 3. Add event handler
startBtn.addEventListener('click', startBtn);
  alert("Start Quiz");



//timer variables 
var timer = document.querySelector("#startBtn");
var liveTime = document.querySelector("#liveTime");
var questionsDiv = document.querySelector("#questionsDiv");
var interval = 0;
//start timer, 15 sec/question
var secondsLeft = 75; 
//when wrong answer
var handicap = 10;
var ulCreate = document.createElement("ul");


// add timer here
timer.addEventListener('click', function () {
    if (interval === 0) {
        interval = setInterval(function () {
            secondsLeft--;
            liveTime.textContent = "Time: " + secondsLeft;
    
            if (secondsLeft <= 0) {
                clearInterval(interval);
                allDone();
                liveTime.textContent = "Expired!";
            }
        }, 1000);
    }
    render(questionIndex);
    
let timer = document.querySelector("#startBtn");
let secondsLeft = 75;
timer.textContent = secondsLeft;
let interval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;
      if (secondsLeft === 0) {
        clearInterval(interval);
        }
    }, 1000);
})

function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    //new questions
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // correct answer 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct!";
            // incorrect answer 
        } else {
            // take 10 seconds off time 
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Incorrect!";
        }

    }
}          

function allDone() {
    clearInterval(interval);
    liveTime.textContent = "Time's up!";
}

var score = 0;
var questionIndex = 0;


  
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


