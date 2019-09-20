
function solve([input]){
    let wordArr = input.split(/\W+/).filter(w => w !="");

    let obj = {};

    for(let word of wordArr){
        let check = !obj.hasOwnProperty(word);
        if(check){
            obj[word] = 1;
        }
        else{
            obj[word]++;
        }
    }

    console.log(JSON.stringify(obj));
}
solve(['JS devs use Node.js for server-side JS.-- JS for devs'])