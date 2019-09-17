function solve(x,y){

    while(y){
        var temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

console.log(solve(2154, 458))