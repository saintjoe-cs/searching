load('seqSearch2.js');

var words = read("words.txt").split(" ");
var word = "rhetoric";
var start = new Date().getTime();
var position = seqSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
  print("Found " + word + " at position " + position + ".");
  print("Sequential search took " + elapsed + " milliseconds.");
}
else {
  print(word + " is not in the file.");
}
