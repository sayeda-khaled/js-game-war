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


    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    shuffleArray(this.cards);
  }

  var deck = new Deck()




  Player.prototype.deal = function () {
    console.log('beginning of function', game.player1.hand);
    console.log(deck.cards);
    for (i = 0; i < (deck.cards.length / 2); i++) {
       this.hand.push(deck.cards[i]);
    }

  }

game.player1.deal();
game.player2.deal();

  console.log('end of function', game.player1.hand);


function Play(win, loose){
  this.winn = win;
  this.loose = loose;
}

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
