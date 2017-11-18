var loss = 0;
var win = 0;
var crystalValue = getCrystalValue();
var gemArray = [];
var adder = 0;


function getCrystalValue() {
  return Math.floor(Math.random() * (102) + 19);
}


$(document).ready(function() {

  
  var gemCount = 4;

  
  function gemFunc() {
   
    for (var i = 0; i < gemCount; i++) {
      var gem = Math.floor(Math.random() * 12) + 1;
      gemArray.push(gem);
    }
  };

  gemFunc();

  $('.numberToMatch').html(crystalValue);

  var $score = $('.score');

  function onButtonClick(i) {
    return function() {
      var gemValue = (gemArray[i]);
      adder += gemValue;
      $score.html(adder);
      checkit();
    }
  }

  for (var i = 0; i < gemCount; i++) {

    var picDOM = i + 1;
    
    
    $('.pic' + picDOM).on('click', onButtonClick(i));
    
    
  }

  function checkit() {
    var $message = $("#winlossmessage");
    if (crystalValue === adder) {
      $message.html("You won that round!");
      win = win + 1;
      $("#wins").html(win);

      reset();
    } else if (crystalValue < adder) {
      $message.html("You loss that round!");
      loss = loss + 1;
      $("#losses").html(loss);
  
      reset();
    }
  };

  function reset() {

    gemArray = [];
    gemFunc();
    crystalValue = getCrystalValue();
    $('.numberToMatch').html(crystalValue);
    adder = 0;
    $('.score').html(adder);
    console.log(gemArray);
  }

});