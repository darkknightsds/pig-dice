//Back-end logic:
var roll = [];
var roundScore = [];
var roundScore2 = [];
var rollValue;
var gameTotal;
var player1Total = 0;
var player2Total = 0;
var currentRoll;
var player1Array =[];
var player2Array = [];
var player1Roll = new Roll();
var player2Roll = new Roll();
function Roll(roll) {
  this.roll = roll;
};
Roll.prototype.addRoll = function() {
  var min = Math.ceil(1);
  var max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//Front-end logic:
$(document).ready(function() {
  $("#rollForm").submit(function() {
    event.preventDefault();
    if (player1Array.length > player2Array.length) {
      currentRoll = player2Roll
    } else {
      currentRoll = player1Roll
    }
    rollValue = currentRoll.addRoll();
    if (currentRoll === player1Roll && rollValue === 1) {
      rollValue = 0;
      roundScore = [];
      $("#roundTotal").children().remove();
      $("#roundTotal").append("<li>" + "1: Your turn is over! Press hold to pass." + "</li>");
      $("#rollButton").hide();
    } else if (currentRoll === player1Roll) {
      $("#roundTotal").append("<li>" + rollValue + "</li>");
    } else if (currentRoll === player2Roll && rollValue === 1) {
      rollValue = 0;
      roundScore = [];
      $("#roundTotal").children().remove();
      $("#roundTotal").append("<li>" + "1: Your turn is over! Press hold to pass." + "</li>");
      $("#rollButton").hide();
    } else {
      $("#roundTotal").append("<li>" + rollValue + "</li>");
    }
    roundScore.push(rollValue);
    console.log(roundScore);
  });
  $("#holdButton").click(function() {
    event.preventDefault();
    console.log(currentRoll === player1Roll);
    for (var i = 0; i < roundScore.length; i ++) {
      if (currentRoll === player1Roll) {
        gameTotal = player1Total += roundScore[i];
      } else {
        gameTotal = player2Total += roundScore[i];
      }
    }
    console.log(gameTotal);
    if (currentRoll === player1Roll && gameTotal >= 100) {
        $("#player1Score").text(gameTotal + ": You won Pig Dice!");
      } else if (currentRoll === player1Roll) {
        $("#player1Score").text(gameTotal);
        player1Array.push(gameTotal);
      } else if (currentRoll === player2Roll && gameTotal >= 100) {
        $("#player2Score").text(gameTotal + ": You won Pig Dice!")
      } else {
        $("#player2Score").text(gameTotal);
        player2Array.push(gameTotal);
      }
    $("#roundTotal").children().remove();
    $("#rollButton").show();
    roundScore = [];
  });
});
