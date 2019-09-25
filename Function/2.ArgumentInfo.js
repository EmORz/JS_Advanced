function solve(...arr){

    let obj = {};

    for(let element of arr){
        let typeOfElement = typeof(element);
        let valueOfElemet = element+"";

        if (!obj.hasOwnProperty(typeOfElement)) {
            
            obj[typeOfElement] = 0;
        }
        obj[typeOfElement]++;
        
        console.log(typeOfElement+": "+valueOfElemet)
    }

    var res = Object.entries(obj).map(([k, v]) => ([k, v]));
    for(let i of res){
        console.log(i[0]+" = "+i[1])
    }
}
solve({name: 'bob'}, 3.333, 9.999)