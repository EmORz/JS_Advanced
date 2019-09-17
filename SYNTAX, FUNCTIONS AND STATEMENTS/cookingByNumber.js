function solve(input){
    let number = Number(input[0]);

    for (let index = 1; index < input.length; index++) {
        const operations = input[index];

        switch(operations){
            case'chop': number /= 2; break;
            case'dice': number = Math.sqrt(number); break;
            case'spice': number+=1; break;
            case'bake': number*=3; break;
            case'fillet': number*=0.8; break;

        }
        console.log(number.toFixed(1))
        
    }

}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);