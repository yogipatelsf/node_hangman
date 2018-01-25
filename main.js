//main file to run in order to play game

var prompt = require('prompt');
var Word = require("./words.js");
var Game = require("./game.js");

prompt.start();

var hangman = {
    //sets values for new game
    wordBank: Game.wordBank,
    roundsWon: 0,
    guessesRemaining: 8,
    guessedLetters: [],
    currentWrd: null,
    startGame: function(wrd){
        this.resetGuessesRemaining();
        this.currentWrd = new Word.Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        this.currentWrd.getLets();
        console.log("Welcome to Sports Team Hangman!\nGuess from teams from any sport!");
        console.log(this.currentWrd.wordRender() + '\n');
        this.keepPromptingUser();
    },
    resetGuessesRemaining: function(){
        this.guessesRemaining = 8;
    },
    //what to prompt in which situation
    keepPromptingUser: function(){
        var self = this;
        prompt.get(['guessLetter'],function(err, result){
            console.log("");
            console.log('The letter you guessed is: ' + result.guessLetter);
            var findHowManyUserGuess = self.currentWrd.checkLetterFound(result.guessLetter);
            if(findHowManyUserGuess === 0){
                if (self.guessedLetters.indexOf(result.guessLetter) < 0){
                    self.guessedLetters.push(result.guessLetter);
                    self.guessesRemaining--;
                    console.log("You guessed a wrong letter!");
                } else {
                    console.log("You already guessed this letter! LOSER!");
                }
            } else {
                if (self.guessedLetters.indexOf(result.guessLetter) < 0){
                    self.guessedLetters.push(result.guessLetter);
                    console.log("You guessed correct!");
                } else {
                    console.log("You already guessed that letter! LOSER!");
                }

                if(self.currentWrd.weFindWord()){
                    console.log("You win! The team was " + self.currentWrd.word);
                    console.log("You're okay!");
                    return;
                }
            }

            console.log("Guesses Remaining: ", self.guessesRemaining);
            console.log(self.currentWrd.wordRender());
            console.log("Letters already guessed: " + self.guessedLetters);

            if((self.guessesRemaining > 0) && (self.currentWrd.found === false)){
                self.keepPromptingUser();
            } else if (self.guessesRemaining === 0){
                console.log("You lose loser!...The team was: " + self.currentWrd.word);
            } else {
                console.log(self.currentWrd.wordRender());
            }
        });
    }
};
//starts game once file runs
hangman.startGame();

