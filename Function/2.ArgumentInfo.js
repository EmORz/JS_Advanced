function solve(...arr){
    Object.entries(
     arr.
    reduce((previos, current) => {

        let typeOfArg = typeof current;


        console.log(`${typeOfArg}: ${current}`)
        if (!previos.hasOwnProperty(typeOfArg)) {
            previos[typeOfArg] = 0;
        }

        previos[typeOfArg]++;

        return previos;
    }, {})).map(([type, count]) => `${type} = ${count}`)
    .forEach((e) => console.log(e));
}
console.log(solve('cat', 42, function () { console.log('Hello world!'); }))