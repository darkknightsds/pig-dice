//Back-end logic:
// function Player(playerName, roundScore, totalScore) {
//   this.playerName = playerName;
//   this.roundScore = roundScore;
//   this.totalScore = totalScore;
// }
var roll = [];
var roll2 = [];
var totalScoreArray = [];
var totalScoreArray2 = [];
var rollValue = [];
var rollValue2 = [];
var roundTotal = [];
var roundTotal2 = [];
var total = 0;

function Roll(roll) {
  this.roll = roll;
};
Roll.prototype.addRoll = function(roll) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//Front-end logic:
$(document).ready(function() {
  //Player 1:
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
    $("#rollButton").show();
    $("#rollForm").hide();
    $("#rollForm2").show();
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
      $("#rollButton").hide();
    } else {
      $("#roundTotal").append("<li>" + rollValue + "</li>");
    }
    totalScoreArray.push(rollValue);
  });
  //Player 2:
  $("#holdButton2").click(function() {
    console.log(totalScoreArray2);
    for (var i = 0; i < totalScoreArray2.length; i += 1) {
      roundTotal2 = total += totalScoreArray2[i];
    }
    if (roundTotal2 >= 100) {
      $("#totalScore2").text(roundTotal2 + ": You won Pig Dice!");
      // roundTotal2 = [];
    } else {
      $("#totalScore2").text(roundTotal2);
    }
    $("#roundTotal2").children().remove();
    totalScoreArray2 = [];
    $("#rollButton2").show();
    $("#rollForm2").hide();
    $("#rollForm").show();
  });
  $("#rollForm2").submit(function() {
    event.preventDefault();
    var newRoll2 = new Roll(roll2);
    rollValue2 = newRoll2.addRoll();
    if (rollValue2 === 1) {
      rollValue2 = 0;
      totalScoreArray2 = [];
      $("#roundTotal2").children().remove();
      $("#roundTotal2").append("<li>" + "1: Your turn is over! Press hold to pass." + "</li>");
      $("#rollButton2").hide();
    } else {
      $("#roundTotal2").append("<li>" + rollValue2 + "</li>");
    }
    totalScoreArray2.push(rollValue2);
  });
});
