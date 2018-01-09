$(function() {
  var sentence = prompt("Please enter a sentence: ");
  // var first_char = sentence.match(/^[a-z]/);
  // var last_char = sentence.match(/[a-z]$/);
  var numbers = parseInt(sentence.length)
  var number = numbers - 1;
  var first_char = sentence.charAt([0]);
  var first_charUpper = first_char.toUpperCase();
  var last_char = sentence.charAt([number]);
  var last_charUpper = last_char.toUpperCase();
  var question = prompt("Do you want to\[C\]ap or \[S\]awp");
  console.log(question);

  var capFirst = function(){
    var newSentence = sentence.replace(first_char, first_charUpper);
    var newSentence = newSentence.replace(last_char, last_charUpper);
    alert(newSentence)
  };

  var swapCap = function(){
    var newSentence = sentence.replace(first_char, last_charUpper);
    var newSentence = newSentence.replace(last_char, first_charUpper);
    alert(newSentence)
  };

  if(question === 's') {
    swapCap();
  }
  else if(question === 'c') {
      capFirst()
    }
  });
