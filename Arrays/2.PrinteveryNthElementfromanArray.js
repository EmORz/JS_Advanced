function main(input){

    let step = +input.pop();

    return input.filter((el, index) => {
        return index % step === 0
    }).join("\n")


}

console.log(main(['5', 
'20', 
'31', 
'4', 
'20', 
'2']))