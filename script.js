// Global constants
let clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global variables
var pattern = []; //storing secret patterns of clues
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var score = 0;

var minButtons = 5;
var maxButtons = 8;
var currentButtons = 5;
var nextButtonNumber = 6;
var trackingAttempts = 3;

var startingTime = 0;
var timer = currentButtons * 10;
var timeLeftNumber = document.querySelector(".timeLeftNumber");
var time;
var speed = document.querySelector("#speed");


//////////////////////Timer
function countDownTimer() {
  var minutes = Math.floor(timer / 60);
  var seconds = timer % 60;
  var second1 = Math.floor(seconds / 10);
  var second2 = seconds % 10;

  timer--;
  timeLeftNumber.innerHTML = `${minutes}:${second1}${second2}`;
  // updated 3/8
  if (seconds + minutes == 0) {
    timeLeftNumber.innerHTML = `$0:00`;
    resetTimer();
    loseGame();
  }
}

function resetTimer() {
  startingTime = 0;
  timeLeftNumber.textContent = "0:00";
}
/////////////////////////////
function startGame() {
  //initialize game variables
  var speedChoice = speed.value;
  setClueTime(speedChoice);
  timer = currentButtons * 10;
  time = setInterval(countDownTimer, 1000);
  progress = 0;
  resetAttempts();
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  randomPattern();
  playClueSequence();
}

// function that generates random secret pattern from 1 to max # of buttons
function randomPattern() {
  for (let i = 1; i <= currentButtons; i++) {
    pattern.push(Math.ceil(Math.random() * currentButtons));
    console.log(pattern);
    // pattern.push(1);
  }
}

function stopGame() {
  gamePlaying = false;
  clueHoldTime = 1000;
  pattern = [];
  resetTimer();
  resetAttempts();
  resetScore();
  clearInterval(time);
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}
// Calling startGame and stopGame functions
var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startGame);

var startBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click", stopGame);

// this is the function to play sound when the sequence is played.
function playTone(btn, len) {
  switch (btn) {
    case 1:
      var s1 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound1.mp3?v=1648087910951");
      s1.play();
      break;
    case 2:
      var s2 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound2.mp3?v=1648087915422");
      s2.play();
      break;
    case 3:
      var s3 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound3.mp3?v=1648087919481");
      s3.play();
      break;
    case 4:
      var s4 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound4.mp3?v=1648087923205");
      s4.play();
      break;
    case 5:
      var s5 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound5.mp3?v=1648087926713");
      s5.play();
      break;
    case 6:
      var s6 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound6.mp3?v=1648087930862");
      s6.play();
      break;
    case 7:
      var s7 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound7.mp3?v=1648087936288");
      s7.play();
      break;
    case 8:
      var s8 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound8.mp3?v=1648087940071");
      s8.play();
      break;
  }
}

// this is the function to play sound when user clicks
function startTone(btn) {
  if (!tonePlaying) {
    switch (btn) {
      case 1:
        var s1 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound1.mp3?v=1648087910951");
        s1.play();
        break;
      case 2:
        var s2 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound2.mp3?v=1648087915422");
        s2.play();
        break;
      case 3:
        var s3 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound3.mp3?v=1648087919481");
        s3.play();
        break;
      case 4:
        var s4 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound4.mp3?v=1648087923205");
        s4.play();
        break;
      case 5:
        var s5 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound5.mp3?v=1648087926713");
        s5.play();
        break;
      case 6:
        var s6 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound6.mp3?v=1648087930862");
        s6.play();
        break;
      case 7:
        var s7 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound7.mp3?v=1648087936288");
        s7.play();
        break;
      case 8:
        var s8 = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/sound8.mp3?v=1648087940071");
        s8.play();
        break;
    }
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  var loseSound = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/fail-trumpet-01.mp3?v=1648280009308");
  loseSound.onplaying = function () {
    alert("Game Over, you lost!");
  };
  loseSound.play();
  // setTimeout(() => alert("Game Over, you lost!"), 50);
}
function winGame() {
  stopGame();
  var winSound = new Audio("https://cdn.glitch.global/1aa229e0-3228-4012-b5ee-861f10af57ff/victory.mp3?v=1648087944470");
  winSound.onplaying = function () {
    alert("Congrats, you won!");
  };
  winSound.play();
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // add game logic here
  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!

        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        score++;
        // clueHoldTime -= 100; // this is replaced with speed selector instead
        updateScoreLabel();
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    decreaseAttempts();
    //GAME OVER: LOSE!
  }
}
// get button innerHTML
var btn = this.innerHTML;
var scoreNumber = document.querySelector(".scoreNumber");

function updateScoreLabel() {
  scoreNumber.innerHTML = score;
}

function resetScore() {
  score = 0;
  scoreNumber.innerHTML = score;
}

if (guess == btn) {
  // if (progress == pattern.length - 1) {
  //GAME OVER: WIN!
  console.log(playerScore++);
}


var buttonList = document.querySelector("#gameButtonArea");

// function addButtons() {
//   buttonList.innerHTML += `<button id="button1" onclick="guess(1)" onmousedown="startTone(1)"></button>`;
// }

var add = document.querySelector(".addButtons");
var del = document.querySelector(".removeButtons");

add.addEventListener("click", addButtons);
del.addEventListener("click", removeButtons);

function addButtons() {
  if (currentButtons < maxButtons) {
    currentButtons++;
    buttonList.innerHTML += `<button id="button${nextButtonNumber}" onclick="guess(${nextButtonNumber})" onmousedown="startTone(${nextButtonNumber})"></button>`;
    nextButtonNumber++;
  }
}

function removeButtons() {
  if (currentButtons > minButtons) {
    currentButtons--;
    nextButtonNumber--;
    buttonList.removeChild(buttonList.lastChild);
  }
}

function decreaseAttempts() {
  var attemptsLeft = document.querySelector(".attemptsNumber");
  console.log(trackingAttempts);
  if (trackingAttempts > 1) {
    trackingAttempts--;
    attemptsLeft.removeChild(attemptsLeft.lastChild);
  } else {
    attemptsLeft.removeChild(attemptsLeft.lastChild);
    loseGame();
  }
}

function resetAttempts() {
  var attemptsLeft = document.querySelector(".attemptsNumber");
  trackingAttempts = 3;
  attemptsLeft.innerHTML = `<i class="fa-solid fa-heart"></i>`;
  attemptsLeft.innerHTML += `<i class="fa-solid fa-heart"></i>`;
  attemptsLeft.innerHTML += `<i class="fa-solid fa-heart"></i>`;
}


function setClueTime(choice) {
  if (choice == "fast") {
    clueHoldTime = 600
  } else if (choice == "faster") {
    clueHoldTime = 200
  } else {
    clueHoldTime = 1000
  }
}