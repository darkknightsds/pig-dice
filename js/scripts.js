//Back-end logic:
// function Player(playerName, roundScore, totalScore) {
//   this.playerName = playerName;
//   this.roundScore = roundScore;
//   this.totalScore = totalScore;
// }
var roll = [];
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
  $("#rollForm").submit(function() {
    event.preventDefault();
    var newRoll = new Roll(roll);
    console.log(newRoll);
      if (newRoll.addRoll() === 1) {
        $("#roundTotal").append("<li>" + "Your turn is over!" + "</li>");
      } else {
        $("#roundTotal").append("<li>" + newRoll.addRoll() + "</li>");
      }
  });
});
