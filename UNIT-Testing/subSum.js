function subSum(arr, start, end) {

    let isObj = typeof arr;
    if(isObj !=="object"){
        return NaN;
    }
    if(start<0){
        start = 0;
    }
    if(end>arr.length-1){
        end = arr.length-1
    }

    let sum =0;
    for (let index = start; index <= end; index++) {

        //let t = typeof arr[index];

        if(typeof arr[index]!=="number"){
            return NaN
        }
        sum+=arr[index];
 
        
    }
    return Number(sum.toFixed(1));
}
module.exports = {subSum}
console.log(
    subSum([10, 'twenty', 30, 40], 0, 2)
)