class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {

        this.innerLength +=length;
    }
    decrease(length){
        this.innerLength -=length;
        if(this.innerLength < 3){

            this.innerLength =0;
        }
    }

    toString(){

        if(this.innerLength===0){
            return '...'
        }
        if(this.innerLength < this.innerString.length){
            this.innerString = this.innerString.substr(0, this.innerLength)+'...';
        }
        return this.innerString;
    }

}

let test = new Stringer("Viktor", 6);
console.log(test.toString()); // Test

test.decrease(9);
console.log(test.innerLength); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

// test.increase(4); 
// console.log(test.toString()); // Test
