gameSequence = [];
keyDiv = ["key1", "key2", "key3", "key4"];

function gamePlay () {
 var numberRandom = Math.floor(Math.random() * 4);
 var keyRandom = keyDiv[numberRandom];
 gameSequence.push(keyRandom);
}


// Audio files to keys.

let key1 = $("#key1").click(function () {
   var key1Audio =  new Audio("assets/sounds/key1.m4a")
   key1Audio.play();
});

let key2 = $("#key2").click(function () {
   var key2Audio =  new Audio("assets/sounds/key2.m4a")
   key2Audio.play();
});

let key3 = $("#key3").click(function () {
   var key3Audio =  new Audio("assets/sounds/key3.m4a")
   key3Audio.play();
});


let key4 = $("#key4").click(function () {
   var key4Audio =  new Audio("assets/sounds/key4.m4a")
   key4Audio.play();
});




