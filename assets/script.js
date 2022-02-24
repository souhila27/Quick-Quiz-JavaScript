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
function checkAnswer(elem) {
    // This removes the focus on the button after clicking
    if (elem.textContent != myQuestions[currentQuestion].correctAnswer) {
        currentTime = currentTime - 5;
    }

    currentQuestion = currentQuestion + 1;

    if (currentQuestion >= myQuestions.length) {
        gameOver();
    } else {
        generateQuestion();
    }
}
function checkTime(elem) {
    if (currentQuestion == myQuestions.length) {
        clearInterval(elem);

    } else if (currentTime <= 0) {
        time.textContent = 0;
        currentTime = 0;
        clearInterval(elem);
        gameOver();
    }
}

// function resetQuiz() {
//     var user_initials = document.querySelector("#user_initials").value;

//     localStorage.setItem("highScore", currentTime);
//     localStorage.setItem(user_initials, currentTime);
// }


function gameOver() {
    /*
    // happy path
    if they answer all the questions
    get time left from timer
    show it as the score
    ask the user for initials
    save score and initials to high scores

    //unhappy path
    timer hit zero, they get no points
    alert a box that says you lose



*/

    // stop the timer - done
    // get the time left 
    var score = currentTime;
    // -- unhide our intialsSection
    // reach into the html to grab the form
    // change the forms style display to block
    var initFormEl = document.querySelector(".iniform");
    initFormEl.style.display = "block";

    // reach into the html get the submit button
    
    function submitBtnEl() {
       var user_initials = document.querySelector("#user_initials").value;
        localStorage.setItem("highScore", currentTime);
        localStorage.setItem(user_initials, currentTime);
        
    }
    // add and event listent to the submitbutton
    // submitBtnEl.addEventListener('click', function () {

    // }
    // -- event.preventDefault()
    // -- reach into the thml and get the input box value
    var initialsElement = document.querySelector('#user_initials')
    // -- add it to some variable

    // at that point you should ave a var w/ the score 
    // and a var that holds the initials




    // var score_list = document.querySelector(".score-list");
    // var clearClick = document.querySelector("#clearScores");

    // for (var i = 0; i < localStorage.length; i++) {
    //     // This checks to make sure that the high score stored in local storage is not displayed on the high score list.
    //     if (localStorage.key(i) != "highScore") {
    //         var item = document.createElement("li");
    //         item.textContent = localStorage.key(i) + " - " + localStorage.getItem(localStorage.key(i));
    //         score_list.appendChild(item);
    //     }
    // }

    // // This clears the local storage and reloads the page.
    // clearClick.addEventListener("click", function () {
    //     localStorage.clear();
    //     location.reload();
    // })
};