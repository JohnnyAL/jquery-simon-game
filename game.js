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

  $(`#${randomColor}`).fadeOut(100).fadeIn(100);

  playSound(randomColor);

  level += 1;
  $("h1").text(`Level ${level}`);
}

//click event
$(".btn").click(handleClick);

function handleClick() {
  let userChosenColor = $(this).attr("id");
  userPattern.push(userChosenColor);
  console.log(userPattern);

  playSound(userChosenColor);
  animatePress(userChosenColor);
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
