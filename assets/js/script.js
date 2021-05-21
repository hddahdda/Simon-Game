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
    }
    
});