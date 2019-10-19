
class Player{
    constructor(nickName){
        this.nickName = nickName;
        this._scores = [];
    }

    addScore(num){
        
        if(isFinite(num)&&!isNaN(parseFloat(num))){
            this._scores.push(Number(num));
        }

        return (this);
    }

    get scoreCount(){
        return this._scores.length;
    }
    get highestScore(){
        return this._scores.sort((a, b) => b - a)[0];
    }

    get topFiveScore(){
        return this._scores.sort((a, b) => b - a).slice(0, 5)
    }

    toString(){
        return `${this.nickName}: [${this._scores.sort((a, b) => b - a)}]`;
    }
}

let peter = new Player("Peter");
 console.log('Highest score: ' + peter.highestScore);
  console.log(`Top 5 score: [${peter.topFiveScore}]`);
   console.log('' + peter); 
   console.log('Score count: ' + peter.scoreCount); 
   peter.addScore(450); peter.addScore(200); console.log('Highest score: ' + peter.highestScore); console.log(`Top 5 score: [${peter.topFiveScore}]`); console.log('' + peter);