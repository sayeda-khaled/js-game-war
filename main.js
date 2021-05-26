(function() {

  function Player(name) {
    this.name = name;
    this.hand = [];
  }

  function Card({number, suit}) {
    this.number = number; // deck 1(Ace)- 13(king)
    this.suit = suit; // there are 4 sets of each class or color
  }

  function Deck() {
    this.cards = [];

    const suits = ["spades", "diamonds", "hearts", "clubs"];

    for (const suit of suits) {
      for (let number = 1; number <= 13; number++) {
        //  this.cards.push(new Card(number, suit))
        // console.log('suit', suit);
        this.cards.push(new Card({
          number,
          suit
        }));
      }
    }
  }

  function Game({
    player1,
    player2
  }) {
    this.player1 = new Player(player1);
    this.player2 = new Player(player1);
    this.deck = new Deck();
    this.pot = [];
  }

  Game.prototype.play = function() {
    this.shuffle(this.deck);
    this.deal();

    let i = 0;

    while(this.player1.hand.length > 0 && this.player2.hand.length > 0 && i < 100) {
      this.draw();
      console.log(this.player1.hand);
      console.log(this.player2.hand);
      // console.log(i);
      i++;
    }
  }


  Game.prototype.shuffle = function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  //deal cards for the players
  Game.prototype.deal = function() {
    this.player1.hand = this.deck.cards.filter(function(card, index) {
      return index % 2 !== 0;
    });

    this.player2.hand = this.deck.cards.filter(function(card, index) {
      return index % 2 === 0;
    });
  }

  // function Play(win, loose) {
  //   this.winn = win;
  //   this.loose = loose;
  // }

  Game.prototype.draw = function() {
    const player1Card = this.player1.hand.shift(); //I'm taking the first cards//this is the value that's been drawn
    const player2Card = this.player2.hand.shift();

    // game.player1.count -= 1; //go through the hands of each player
    // game.player2.count -= 1;

    // game.player1.draw = player1Card;
    // game.player2.draw = player2Card;

    this.pot = [player1Card, player2Card, ...this.pot];
    console.log(player1Card);
    console.log(player2Card);

    this.compare(player1Card, player2Card);
  }



  Game.prototype.compare = function(player1Card, player2Card) {
    // console.log(player1Card);
    // console.log(player2Card);

    // console.log(this.player1.hand)
    // console.log(this.player2.hand)
    if (player1Card.number > player2Card.number) {
      this.player1.hand = [...this.player1.hand, ...this.pot];
      this.pot = [];
      console.log('player 1 wins');
      // this.pile.push(game.player2.hand);
      // this.pile = [];
    } else if (player1Card.number < player2Card.number) {
      this.player2.hand = [...this.player2.hand, ...this.pot];
      this.pot = [];
      console.log('player 2 wins');
      // this.pile.push(game.player1.hand);
      // this.pile = [];
    } else if (player1Card.number === player2Card.number) {
      console.log('War!');

    }
  }


  const player1Name = prompt('What is your name Player 1?');
  const player2Name = prompt('What is your name Player 2?');

  const game = new Game({
    player1Name,
    player2Name
  });

  game.play();


})();
