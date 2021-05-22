// variables

const keys = ["key1", "key2", "key3", "key4"];
let gameOn = false;
let cpuPattern = [];
let playerPattern = [];
let level = 0;

// if start button is clicked, start the game

$("#button").click(function() {
    if(!gameOn) {
        $("h3").text("Game Started!")

      gameOn = true;
      newSequence();
      checkGame();
    }

});

// Get id from clicked buttons here
$(".btn").on("click", function(event){
 var playerKey = event.target.id; // collecting the id from the key pressed and storing it
playerPattern.push(playerKey); // pushing the value from the playerKey in to the playePattern variable

sound(playerKey); // calling the sound function when the key is clicked
keyDown(playerKey); // changing button styling when the key is clicked

checkGame(playerPattern - 1);
});
// function for the game to create a random sequence 

function newSequence() {
 playerPattern = [];

level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomKey = keys[randomNumber];
  cpuPattern.push(randomKey);

 keyDown(randomKey);
 sound(randomKey);
}

// sound and key styling functions

function sound(keyAudio) {
  var audio = new Audio("assets/sounds/" + keyAudio + ".m4a");
  setTimeout(function(){
      audio.play()
  },100) 

  // temporarily shortened files using timeout. 
}

// when the key is triggered (either by computer or human), this function creates inline styling using jQuery.
function keyDown(keyStyle) {
    $("#" + keyStyle).css({
        'background-color': 'blue',
        'box-shadow': 'green'
    });
// By using setTimeout the styling only applies for 1000ms, 
    setTimeout(function(){
        $("#" + keyStyle).css({
        'background-color': '', // removed styling by using a empty string
        'box-shadow': ''
    });
    }, 700); // for how long the styling will be applied
};

// preliminary checkGame function
function checkGame(){
    if(playerPattern.length === cpuPattern.length) {
        $("h3").text("good job!");
        $("h1").css("color", "green");
    
        setTimeout(function(){
            newSequence();
        },1000) 
    } else {
        console.log("wrong! your final score is:" + level);
        let gameOn = false;
        
        $("#button").text("Try again?"); {
            console.log("restart game");
        } 
        let level = 0;
        let cpuPattern = [];
        let playerPattern = [];

        newSequence();
        checkGame();
    }

}

// note, script isn't rendering in github.