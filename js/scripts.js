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

  var newSentence = sentence.replace(first_char, first_charUpper);
  var newSentence = newSentence.replace(last_char, last_charUpper);
  alert(newSentence);
  // console.log(newSentence);

});
