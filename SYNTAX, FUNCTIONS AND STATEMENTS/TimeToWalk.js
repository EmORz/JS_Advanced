function solve(arr1, arr2, arr3){

    let studentsSteps = Number(arr1);
    let studentsFootPrint = Number(arr2);
    let studentsSpeed = Number(arr3);

    let studentsDistance = studentsFootPrint * studentsSteps;

    let speedMeterSec = studentsSpeed / 3.6;
    let time = studentsDistance / speedMeterSec;
    let rest = Math.floor(studentsDistance / 500);

    let min = Math.floor(time  / 60);
    let sec = Math.round(time - (min * 60));
    let hour = Math.floor(time / 3600);

    let temp = "";
    if(hour< 10){
        temp = hour + "0:"+(min+rest)+":"+sec;
    }

    else{
        temp = hour + ":"+(min+rest)+":"+sec;
    }

    console.log(temp);
}

solve(2564, 0.70, 5.5);