//Back-end logic:
function Dice(number1, number2, number3, number4, number5, number6) {
  this.number1 = 1;
  this.number2 = 2;
  this.number3 = 3;
  this.number4 = 4;
  this.number5 = 5;
  this.number6 = 6;
}


//Front-end logic:
$(document).ready(function() {
  $("#rollForm").submit(function() {
    event.preventDefault();
  });
});
