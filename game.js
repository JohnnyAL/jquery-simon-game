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
  checkAnswer();
}

//check answer
function checkAnswer() {
  let counter = 0;
  for (let i = 0; i < userPattern.length; i++) {
    if (userPattern[i] === gamePattern[i]) {
      counter++;
    } else {
      let gameover = new Audio("sounds/wrong.mp3");
      gameover.play();

      $("body").addClass("game-over");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("h1").html("Game over <br> Press any key to restart");

      startOver();
    }
  }
  if (counter === gamePattern.length) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
    userPattern = [];
  }
}

//start game over
function startOver() {
  level = 0;
  gamePattern = [];
  userPattern = [];
  started = false;
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
