var c = 0;

var when = ["watch steins;gate at 2 am", "kiss me thru the phone", "fall asleep on facetime", "love anime bitches", "get haechan in your album", "order more than you can eat", "eat cheese and poop", "have a small bladder", "hold my hand between yours", "vlog in Times Square", "say 'hey guys' to our audience", "smell like fresh laundry", "die after a bong rip", "shoutout BooGang"]; 

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// shuffle on start
$(function () {
  shuffle(when);
});


$(document).click(function (e) {

  if (e.button == 0) {

    $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);

    c++;

    if (c == when.length) {

      $("<p>love me too </p>").hide().prependTo("#when-you").fadeIn(2000);

      $("body").css('background', '#000');
      $("#g p").css('color', '#fff');

      $(document).unbind("click");

    }

  }
});
