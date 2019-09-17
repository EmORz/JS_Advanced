function circleArea(input){

    let temp = typeof(input);
    if(temp ==='number'){
        let r = Number(input);

        let area = Math.PI * r * r;
        console.log(area.toFixed(2));
    }    
    else {
        console.log(`We can not calculate the circle area, because we receive a ${temp}.`)
    }

}

circleArea(true)