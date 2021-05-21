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
        console.log(cpuPattern);
    }
    
});

// Get id from clicked buttons here
$(".btn").on("click", function(event){
 var playerKey = event.target.id;
});


// function for the game to create a random sequence 

function newSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomKey = keys[randomNumber];
  cpuPattern.push(randomKey);
  
};



