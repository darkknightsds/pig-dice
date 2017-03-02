//Back-end logic:
// function Player(playerName, roundScore, totalScore) {
//   this.playerName = playerName;
//   this.roundScore = roundScore;
//   this.totalScore = totalScore;
// }
var roll = [];
var roundScore = [];
var rollValue = [];
var gameTotal = [];
var zero = 0;
var currentRoll;
var player1Array =[];
var player2Array = [];
var player1Count = player1Array.length;
var player2Count = player2Array.length;

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
  console.log(player1Count);
  console.log(player2Count);
  $("#rollForm").submit(function() {
    event.preventDefault();
    if (player1Array.length > player2Array.length) {
      currentRoll = player2Roll
    } else {
      currentRoll = player1Roll
    }
    rollValue = currentRoll.addRoll();
    console.log(currentRoll === player1Roll);
    if (currentRoll = player1Roll && rollValue === 1) {
      rollValue = 0;
      totalScore = [];
      $("#roundTotal").children().remove();
      $("#roundTotal").append("<li>" + "1: Your turn is over! Press hold to pass." + "</li>");
      $("#rollButton").hide();
    } else if (currentRoll = player1Roll) {
      $("#roundTotal").append("<li>" + rollValue + "</li>");
    } else if (currentRoll = player2Roll && rollValue === 1) {
      rollValue = 0;
      totalScore = [];
      $("#roundTotal").children().remove();
      $("#roundTotal").append("<li>" + "1: Your turn is over! Press hold to pass." + "</li>");
      $("#rollButton").hide();
    } else if (currentRoll = player2Roll) {
      $("#roundTotal").append("<li>" + rollValue + "</li>");
    }
    roundScore.push(rollValue);
  });
  $("#holdButton").click(function() {
    console.log(currentRoll === player1Roll);
    for (var i = 0; i < roundScore.length; i += 1) {
      gameTotal = zero += roundScore[i];
    }
    if (currentRoll = player1Roll && gameTotal >= 100) {
      $("#player1Score").text(gameTotal + ": You won Pig Dice!");
    } else if (currentRoll = player1Roll) {
      $("#player1Score").text(gameTotal);
      player1Array.push(gameTotal);
    } else if (currentRoll = player2Roll && gameTotal >= 100) {
      $("#player2Score").text(gameTotal + ": You won Pig Dice!")
    } else if (currentRoll = player2Roll) {
      $("#player2Score").text(gameTotal);
      player2Array.push(gameTotal);
    }
    $("#roundTotal").children().remove();
    roundScore = [];
    $("#rollButton").show();
    console.log(player1Array.length);
    console.log(player2Array.length);
  });
  //Player 2:
  // $("#rollForm2").submit(function() {
  //   event.preventDefault();
  //   var newRoll2 = new Roll(roll2);
  //   rollValue2 = newRoll2.addRoll();
  //   if (rollValue2 === 1) {
  //     rollValue2 = 0;
  //     totalScore2 = [];
  //     $("#roundTotal2").children().remove();
  //     $("#roundTotal2").append("<li>" + "1: Your turn is over! Press hold to pass." + "</li>");
  //     $("#rollButton2").hide();
  //   } else {
  //     $("#roundTotal2").append("<li>" + rollValue2 + "</li>");
  //   }
  //   console.log(rollValue2);
  //   totalScore2.push(rollValue2);
  // });
  // $("#holdButton2").click(function() {
  //   console.log(totalScore2);
  //   for (var i = 0; i < totalScore2.length; i += 1) {
  //     roundTotal2 = total += totalScore2[i];
  //   }
  //   if (roundTotal2 >= 100) {
  //     $("#totalScore2").text(roundTotal2 + ": You won Pig Dice!");
  //     // roundTotal2 = [];
  //   } else {
  //     $("#totalScore2").text(roundTotal2);
  //   }
  //   $("#roundTotal2").children().remove();
  //   totalScore2 = [];
  //   $("#rollButton2").show();
  //   $("#rollForm2").hide();
  //   $("#rollForm").show();
  // });
});
