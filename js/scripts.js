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
    $("#totalScore").text(roundTotal);
    $("#roundTotal").children().remove();
    totalScoreArray = [];
  });

  $("#rollForm").submit(function() {
    event.preventDefault();
    var newRoll = new Roll(roll);
    rollValue = newRoll.addRoll();
    if (rollValue === 1) {
      $("#roundTotal").append("<li>" + "Your turn is over!" + "</li>");
    } else {
      $("#roundTotal").append("<li>" + rollValue + "</li>");
    }
    totalScoreArray.push(rollValue);
  });

});
