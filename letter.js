//creates the Letter object

var Letter = function(char){
    //converts guess to lowercase
    this.charac = char.toLowerCase();

    this.appear = false;
    //show the letter in CLI
    this.letterRender = function(){
        if(this.appear){
            return this.charac;
        } else if (this.charac === " "){
            this.appear = true;
            return this.charac;
        } else {
            //returns underscore if guess was incorrect
            return " _ ";
        }
    };
};

exports.Letter = Letter;