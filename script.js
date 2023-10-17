
var startPageEl = document.getElementById("startPage")
var startBtn = document.querySelector(".startBtn");
var secondsLeft = 57;
var timer = document.querySelector("#timer")
var questionPageEl = document.getElementById("questionPage")
var questionTextEl = document.getElementById("questionText")
var currentQuestionIndex = 0
var questions = [
    {
        text: "Which of these is not a data type that can be stored in a variable in Javascript?", answers: ["string", "stringbean", "boolean"]
    },
    {
        text: "If the highest index number in an array is 3, what is the total number of objects in the array?", answers: ["5", "4", "6"]
    }, {
        text: "What does DOM stand for?", answers: ["Digital Orbit Mode", "Document Object Model", "Doctor Obvious Mustard"]
    }]

startBtn.addEventListener("click", function () {
    console.log("CLICKED")
    startTimer()
    stageNextQuestion()
    startPageEl.hidden = true
    questionPageEl.hidden = false
});
var startTimer = function () {
    // Sets interval in variable
    //Hides start button
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining to complete quiz.";
        console.log("this")
        if (secondsLeft === 0) {

            // Stops execution of action at set interval
            clearInterval(timerInterval);

            // Calls function to create and append image
            sendMessage();
        }
    }
        , 1000);
    function sendMessage() {
        timer.textContent = "Time's up! Pencils down!"
    }
}

function stageNextQuestion() {
    questionTextEl.textContent = questions[currentQuestionIndex].text
    var answersBtn = document.getElementById("answers").children
    for (var i = 0; i < answersBtn.length; i++) {
        var current = answersBtn[i]
        var buttonAnswer = questions[currentQuestionIndex].answers[1]
        current.textContent = questions[currentQuestionIndex].answers[i]
        current.addEventListener("click", function (e) {
            var choice = e.target.textContent
            if (choice === buttonAnswer) {
             currentQuestionIndex += 1
                stageNextQuestion()
            } else {
                //logic if wrong
            }
        })
    }

}
