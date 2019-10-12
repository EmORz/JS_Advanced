

class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    getRats(){
        return this.unitedRats;
    }

    unite(otherRats){
        if(otherRats instanceof Rat){
            this.unitedRats.push(otherRats);
        }
    }

    toString(){
        let temp = `${this.name}\n`;

        for (let index = 0; index < this.unitedRats.length; index++) {
            
            temp +=`#${this.unitedRats[index]}`;

        }
        return temp;
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(test.toString());
// Peter
// ##George
// ##Alex
