let buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userPattern = [];

//start the game
let started = false;
let level = 0;

$(document).keydown(startGame);

function startGame() {
  if (!started) {
    nextSequence();
    // $("h1").text(`Level ${level}`);
    started = true;
  }
}

//next sequence
function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);
  console.log(`gamePattern: ${gamePattern}`);

  $(`#${randomColor}`).fadeOut(100).fadeIn(100);

  playSound(randomColor);

  level++;
  $("h1").text(`Level ${level}`);
}

//user clicks button
$(".btn").click(handleClick);

function handleClick() {
  let userChosenColor = $(this).attr("id");
  userPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userChosenColor);
}

//check answer
function checkAnswer(userChosenColor) {
  let counter = 0;
  for (let i = 0; i < userPattern.length; i++) {
    if (userPattern[i] === gamePattern[i]) {
      counter++;
    } else {
      console.log("game over");
    }
  }
  if (counter === gamePattern.length) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
    userPattern = [];
  }
}

//play sound
function playSound(name) {
  let sound = new Audio(`sounds/${name}.mp3`);
  sound.play();
}

//animate button click
function animatePress(color) {
  $(`#${color}`).addClass("pressed");

  setTimeout(function () {
    $(`#${color}`).removeClass("pressed");
  }, 100);
}
