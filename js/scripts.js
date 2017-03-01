//Back-end logic:
// function Player(playerName, roundScore, totalScore) {
//   this.playerName = playerName;
//   this.roundScore = roundScore;
//   this.totalScore = totalScore;
// }
var roll = [];
var totalScoreArray = [];
var rollValue = [];
var total = 0;
var roundTotal = [];
function Roll(roll) {
  this.roll = roll
};
Roll.prototype.addRoll = function(roll) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  return this.roll
};
//Front-end logic:
$(document).ready(function() {

  $("#holdButton").click(function() {
    console.log(totalScoreArray);
    for (var i = 0; i < totalScoreArray.length; i += 1) {
      roundTotal = total += totalScoreArray[i];
    }
    if (roundTotal >= 100) {
      $("#totalScore").text(roundTotal + ": You won Pig Dice!");
      // roundTotal = [];
    } else {
      $("#totalScore").text(roundTotal);
    }
    $("#roundTotal").children().remove();
    totalScoreArray = [];
  });

  $("#rollForm").submit(function() {
    event.preventDefault();
    var newRoll = new Roll(roll);
    rollValue = newRoll.addRoll();
    if (rollValue === 1) {
      rollValue = 0;
      totalScoreArray = [];
      $("#roundTotal").children().remove();
      $("#roundTotal").append("<li>" + "1: Your turn is over! Press hold to pass." + "</li>");
    } else {
      $("#roundTotal").append("<li>" + rollValue + "</li>");
    }
    totalScoreArray.push(rollValue);
  });

});
