
function solve(name, age, weight, height){

    let temp = height / 100;
    let bmi = Math.round(weight/ temp/temp);

    let result = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi
    }

    let status = 
    (result.BMI<18.5)? "underweight"
    :(result.BMI<25)? "normal"
    :(result.BMI<30)? "overweight" : "obese";

    result.status = status;

    if (result.status=="obese") {
        result.recommendation = "admission required";
    }

    return result;
}
//let temp = JSON.stringify(solve('Honey Boo Boo', 9, 57, 137));
console.log(solve('Peter', 29, 75, 182))