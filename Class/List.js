class List{
    constructor(){
        this.arr = [];
        this.size =0;
    }

    add(element){

        this.arr.push(element);
        this.arr.sort((a, b) => a- b);
        this.size++;
    }
    remove(index){

//         ["bar", "baz", "foo", "qux"]

// list.splice(0, 2) 
// // Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].
        if(index>=0 && index<this.arr.length){

            this.arr.splice(index, 1);
            this.arr.sort((a, b) => a-b);
            this.size--;
        }
    }

    get(index){
        if(index>=0 && index<this.arr.length){
         
            return this.arr[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
