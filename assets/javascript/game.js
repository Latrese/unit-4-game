var winCount = 0;
var lossCount = 0;
var currentScore = 0;
var targetScore = 0;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function startGame(){
    currentScore = 0;
    targetScore = getRandomArbitrary(19, 120)

    $("#crystalOne").data("value", getRandomArbitrary(1, 12));
    $("#crystalTwo").data("value", getRandomArbitrary(1, 12));
    $("#crystalThree").data("value", getRandomArbitrary(1, 12));
    $("#crystalFour").data("value", getRandomArbitrary(1, 12));
    $("#targetScore").text(targetScore)
    $("#userScore").text(currentScore)
    
}
startGame();
$("#crystalOne").on('click', function() {
    currentScore = currentScore += $(this).data('value');
    $('#userScore').text(currentScore)
 });

 $("#crystalTwo").on('click', function() {
    currentScore = currentScore += $(this).data('value');
    $('#userScore').text(currentScore)
 });

 $("#crystalThree").on('click', function() {
    currentScore = currentScore += $(this).data('value');
    $('#userScore').text(currentScore)
 });

 $("#crystalFour").on('click', function() {
    currentScore = currentScore += $(this).data('value');
    $('#userScore').text(currentScore)
 });

 if (currentScore === targetScore) {
   wins++;

 }