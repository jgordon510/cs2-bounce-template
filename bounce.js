// this (400, 400) controls the game's height and width
var game = new Phaser.Game(400, 400, Phaser.AUTO, 'gameDiv');
var game_state = {};

// Creates a new 'main' state that wil contain the game
game_state.main = function() {};
game_state.main.prototype = {

    preload: function() {
      // Nothing to see here unless you want to add your own assets
      // Here are some good assets:
      // http://opengameart.org/content/basic-arkanoid-pack
      // http://opengameart.org/content/puzzle-game-art
      // https://www.google.com/search?q=pong+screenshots
    },

    create: function() {
      //this is the height and width of the paddle, change if you like
      game.paddleHeight = 30;
      game.paddleWidth = 100;
      // ... keep going!
    },

    update: function() {
      // Function called 60 times per second
      },
    };

    // Add and start the 'main' state to start the game
    game.state.add('main', game_state.main);
    game.state.start('main');
