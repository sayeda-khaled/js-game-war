(function() {



  function Player(name) {
    this.name = name;
    this.hand = [];
  }

  function Game({
    player1,
    player2
  }) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.pot = [];

  }
  const player1Name = prompt('What is your name Player 1?');
  const player2Name = prompt('What is your name Player 2?');

  const game = new Game({
    player1Name,
    player2Name
  });
  console.log(game.player1.name);
  console.log(game.player2.name);
  console.log(game.player1.hand);
  console.log(game.player2.hand);


  function Card(numnber, suit) {
    this.number = number; // deck 1(Ace)- 13(king)
    this.suit = suit; // there are 4 sets of each class or color
  }

  function Deck() {
    this.cards = [];
    const suits = ["spades", "diamonds", "hearts", "clubs"];

    for (const suit of suits) {
      for (number = 1; number <= 13; number++) {
        //  this.cards.push(new Card(number, suit))
        console.log('suit', suit);
        this.cards.push(new Card({
          number,
          suit
        }));

      }
    }
    //This function is to shuffle th4 deck of cards
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      shuffleArray(this.cards);
    }
  }

  var deck = new Deck()







  //deal cards for the players
  Player.prototype.deal = function() {

    //console.log(deck.cards);
    for (i = 0; i < (deck.cards.length / 2); i++) {
      this.hand.push(deck.cards[i]);
    }

  }


  game.player1.deal();
  game.player2.deal();

  console.log('Player1 Hand', game.player1.hand);
  console.log('Player2 Hand', game.player2.hand);

  // function Play(win, loose) {
  //   this.winn = win;
  //   this.loose = loose;
  // }

  Game.prototype.draw = function() {
    const player1Card = game.player1.hand.shift(); //I'm taking the first cards//this is the value that's been drawn
    const player2Card = game.player2.hand.shift();

    game.player1.hand -= 1; //go through the hands of each player
    game.player2.hand -= 1;

    game.player1.draw = player1Card;
    game.player2.draw = player2Card;

    this.pile = [player1Card, player2Card, ...this.pot]; //this is taking the array and spreading the values in (this.pot) array..
    console.log(player1card);
    console.log(player2card);
  }



  Game.prototype.compare = function() {

    if (this.pile.length - 1 > this.pile.length - 2) {
      this.pile.push(game.player2.hand);
      this.pile = [];
    }
    else if (this.pile.length - 2 > this.pile.length - 1) {
      this.pile.push(game.player1.hand);
      this.pile = [];
    } else
      (this.pile.length - 1 == game.pile.length - 2) {
        this.draw();
      }
  }


  //specifying who looses
  game.prototype.loosers = function() {
    if (game.player1.hand.length < 1) {
      console.log('Player1 has lost!');
    } else if (game.player2.hand.length < 1) {
      console.log('Player2 has lost!');
    };
  }
  //
  //     if (game.player1.hand[i] > game.player2.hand[j]) {
  //       game.player1.hand[i].push(game.player1.hand[i] + game.player2.hand[i]);
  //       game.player2.hand[i].shift();
  //       console.log('player1 won this round');
  //     } else if (game.player2.hand[i] > game.player1.hand[j]) {
  //       game.player2.hand[i].push(game.player1.hand[i] + game.player2.hand[i]);
  //       game.player1.hand[i].shift();
  //       console.log('player2 won this round');
  //     } else if (game.player1.hand[i] == game.player2.hand[i]){
  //       console.log('cards war!');
  //     }
  //     }
  //   }
  // }







  // game.prototype.compare = function() {
  //
  //   for (let i = 0; i < game.player1.hand.lengthl; i++) {
  //     for (let j = 0; j < game.player2.hand; j++) {
  //       if (game.player1.hand[i] > game.player2.hand[j]) {
  //         game.player1.hand[i].push(game.player1.hand[i] + game.player2.hand[i]);
  //         game.player2.hand[i].shift();
  //         console.log('player1 won this round');
  //       } else if (game.player2.hand[i] > game.player1.hand[j]) {
  //         game.player2.hand[i].push(game.player1.hand[i] + game.player2.hand[i]);
  //         game.player1.hand[i].shift();
  //         console.log('player2 won this round');
  //       } else if (game.player1.hand[i] == game.player2.hand[i]){
  //         console.log('cards war!');
  //       }
  //       }
  //     }
  //   }









  // Play.prototype.loosers = function() {
  //   if (game.player1.hand.length == deck.length) {
  //     console.log('Player1 is the winner!');
  //   } else if (game.player2.hand.length == deck.length) {
  //     console.log('player2 is the winnder!');
  //   }
  // }





  ////
  // Deck.prototype.shuffle () {

  //   Math.floor((Math.random() * 13) + 1);// This is to generate a random number.. Chanve the (10) to what evert value you need..
  //
  //   }









})();


//

//     for(number = 0; number >= 13; number++) {
//     for (suit = 0; suit >= 4; suit++) {
//       this.cards.push(new Cards(number, suit));
//     }
//   }
//
// }
//   var deck = new Deck()
// /////
//
//  Deck.prototype.shuffle () {
//    Math.floor((Math.random() * 13) + 1);// This is to generate a random number.. Chanve the (10) to what evert value you need..
//
//  }


///////









///

// function Shuffle () {
//   //Math.floor((Math.random() * 10) + 1);// This is to generate a random number.. Chanve the (10) to what evert value you need..
//
// }
//
// functiom Deal (pile1, pile2) {
//   text.pile1 = pile1
//   text.pile2 = pile2
// }
//
// function Play(win, loose){
//
//   text.win = win;
//   text.loose = loose;
// }









//
// let i = 3000;
//
//
// while(player1.hand.length > 0 && player2.hand.length > 0 && i > 0) {
//   // do this
//
//
//
//
//
//
//
//
//   i--;
// }









//start of the unknown code
//(function() {
//
//
//
//   function Player(name) {
//     this.name = name;
//     this.hand = [];
//   }
//
//   function Game({
//     player1,
//     player2
//   }) {
//     this.player1 = new Player(player1Name);
//     this.player2 = new Player(player2Name);
//     //const p1= this.player1;
//     //const p2 = this.player2;
//   }
//   const player1Name = prompt('What is your name Player 1?');
//   const player2Name = prompt('What is your name Player 2?');
//
//   const game = new Game({
//     player1Name,
//     player2Name
//   });
//   console.log(game.player1.name);
//   console.log(game.player2.name);
//   console.log(game.player1.hand);
//   console.log(game.player2.hand);
//
//
//   function Card(numnber, suit) {
//     this.number = number; // deck 1(Ace)- 13(king)
//     this.suit = suit; // there are 4 sets of each class or color
//   }
//
//   //Creating a deck of 52 cards..
//
//   // Deck.prototype.freshSet = function(){
//   //   for (let i = 0; i <= 13; i++) {
//   //     for (let j= 0; j <= 4; j++) {
//   //
//   //     }
//   //   }
//   // }
//
//
//
//   function Deck() {
//     this.cards = [];
//     const suits = ["spades", "diamonds", "hearts", "clubs"];
//
//     for (const suit of suits) {
//       for (number = 1; number <= 13; number++) {
//         //  this.cards.push(new Card(number, suit))
//         console.log('suit', suit);
//         this.cards.push(new Card({
//           number,
//           suit
//         }));
//
//       }
//     }
//     //This function is to shuffle th4 deck of cards
//     function shuffleArray(array) {
//       for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//       shuffleArray(this.cards);
//     }
//   }
//
//   var deck = new Deck()
//
//
//
//   //deal cards for the players
//   Player.prototype.deal = function() {
//
//     //console.log(deck.cards);
//     for (i = 0; i < (deck.cards.length / 2); i++) {
//       this.hand.push(deck.cards[i]);
//     }
//
//   }
//
//
//   game.player1.deal();
//   game.player2.deal();
//
//   console.log('Player1 Hand', game.player1.hand);
//   console.log('Player2 Hand', game.player2.hand);
//
//   function Play(win, loose) {
//     this.winn = win;
//     this.loose = loose;
//   }
//
//
//   Play.prototype.compare = function() {
//     // var firstPlayPlayer1 = game.player1.hand.length - 1;
//     // var firstPlayPlayer2 = game.player2.hand.length - 1;
//
//     for (let i = 0; i < game.player1.hand.lengthl; i++) {
//       for (let j = 0; j < game.player2.hand; j++) {
//         if (game.player1.hand[i] > game.player2.hand[j]) {
//           game.player1.hand[i].push(game.player1.hand[i] + game.player2.hand[i]);
//           game.player2.hand[i].shift();
//           console.log('player1 won this round');
//         } else if (game.player2.hand[i] > game.player1.hand[j]) {
//           game.player2.hand[i].push(game.player1.hand[i] + game.player2.hand[i]);
//           game.player1.hand[i].shift();
//           console.log('player2 won this round');
//         } else if (game.player1.hand[i] == game.player2.hand[i]){
//           console.log('cards war!');
//         }
//         }
//       }
//     }
//
//
//
//
//   ///specifying who looses
//   // Play.prototype.loosers = function() {
//   //   if (game.player1.hand.length < 1) {
//   //     console.log('Player1 has lost!');
//   //   } else if (game.player2.hand.length < 1) {
//   //     console.log('Player2 has lost!');
//   //   };
//   // }
//
//   Play.prototype.loosers = function() {
//     if (game.player1.hand.length == deck.length) {
//       console.log('Player1 is the winner!');
//     } else if (game.player2.hand.length == deck.length) {
//       console.log('player2 is the winnder!');
//     }
//   }
//
//
//   ////
//   // Deck.prototype.shuffle () {
//
//   //   Math.floor((Math.random() * 13) + 1);// This is to generate a random number.. Chanve the (10) to what evert value you need..
//   //
//   //   }
//
//
//
//
//
//
//
//
//
// })();

////end here
//

//     for(number = 0; number >= 13; number++) {
//     for (suit = 0; suit >= 4; suit++) {
//       this.cards.push(new Cards(number, suit));
//     }
//   }
//
// }
//   var deck = new Deck()
// /////
//
//  Deck.prototype.shuffle () {
//    Math.floor((Math.random() * 13) + 1);// This is to generate a random number.. Chanve the (10) to what evert value you need..
//
//  }


///////









///

// function Shuffle () {
//   //Math.floor((Math.random() * 10) + 1);// This is to generate a random number.. Chanve the (10) to what evert value you need..
//
// }
//
// functiom Deal (pile1, pile2) {
//   text.pile1 = pile1
//   text.pile2 = pile2
// }
//
// function Play(win, loose){
//
//   text.win = win;
//   text.loose = loose;
// }


//Solution:
// (function() {
// 'use strict';

// const Card = function({value, suit} = {}) {
//   this.value = value;
//   this.suit = suit;
//
// }
//
// Card.prototype.pring = function() {
//
// const suit = [
//   'spade',
//   'diamonds',
//   'clubs',
//   'hearts'
// ];
//
// const values = [
//   null,
//   null,
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "J",
//   "Q",
//   "K",
//   "A"
// ]
//
// return `${values[this.value]} of ${suits[this.suit][0].toUpperCase()}${suits[this.suit].slice(1)}`;
//
//
// }
// const Deck = function() {
//   this.cards = [];
//
//   for(let i = 0; i < 4; i++) { //for each suit.. or you can specify fiamond, etc..
//     for(let j = 2; j <= 14; j++) { //for each value.. This becaluse card (1) = 10
//       this.cards.push(new Card({suit: i, value: j})); //this creates the full Deck of cards
//     }
//   }
//   // for(let i = 2; i <= 14; i++) {
//   //   this.cards = [...this.cards, i, i, i, i];
//   }
//
//
// const Player = function ({name} = {}) {
//   this.name = name;
//   this.hand = [];
//   this.cardCount = 0;
//   this.draw = null; //to get back the card that's been drawn
//
// }
//
// const Game = function() {
//   const player1 = prompt ("Enter player one's name:");
//   const player2 = prompt ("Enter player two's name:");
//
//
//   this.player1 = new Player({name: player1}); //Player is an object, an instance of player..
//   this.player2 = new Player({name: player2});
//   this.deck = new Deck(); //Each Game now has 2 players and a new deck of cards..
//   this.pot = []; //an empty array to track for me
// }
//
// Game.prototype.shuffle = function (deck) {
//   let i = deck.length, j, temp; //declairing 3 variables.. j & temo are undefined, i = length of the deck
//
//   while(i--) { //this is short hand for wh while (i) { i = i - 1;}// This is saying, as long as i is not 0, run this loop..
//     j= Math.floor(Math.random() * (i + 1));
//     temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;
//   }
// }
//
// Game.prototype.deal = function () {
//   //this.shuffle(this.deck.cards);
//
//   this.player1.hand = this.deck.cards.filter(function (item, index) {
//     return !(index % 2); //The reminder is 0 is zero, which is falsey, so ! change it to truthy, so this will fire.. This will give the first player the first card
//   });
//
//   this.player2.hand = this.deck.cards.filter(function (item, index) {
//     return index % 2;
//   });
//   this.player1.count = this.player1.hand.length; //optional.. adds more randomness.. This is to shuffle the winnings
//   this.player2.count = this.player2.hand.length;
// }
//
// Game.prototype.draw = function() {
//   const player1Card = this.player1.hand.shift(); //I'm taking the first cards//this is the value that's been drawn
//   const player2Card = this.player2.hand.shift();
//
//   this.player1.cardCount -= 1; //go through the hands of each player
//   this.player2.cardCount -= 1;
//
// //once players went through the original hands, shuffle the winns //this is opetional to make sure it's more random and we won't keep looping
//   if(!this.player1.cardCount) {
//     this.shuffle (this.player1.hand);
//   }
//
//   if(!this.player2.cardCount) {
//     this.shuffle (this.player2.hand);
//   }
//
//   this.player1.draw = player1Card;
//   this.player2.draw = player2Card;
//
//   this.pot = [player1Card, player2Card, ...this.pot]; //this is taking the array and spreading the values in (this.pot) array..
//   console.log(`${this.player1.game} draws a ${plaer1Card.print()}.`);
//   console.log(`${this.player12game} draws a ${plaer2Card.print()}.`);
// }
//
// Game.prototype.play = function() { //when I can the play, it will shuffle & deal
//   this.shuffle(this.deck.cards); //shuffle the cards
//   this.deal(); //deal the cards
//
//   console.log("let's play WAR!");
//   console.log('\n');
//
//   game.draw();
//
//   //add some control flow that says: if player1 still has cards, then keep playing and play and compare..
// }
//
// const game = new Game();
// game.play();
//
//
//
//
// // })()
//
//









// (function() {
//
//
//
//   function Player(name) {
//     this.name = name;
//     this.hand = [];
//   }
//
//   function Game({
//     player1,
//     player2
//   }) {
//     this.player1 = new Player(player1Name);
//     this.player2 = new Player(player2Name);
//     //const p1= this.player1;
//     //const p2 = this.player2;
//   }
//   const player1Name = prompt('What is your name Player 1?');
//   const player2Name = prompt('What is your name Player 2?');
//
//   const game = new Game({
//     player1Name,
//     player2Name
//   });
//   console.log(game.player1.name);
//   console.log(game.player2.name);
//   console.log(game.player1.hand);
//   console.log(game.player2.hand);
//
//
//   function Card(numnber, suit) {
//     this.number = number; // deck 1(Ace)- 13(king)
//     this.suit = suit; // there are 4 sets of each class or color
//   }
//
//
//
//
//   function Deck() {
//     this.cards = [];
//     const suits = ["spades", "diamonds", "hearts", "clubs"];
//
//     for (const suit of suits) {
//       for (number = 1; number <= 13; number++) {
//         //  this.cards.push(new Card(number, suit))
//         console.log('suit', suit);
//         this.cards.push(new Card({
//           number,
//           suit
//         }));
//
//       }
//     }
//     //This function is to shuffle th4 deck of cards
//     function shuffleArray(array) {
//       for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//       shuffleArray(this.cards);
//     }
//   }
//
//   var deck = new Deck()
//
//
//
//   //deal cards for the players
//   Player.prototype.deal = function() {
//
//     //console.log(deck.cards);
//     for (i = 0; i < (deck.cards.length / 2); i++) {
//       this.hand.push(deck.cards[i]);
//     }
//
//   }
//
//
//   game.player1.deal();
//   game.player2.deal();
//
//   console.log('Player1 Hand', game.player1.hand);
//   console.log('Player2 Hand', game.player2.hand);
//
//   function Play(win, loose) {
//     this.winn = win;
//     this.loose = loose;
//   }
//
//
//   Play.prototype.compare = function() {
//     // var firstPlayPlayer1 = game.player1.hand.length - 1;
//     // var firstPlayPlayer2 = game.player2.hand.length - 1;
//     // let var floorPile = [];
//
//     for (let i = 0; i < game.player1.hand.lengthl; i++) {
//       for (let j = 0; j < game.player2.hand; j++) {
//         // floorPile.push(game.player1.hand[i], game.player2.hand[j]);
//
//
//
//
//         if (game.player1.hand[i] > game.player2.hand[j]) {
//           game.player1.hand.push(game.player1.hand[i] + game.player2.hand[j]);
//           game.player2.hand[j].shift();
//           console.log('player1 won this round');
//         } else if (game.player2.hand[j] > game.player1.hand[i]) {
//           game.player2.hand.push(game.player1.hand[i] + game.player2.hand[i]);
//           game.player1.hand[i].shift();
//           console.log('player2 won this round');
//         } else if (game.player1.hand[i] == game.player2.hand[i]){
//           console.log('cards war!');
//         }
//         }
//       }
//     }
//
//
//
//
//   ///specifying who looses
//   // Play.prototype.loosers = function() {
//   //   if (game.player1.hand.length < 1) {
//   //     console.log('Player1 has lost!');
//   //   } else if (game.player2.hand.length < 1) {
//   //     console.log('Player2 has lost!');
//   //   };
//   // }
//
//   Play.prototype.loosers = function() {
//     if (game.player1.hand.length == deck.length) {
//       console.log('Player1 is the winner!');
//     } else if (game.player2.hand.length == deck.length) {
//       console.log('player2 is the winnder!');
//     }
//   }
//
//
//   ////
//   // Deck.prototype.shuffle () {
//
//   //   Math.floor((Math.random() * 13) + 1);// This is to generate a random number.. Chanve the (10) to what evert value you need..
//   //
//   //   }
//
//
//
//
//
//
//
//
//
// })();
//
// //end here
//
// //
// //     for(number = 0; number >= 13; number++) {
// //     for (suit = 0; suit >= 4; suit++) {
// //       this.cards.push(new Cards(number, suit));
// //     }
// //   }
// //
// //
// //   var deck = new Deck()
// // /////
// //
// //  Deck.prototype.shuffle () {
// //    Math.floor((Math.random() * 13) + 1);// This is to generate a random number.. Chanve the (10) to what evert value you need..
// //
// //  }
//
//
// /////
//
//
//
//
//
//
//
//
// //
// // /
// //
// // function Shuffle () {
// //   //Math.floor((Math.random() * 10) + 1);// This is to generate a random number.. Chanve the (10) to what evert value you need..
// //
// // }
// //
// // functiom Deal (pile1, pile2) {
// //   text.pile1 = pile1
// //   text.pile2 = pile2
// // }
// //
// // function Play(win, loose){
// //
// //   text.win = win;
// //   text.loose = loose;
// // }
//
//
// // //Solution:
// // // (function() {
// // // 'use strict';
// //
// // const Card = function({value, suit} = {}) {
// //   this.value = value;
// //   this.suit = suit;
// //
// // }
// //
// // Card.prototype.pring = function() {
// //
// // const suit = [
// //   'spade',
// //   'diamonds',
// //   'clubs',
// //   'hearts'
// // ];
// //
// // const values = [
// //   null,
// //   null,
// //   "2",
// //   "3",
// //   "4",
// //   "5",
// //   "6",
// //   "7",
// //   "8",
// //   "9",
// //   "10",
// //   "J",
// //   "Q",
// //   "K",
// //   "A"
// // ]
// //
// // return `${values[this.value]} of ${suits[this.suit][0].toUpperCase()}${suits[this.suit].slice(1)}`;
// //
// //
// // }
// // const Deck = function() {
// //   this.cards = [];
// //
// //   for(let i = 0; i < 4; i++) { //for each suit.. or you can specify fiamond, etc..
// //     for(let j = 2; j <= 14; j++) { //for each value.. This becaluse card (1) = 10
// //       this.cards.push(new Card({suit: i, value: j})); //this creates the full Deck of cards
// //     }
// //   }
// //   // for(let i = 2; i <= 14; i++) {
// //   //   this.cards = [...this.cards, i, i, i, i];
// //   }
// //
// //
// // const Player = function ({name} = {}) {
// //   this.name = name;
// //   this.hand = [];
// //   this.cardCount = 0;
// //   this.draw = null; //to get back the card that's been drawn
// //
// // }
// //
// // const Game = function() {
// //   const player1 = prompt ("Enter player one's name:");
// //   const player2 = prompt ("Enter player two's name:");
// //
// //
// //   this.player1 = new Player({name: player1}); //Player is an object, an instance of player..
// //   this.player2 = new Player({name: player2});
// //   this.deck = new Deck(); //Each Game now has 2 players and a new deck of cards..
// //   this.pot = []; //an empty array to track for me
// // }
// //
// // Game.prototype.shuffle = function (deck) {
// //   let i = deck.length, j, temp; //declairing 3 variables.. j & temo are undefined, i = length of the deck
// //
// //   while(i--) { //this is short hand for wh while (i) { i = i - 1;}// This is saying, as long as i is not 0, run this loop..
// //     j= Math.floor(Math.random() * (i + 1));
// //     temp = deck[i];
// //     deck[i] = deck[j];
// //     deck[j] = temp;
// //   }
// // }
// //
// // Game.prototype.deal = function () {
// //   //this.shuffle(this.deck.cards);
// //
// //   this.player1.hand = this.deck.cards.filter(function (item, index) {
// //     return !(index % 2); //The reminder is 0 is zero, which is falsey, so ! change it to truthy, so this will fire.. This will give the first player the first card
// //   });
// //
// //   this.player2.hand = this.deck.cards.filter(function (item, index) {
// //     return index % 2;
// //   });
// //   this.player1.count = this.player1.hand.length; //optional.. adds more randomness.. This is to shuffle the winnings
// //   this.player2.count = this.player2.hand.length;
// // }
// //
// // Game.prototype.draw = function() {
// //   const player1Card = this.player1.hand.shift(); //I'm taking the first cards//this is the value that's been drawn
// //   const player2Card = this.player2.hand.shift();
// //
// //   this.player1.cardCount -= 1; //go through the hands of each player
// //   this.player2.cardCount -= 1;
// //
// // //once players went through the original hands, shuffle the winns //this is opetional to make sure it's more random and we won't keep looping
// //   if(!this.player1.cardCount) {
// //     this.shuffle (this.player1.hand);
// //   }
// //
// //   if(!this.player2.cardCount) {
// //     this.shuffle (this.player2.hand);
// //   }
// //
// //   this.player1.draw = player1Card;
// //   this.player2.draw = player2Card;
// //
// //   this.pot = [player1Card, player2Card, ...this.pot]; //this is taking the array and spreading the values in (this.pot) array..
// //   console.log(`${this.player1.game} draws a ${plaer1Card.print()}.`);
// //   console.log(`${this.player12game} draws a ${plaer2Card.print()}.`);
// // }
// //
// // Game.prototype.play = function() { //when I can the play, it will shuffle & deal
// //   this.shuffle(this.deck.cards); //shuffle the cards
// //   this.deal(); //deal the cards
// //
// //   console.log("let's play WAR!");
// //   console.log('\n');
// //
// //   game.draw();
// //
// //   //add some control flow that says: if player1 still has cards, then keep playing and play and compare..
// // }
// //
// // const game = new Game();
// // game.play();
//
//
//
//
// // })()
