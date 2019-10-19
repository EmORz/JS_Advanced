function solve(word, arr) {

    let wordToReplace = arr[0].toLowerCase().split(' ')[2];

    
    for(let temp of arr){
        var myRegExp = new RegExp(wordToReplace,'i');
        let a =temp.replace(myRegExp,word);
        console.log(a);   
    }
    //return "";
}

solve("JavaScript", ["I love pROgRaMminG", 
"proGramMing is fun", 
"ProgrAmmIng.",
"JSProgramming", "!@#$proGRAMming!@#$"]
)