// var loss = 0;
// var win = 0;
// var crystalValue = getCrystalValue();
// var gemArray = [];
// var adder = 0;


// function getCrystalValue() {
//   return Math.floor(Math.random() * (102) + 19);
// }


// $(document).ready(function() {

  
//   var gemCount = 4;

  
//   function gemFunc() {
   
//     for (var i = 0; i < gemCount; i++) {
//       var gem = Math.floor(Math.random() * 12) + 1;
//       gemArray.push(gem);
//     }
//   };

//   gemFunc();

//   $('.numberToMatch').html(crystalValue);

//   var $score = $('.score');

//   function onButtonClick() {
//     return function() {
//       var gemValue = (gemArray[i]);
//       adder += gemValue;
//       $score.html(adder);
//       checkit();
//     }
//   }

//   for (var i = 0; i < gemCount; i++) {

//     var picDOM = i + 1;
    
    
//     $('.pic' + picDOM).on('click', onButtonClick(i));
    
    
//   }

//   function checkit() {
//     var $message = $("#winlossmessage");
//     if (crystalValue === adder) {
//       $message.html("You won that round!");
//       win = win + 1;
//       $("#wins").html(win);

//       reset();
//     } else if (crystalValue < adder) {
//       $message.html("You loss that round!");
//       loss = loss + 1;
//       $("#losses").html(loss);
  
//       reset();
//     }
//   };

//   function reset() {

//     gemArray = [];
//     gemFunc();
//     crystalValue = getCrystalValue();
//     $('.numberToMatch').html(crystalValue);
//     adder = 0;
//     $('.score').html(adder);
//     console.log(gemArray);
//   }

// });


var loss = 0;
var win = 0;
// var crystalValue = getCrystalValue();
var gemArray = [];
var adder = 0;

$(document).ready(function(){
  var randomNum = Math.floor(Math.random()*101+19)
  //random number generator
  //picks a number between 19 and 120
  $("#numberToMatch").html(randomNum);
  console.log(randomNum);

  var cry1 = Math.floor(Math.random()*11)
  var cry2 = Math.floor(Math.random()*11)
  var cry3 = Math.floor(Math.random()*11)
  var cry4 = Math.floor(Math.random()*11)
  totalScore = 0;
  // random numbers for each crystal

//click functions for each button
 $( "#cry1" ).click(function() {
  //alert( "Handler for .click() called."  + totalScore);
  totalScore = totalScore + cry1;
  $("#score").text(totalScore);
  //alert("New total scrore is: " + totalScore);
});

 $( "#cry2" ).click(function() {
  //alert( "Handler for .click() called." );
  totalScore = totalScore + cry2;
  $("#score").text(totalScore);
});

 $( "#cry3" ).click(function() {
  //alert( "Handler for .click() called." );
  totalScore = totalScore + cry3;
  $("#score").text(totalScore);
});

 $( "#cry4" ).click(function() {
  //alert( "Handler for .click() called." );
  totalScore = totalScore + cry4;
  $("#score").text(totalScore);
});


});