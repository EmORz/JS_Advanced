function solve(arr){

    let delimeter = arr.pop();
    let result = arr.join(delimeter);
    console.log(result)
}
solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-'])