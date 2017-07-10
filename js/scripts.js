var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var suits = ["clubs", "hearts", "spades", "diamonds"];
var fullDeck = []

$(function() {
  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      $(".output ul").append("<li>" + rank + " of " + suit + "</li>");
      fullDeck.push(rank + " of " + suit);
    });
  });
});
