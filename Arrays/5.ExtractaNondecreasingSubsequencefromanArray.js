function solve(arr){

    let arrSize = arr.length;
    let currentBiggestNum = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < arrSize; i++){
        let tempNum = Number(arr[i]);
        if (tempNum >= currentBiggestNum) {
            currentBiggestNum = tempNum;
             console.log(currentBiggestNum)
                        }

    }
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])