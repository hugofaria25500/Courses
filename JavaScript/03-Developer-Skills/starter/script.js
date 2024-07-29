// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let temps = [17, 21, 23];
let temps2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let forecast = "... ";

    for(let i = 0; i < arr.length; i++)  {
        forecast += `${arr[i]}ºC in ${i+1} days ... `; 
    }

    return forecast;
}

console.log(printForecast(temps));
console.log(printForecast(temps2));