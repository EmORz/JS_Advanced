

function add (num){

    return function (num2){
        return num+num2;
    }
}

let add5 = add(5);

console.log(add5(2))