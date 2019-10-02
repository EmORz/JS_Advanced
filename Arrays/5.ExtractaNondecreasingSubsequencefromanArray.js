function main (input){

    let result = input.reduce((acc, curr, index, arr) => {

        if (curr >=  Math.max(...acc)) {
            
            acc.push(curr);
        }
        return acc;
    }, []);

    return result.join("\n");
}

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

console.log(main([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]))