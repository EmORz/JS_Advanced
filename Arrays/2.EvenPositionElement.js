
function solve(arr){

    let arrEven = [];
    for (let index = 0; index < arr.length; index++) {
        
        if (index % 2 == 0) {
            arrEven.push(arr[index]);
        }
        
    }

    console.log(arrEven.join(" "))
    
}

solve(['5', '10'])