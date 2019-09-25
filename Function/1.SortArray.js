
function solve(arr, command){

    if(command =="asc"){
        console.log(arr.sort((a, b)=> a-b))
    }
    else if(command =="desc"){
        console.log(arr.sort((a, b)=> b-a))
        
    }


}

solve([14, 7, 17, 6, 8], 'desc')