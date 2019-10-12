(function result (){
    let Suits = {
        CLUBS: "\u2663",
        DIAMONDS: "\u2666",
        HEARTS: "\u2665",
        SPADES: "\u2660"
    };

       let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

       class Card{
           constructor(face, suit){
               this.face = face;
               this.suit = suit;
           }

           get face(){
               return this._face;
           }

           set face(face){
               if(!Faces.includes(face)){
                throw new Error("Invalid card face: " + face);
               }

               this._face = face;
           }

           set suit(suit){
               if(!Object.keys(Suits).map(x => Suits[x].includes(suit))){
                throw new Error("Invalid card suit: " + suit);
               }
               this._suit = suit;
           }

           get suit(){
               return this._suit;
           }

           toString(){
               return `${this.face}${this.suit}`;
           }
       }

    return {
        Suits:Suits,
        Card:Card
    }
}())
let Suits = result.Suits;
let Card = result.Card;

console.log(Suits.CLUBS)