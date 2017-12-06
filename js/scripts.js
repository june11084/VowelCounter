var inputSplit = function(string) {
  var splits = string.toLowerCase().split("");
  console.log(splits);
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelCount = 0;
  for (index = 0; index < splits.length; index++) {
    if (vowels.includes(splits[index]) === true) {
      vowelCount ++;
    }
  }
  return vowelCount;
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var vowelCount = inputSplit(userInput);
    $("#results").text("Number of vowels: " + vowelCount);
  });
});
