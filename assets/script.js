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