var currentQuestion = 0;
var time = document.querySelector(".time");
// reach into the html, grab the start button
var startButtonElement = document.getElementById('startButton');
// reach into the html, get the element called question
var questionParagraphElement = document.querySelector('#question');
var answersEl = document.querySelector("#answers");
var finalScore = document.querySelector(".final-score");
var endOfQuizEl = document.querySelector(".end-of-quiz")
var submitInitials = document.querySelector(".initial-form");
var Contents = document.querySelector("Contents");
var myQuestions = [];
var currentTime = time.textContent;
var gameScore = 0;
var score_list = document.querySelector(".score-list");
var clearClick = document.querySelector("#clearScores");

// listen for a click on the startButton
startButtonElement.addEventListener('click', function () {
    var timerStart = setInterval(function () {
        currentTime--;
        time.textContent = currentTime;
        checkTime(timerStart);
    }, 1000)
    startButtonElement.style.display = "none";

    generateQuestion();
});
function generateQuestion() {
    // document.getElementById("score").innerText = gameScore;
    questionParagraphElement.textContent = myQuestions[currentQuestion].question;
    answersEl.innerHTML = `
        <li><button onclick="checkAnswer(this)">${myQuestions[currentQuestion].answers.one}</button></li>
        <li><button onclick="checkAnswer(this)">${myQuestions[currentQuestion].answers.two}</button></li>
        <li><button onclick="checkAnswer(this)">${myQuestions[currentQuestion].answers.three}</button></li>
        <li><button onclick="checkAnswer(this)">${myQuestions[currentQuestion].answers.four}</button></li>
        `;
}

var myQuestions = [
    {
        question: "the condition in an if statement is enclose with ________.",
        answers: {
            one: "quotes",
            two: "curly brackets",
            three: "parenthesis",
            four: "square brackets",
        },
        correctAnswer: "parenthesis",
    },
    {
        question: "Arrays in JavaScript can be used to store ___________.",
        answers: {
            one: "numbers and strings",
            two: "other arrays",
            three: "booleans",
            four: "all of the above",
        },
        correctAnswer: "all of the above",
    },

    {
        question: "String values must be enclosed within __________ when being assigned to variables",
        answers: {
            one: "commas",
            two: "curly brackets",
            three: "quotes",
            four: "parenthesis",
        },
        correctAnswer: "quotes",
    },
];
