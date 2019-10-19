function solve() {

    let word = document.getElementById('word').value;
    debugger
    let arr = document.getElementById('text').value;
    

    debugger
   // let wordToReplace = arr[0].toLowerCase().split(' ')[2];

    
    for(let temp of arr){
        var myRegExp = new RegExp(word,'i');
        let a =temp.replace(myRegExp,word);
        console.log(a);   
    }
    //return "";

    
    // <div id="margin">Word: <input id="word" type="text" name="title"></div>

    // <textarea placeholder="Enter the array here." id="text" na
}