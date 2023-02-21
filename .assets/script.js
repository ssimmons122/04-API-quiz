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
    

//timer variables 
    var currentTime = document.querySelector("#currentTime");
    var timer = document.querySelector("#startTime");
    var questionsDiv = document.querySelector("#questionsDiv");
   
//question variables 
    let q = {
        inquiry: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctOption: 3,
    };

//define object
let question = {
    inquiry: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctOption: 3,
};


//call function for question
function askQuestion (q) {
        let inquiryDiv = document.getElementById('inquiry');
        inquiryDiv.textContent = q.inquiry;


let option = document.querySelectorAll('.options');
  console.log(option);
  option.forEach(function(options, index){
    element.textContent = q.options[index];
    
    //element.addEventListener('click', function(){
        
      });
    };
  
  //call the function
function askQuestion(question)
    askQuestion(question);


  //add event listener to button
  let button = document.getElementById('button');
button.addEventListener('click', function () {
        console.log('Clicked!');
     if (q.correctOption == index) {
        console.log('Correct!');
       } else {
            console.log('Incorrect!');
          }
    });
 




