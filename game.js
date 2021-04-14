let buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userPattern = [];

//next sequence
function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);

  $(`#${randomColor}`).fadeOut(100).fadeIn(100);

  playSound(randomColor);
}

//click event
$(".btn").click(handleClick);

function handleClick() {
  let userChosenColor = $(this).attr("id");
  userPattern.push(userChosenColor);
  console.log(userPattern);

  playSound(userChosenColor);
}

//play sound
function playSound(name) {
  let sound = new Audio(`sounds/${name}.mp3`);
  sound.play();
}
