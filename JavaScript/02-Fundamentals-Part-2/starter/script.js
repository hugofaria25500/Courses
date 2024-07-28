'use strict';

/*CHALLENGE 1*/

//CASE 1:
let calcAverage = (a, b, c) => (a+b+c) / 3;

function checkWinner(resultDolphins, resultKoalas){
    if((resultDolphins/2) > resultKoalas){
        console.log(`Doplhins Wins (${resultDolphins} vs ${resultKoalas})`);
    } else if(resultDolphins < (resultKoalas/2)) {
        console.log(`Koalas Wins (${resultKoalas} vs ${resultDolphins})`);
    } else {
        console.log(`Draw`);
    }
}

let resultDolphins = calcAverage(44,23,71);
let resultKoalas = calcAverage(65,54,49);

checkWinner(resultDolphins, resultKoalas);
console.log(resultDolphins, resultKoalas);

//CASE 2:

resultDolphins = calcAverage(85,54,41);
resultKoalas = calcAverage(23,34,27);

checkWinner(resultDolphins, resultKoalas);
console.log(resultDolphins, resultKoalas);


/*CHALLENGE 2*/

function calcTip(billValue) {
    return billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.20 * billValue;
};

const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total =[bills[0]+ tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total);

/*CHALLENGE 3*/

const mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,

    calcBmi: function () {
        return this.mass / (this.height * this.height);
    }
}

const john = {
    name: 'John',
    mass: 92,
    height: 1.95,

    calcBmi: function () {
        return this.mass / (this.height * this.height);
    }
}

if(mark.calcBmi() > john.calcBmi()) {
    console.log(`Mark's BMI ${mark.calcBmi()} is higher than John's ${john.calcBmi()}!`)
} else {
    console.log(`John's BMI ${john.calcBmi()} is higher than Mark's ${mark.calcBmi()}!`)
}

/*CHALLENGE 4*/

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++) {
    tips2.push(calcTip(bills2[i]));
    totals2.push(bills2[i] + tips2[i]);
}

function calcAverage2(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(calcAverage2(totals2));
