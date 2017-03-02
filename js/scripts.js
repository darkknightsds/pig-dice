//Back-end logic:
var roll = [];
var roundScore = [];
var roundScore2 = [];
var rollValue;
var gameTotal = [];
var player1Total =[];
var player2Total = [];
var zero1 = 0;
var zero2 = 0;
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
      roundScore2 = [];
      $("#roundTotal").children().remove();
      $("#roundTotal").append("<li>" + "1: Your turn is over! Press hold to pass." + "</li>");
      $("#rollButton").hide();
    } else {
      $("#roundTotal").append("<li>" + rollValue + "</li>");
    }
    if (currentRoll === player1Roll) {
      roundScore.push(rollValue);
    } else {
      roundScore2.push(rollValue);
    }
  });
  $("#holdButton").click(function() {
    event.preventDefault();
    if (currentRoll === player1Roll && gameTotal >= 100) {
      for (var i = 0; i < roundScore.length; i += 1) {
        player1Total = zero1 += roundScore[i]; }
        $("#player1Score").text(player1Total + ": You won Pig Dice!");
      } else if (currentRoll === player1Roll) {
        for (var i = 0; i < roundScore.length; i += 1) {
          player1Total = zero1 += roundScore[i]; }
          $("#player1Score").text(player1Total);
          player1Array.push(player1Total);
      } else if (currentRoll === player2Roll && gameTotal >= 100) {
        for (var x = 0; x < roundScore2.length; x += 1) {
          player2Total = zero2 += roundScore2[x]; }            $("#player2Score").text(player2Total + ": You won Pig Dice!")
      } else {
        for (var x = 0; x < roundScore2.length; x += 1) {
          player2Total = zero2 += roundScore2[x]; }   $("#player2Score").text(player2Total);
          player2Array.push(player2Total);
      };
    $("#roundTotal").children().remove();
    roundScore = [];
    roundScore2 = [];
    $("#rollButton").show();
  });
});
