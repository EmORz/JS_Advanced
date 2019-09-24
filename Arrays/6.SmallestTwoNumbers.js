function solve(arr){

    let sortArr = arr.sort((a, b) => a -b);
    let twoElements = sortArr.slice(0, 2);

    console.log(twoElements.join(" "))
}
solve([30, 15, 50, 5])