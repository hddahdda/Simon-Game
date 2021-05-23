/* jshint esversion: 6 */
/* globals $:false */

// variables

const keys = ["key1", "key2", "key3", "key4"];
let gameOn = false;
let cpuPattern = [];
let playerPattern = [];
let level = 0;

// if start button is clicked, call the function bottomPushed
$("#button").click(function() { 
   buttonPushed();
});

function buttonPushed(){ 
 if(!gameOn) { 
        $("h2").text(""); // removes rules from game as the game is played
        $(".btndiv").addClass("invisible"); // removes the start button 
 
      gameOn = true; // Game is On
      newSequence(); // Calling functions 
      checkGame();
    }
}

// Get id from clicked buttons here
$(".btn").on("click", function(event){
 var playerKey = event.target.id; // collecting the id from the key pressed and storing it
playerPattern.push(playerKey); // pushing the value from the playerKey in to the playePattern variable

sound(playerKey); // calling the sound function when the key is clicked
keyDown(playerKey); // changing button styling when the key is clicked

checkGame(playerPattern.length- 1); 
});

// function for the game to create a random sequence 
function newSequence() {
 playerPattern = [];

level++;
  var randomNumber = Math.floor(Math.random() * 4); // The game part
  var randomKey = keys[randomNumber];
  cpuPattern.push(randomKey);


 keyDown(randomKey);
 sound(randomKey);
}

// sound and key styling functions

function sound(keyAudio) {
  var audio = new Audio("assets/sounds/" + keyAudio + ".m4a");
  setTimeout(function(){
      audio.play();
  },100);

  // temporarily shortened files using timeout. 
}

// when the key is triggered (either by computer or human), this function creates inline styling using jQuery.
function keyDown(keyStyle) {
    $("#" + keyStyle).css('background-color', "rgba(232, 230, 211, 0.73)"); //keeping this inline styling as it it a styling that goes upo another class

// By using setTimeout the styling only applies for 1000ms, 
    setTimeout(function(){
        $("#" + keyStyle).css('background-color', '');
    }, 500); // for how long the styling will be applied
}

// Checking game sequence against user sequence 
function checkGame(checker){
    if(playerPattern[checker] === cpuPattern[checker]){
        $("h2").text("Level " + level);
        $("h1").addClass("good");
    if (cpuPattern.length === playerPattern.length) {
        setTimeout(function(){
            newSequence();
        },1000);
     }
    } else {
        $("h2").text("Game Over, Final level: " + level);
        $("#button").text("Restart");
        $(".btndiv").removeClass("invisible");
        newGame();
        
    }

}
// Refreshes the Game
function newGame(){
    $("button").click(function(){
        location.reload();
    });
}