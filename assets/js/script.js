// variables

const keys = ["key1", "key2", "key3", "key4"]
let cpuPattern = [];
let playerPattern = [];
let level = 0;
let gameOn = false;

// if start button is clicked, start the game

$("#button").click(function() {
    if(!gameOn) {
        $("h3").text("Game Started!")
        gameOn = true;
        newSequence();
    }
    
});

// Get id from clicked buttons here
$(".btn").on("click", function(event){
 var playerKey = event.target.id;

playerPattern.push(playerKey);
console.log(playerPattern);

sound(playerKey);
keyDown(playerKey);
});
// function for the game to create a random sequence 

function newSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomKey = keys[randomNumber];
  cpuPattern.push(randomKey);
  
};

// sound and key styling functions

function sound(keyStyle) {
  var audio = new Audio("/assets/sounds/" + keyStyle + ".m4a");
  audio.play();
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
    }, 1000); // for how long the styling will be applied
};