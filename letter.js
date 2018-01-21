var Letter = function(ltr) {

    this.letter = ltr;

    this.appear = false;

    this.showWord = function() {
        if(this.letter == ' ' ){
            this.appear = true;
            return '  ';
        }if(this.appear === false){
            return ' _ ';
        } else{
            return this.letter;
        }

    };
};

module.exports = Letter;