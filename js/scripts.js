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
var zero = 0;
var currentRoll;

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
  var player1Roll = new Roll();
  var player2Roll = new Roll();
  var player1Count = $("#player1Score li").length;
  var player2Count = $("player2Score li").length;
  console.log(player1Count);
  console.log(player2Count);
  $("#rollForm").submit(function() {
    event.preventDefault();
    if (player1Count > player2Count) {
      currentRoll = player2Roll
    } else {
      currentRoll = player1Roll
    }
    console.log(currentRoll === player1Roll);
    rollValue = currentRoll.addRoll();
    if (currentRoll === player1Roll && rollValue === 1) {
      rollValue = 0;
      totalScoreArray = [];
      $("#roundTotal").children().remove();
      $("#roundTotal").append("<li>" + "1: Your turn is over! Press hold to pass." + "</li>");
      $("#rollButton").hide();
    } else if (currentRoll = player1Roll) {
      $("#roundTotal").append("<li>" + rollValue + "</li>");
    } else if (currentRoll === player2Roll && rollValue === 1) {
      rollValue = 0;
      totalScoreArray = [];
      $("#roundTotal").children().remove();
      $("#roundTotal").append("<li>" + "1: Your turn is over! Press hold to pass." + "</li>");
      $("#rollButton").hide();
    } else {
      $("#roundTotal").append("<li>" + rollValue + "</li>");
    }
    totalScoreArray.push(rollValue);
    console.log(player1Count);
    console.log(player2Count);
  });
  $("#holdButton").click(function() {
    console.log(totalScoreArray);
    for (var i = 0; i < totalScoreArray.length; i += 1) {
      roundTotal = zero += totalScoreArray[i];
    }
    if (currentRoll = player1Roll && roundTotal >= 100) {
      $("#player1Score").text(roundTotal + ": You won Pig Dice!");
    } else if (currentRoll = player1Roll) {
      $("#player1Score").text(roundTotal);
    } else if (currentRoll === player2Roll && roundTotal >= 100) {
      $("#player2Score").text(roundTotal + ": You won Pig Dice!")
    } else {
      $("#player2Score").text(roundTotal);
    }
    $("#roundTotal").children().remove();
    totalScoreArray = [];
    $("#rollButton").show();
  });
  //Player 2:
  // $("#rollForm2").submit(function() {
  //   event.preventDefault();
  //   var newRoll2 = new Roll(roll2);
  //   rollValue2 = newRoll2.addRoll();
  //   if (rollValue2 === 1) {
  //     rollValue2 = 0;
  //     totalScoreArray2 = [];
  //     $("#roundTotal2").children().remove();
  //     $("#roundTotal2").append("<li>" + "1: Your turn is over! Press hold to pass." + "</li>");
  //     $("#rollButton2").hide();
  //   } else {
  //     $("#roundTotal2").append("<li>" + rollValue2 + "</li>");
  //   }
  //   console.log(rollValue2);
  //   totalScoreArray2.push(rollValue2);
  // });
  // $("#holdButton2").click(function() {
  //   console.log(totalScoreArray2);
  //   for (var i = 0; i < totalScoreArray2.length; i += 1) {
  //     roundTotal2 = total += totalScoreArray2[i];
  //   }
  //   if (roundTotal2 >= 100) {
  //     $("#totalScore2").text(roundTotal2 + ": You won Pig Dice!");
  //     // roundTotal2 = [];
  //   } else {
  //     $("#totalScore2").text(roundTotal2);
  //   }
  //   $("#roundTotal2").children().remove();
  //   totalScoreArray2 = [];
  //   $("#rollButton2").show();
  //   $("#rollForm2").hide();
  //   $("#rollForm").show();
  // });
});
