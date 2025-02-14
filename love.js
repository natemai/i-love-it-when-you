var c = 0;

var when = ["watch steins;gate at 2 am", "kiss me through the phone", "fall asleep on facetime", "love anime bitches", "get haechan in your album", "order more than you can eat", "eat cheese and poop", "have a small bladder", "hold my hand between yours", "vlog in Times Square", "say 'hey guys' to our audience", "smell like fresh laundry", "die after a bong rip", "shoutout BooGang", "fall asleep on Facetime every night", "scream Killua in the middle of the street", "watch Temptation Island on my couch", "watch me play Fifa with Merix", "eat the cheesiest kimchi fried rice in Hongdae", "still love me after eating raw liver and boiled tripe", "ask me to read your thesis", "tell me funny jokes because your English is getting better", "eat two bags of small indomie or one big bag [in my kitchen]", "show off your Interstella tattoos", "vlog our ramen while we're hungover", "drink too many soju beers on my floor couch", "make tiktoks on my roof in hannam", "pretend we're in a kdrama on top of namsan", "tell me you miss me right after I drop you off", "wave goodbye to me at TSA", "make whip cream with egg yolks for two hours", "ask me for mayo with your fries for the 11234891230th time", "stay up with me to buy Kendrick tickets", "send me Reels of Quack and Lola and saying it's us", "cry over cute dogs with me", "laugh at AI dogs cooking in the kitchen for other animals", "support me when work is overwhelming", "play Zombies by yourself with no revive", "teach me to say Lekker whenever I eat anything", "wish me eets smakelijk at every meal", "watch Deathly Hallows with your parents", "facetime Kiko while we're walking home", "KIKOOOOOOO KIKI KIKOOOOO", " ... sit on my face ... ", "convert me to WhatsApp for you", "give me a tour of your uni", "take me to the back of DekaMarkt and show me your TikToks", "scream Guys Natheyboo Loves Me", "pee in the middle of the street", "go to the Starbucks bathroom twice", "make fun of me about Americahhhhh", "tell me you don't want us to just be a summer fling", "watch Millenium Actress on Screener", "look at flights for our next trip together", "Instacart me flowers when I get home", "give me a Mukbang of food I ordered for you", "fall asleep on the 80 bus", "buy too many groceries every time we go to Albert Heign", "fall asleep during the couples massage with me", "ask me to order you Wendy's because America", "show me your Tuftlab thirst trap edits on Capcut", "give me tours of Eye", "bring me coffee in the morning since you woke up earlier", "kill it at Orange Theory with me and never go again", "smoke a cigarette on my rooftop", "smoke a joint on our balcony", "make fun of how fat my American joints are", "plan a toursity Amsterdam Light Festival canal tour for me", "call me Snoopy", "spend too much money at Miniso", "secretly buy way too much cheese", "say we're skeptacore pt. 3", "dance to Something About You in the living room with me", "plan our Digital Love tattoos", "go to a King Krule concert with me for our first date", "ask to take a photobooth picture no matter where we are", "buy me matching headbands", "buy us matching Arcteryx beanies", "plan our future home library full of manga", "look at way too expensive New York apartments together", "write in your journal on facetime", "wash my face for me and clean my pores", "use your ear scraper on me every 12 hours and get excited over the smallest pieces", "go to temple with me", "take pictures with the BTS minions", "steal my clothes and ask me if you can have them afterwards", "smell my shirt while you're in bed", "lay on my chest all night"]; 

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
