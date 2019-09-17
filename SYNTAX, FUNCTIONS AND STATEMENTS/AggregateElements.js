function aggregate (input){
    let sum =0;

    let sumA=0.0;

    let concats = "";

    for (let i = 0; i < input.length; i++){
        sum+=Number(input[i]);
        sumA+=(1/input[i]);
        concats += String(input[i]);
    }
    console.log(sum)
    console.log(sumA)
    console.log(String(concats))
}

aggregate([2, 4, 8, 16]);