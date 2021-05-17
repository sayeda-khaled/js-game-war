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
    //const p1= this.player1;
    //const p2 = this.player2;
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

  //Creating a deck of 52 cards..

  // Deck.prototype.freshSet = function(){
  //   for (let i = 0; i <= 13; i++) {
  //     for (let j= 0; j <= 4; j++) {
  //
  //     }
  //   }
  // }



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

  function Play(win, loose) {
    this.winn = win;
    this.loose = loose;
  }


  Play.prototype.compare = function() {
    // var firstPlayPlayer1 = game.player1.hand.length - 1;
    // var firstPlayPlayer2 = game.player2.hand.length - 1;

    for (let i = 0; i < game.player1.hand.lengthl; i++) {
      for (let j = 0; j < game.player2.hand; j++) {
        if (game.player1.hand[i] > (game.player2.hand)[j]) {
          return game.player1.hand[i].push(game.player1.hand[i] + game.player2.hand[i]);

        } else {
          return game.player2.hand[i].push(game.player1.hand[i] + game.player2.hand[i]);

        }
      }
    }


  }

  ///specifying who looses
  Play.prototype.loosers = function() {
    if (game.player1.hand.length < 1) {
      console.log('Player1 has lost!');
    } else if (game.player2.hand.length < 1) {
      console.log('Player2 has lost!');
    };
  }

  Play.prototype.loosers = function() {
    if (game.player1.hand = deck) {
      console.log('Player1 is the winner!');
    } else if (game.player2.hand = deck) {
      console.log('player2 is the winnder!');
    }
  }


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
