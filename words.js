//require letter object
var letter = require("./letter.js");
//create word object
var Word = function(wrd){
    this.word = wrd;
    this.lets = [];
    this.found = false;
    this.getLets = function(word){
        for (var i = 0; i < this.word.length; i++) {
            this.lets.push(new letter.Letter(this.word[i]));
        }
    };
    //method to check if word found
    this.weFindWord = function(){
        var count = 0;
        for (var i = 0; i < this.lets.length; i++) {
            if (this.lets[i].appear){
                count++;
            }
        }
        if (count === this.lets.length){
            this.found = true;
        }
        return this.found;
    };
    //checks if letter found
    this.checkLetterFound = function(guessLetter){
        var whatToReturn = 0;
        for (var i = 0; i < this.lets.length; i++) {
            if(this.lets[i].charac === guessLetter){
                this.lets[i].appear = true;
                whatToReturn++;
            }
        }
        return whatToReturn;
    };
    //renders word
    this.wordRender = function(){
        var str = "";
        for (var i = 0; i < this.lets.length; i++) {
            str += this.lets[i].letterRender();
        }
        return str;
    };

};

exports.Word = Word;