/*CHALELENGE 1  && CHALELENGE 2 */ 

// bmi = mass / (height * height);

//CASE 1:
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

const totalMark = (markWeight / (markHeight * markHeight));
const totalJohn = (johnWeight / (johnHeight * johnHeight));

let markHigherBMI = (markWeight / (markHeight * markHeight)) > (johnWeight / (johnHeight * johnHeight));

if(markHigherBMI) {
    console.log(`Mark's BMI ${"(" + totalMark + ")"} is higher than John's ${"(" + totalJohn + ")"}!`);
} else {
    console.log(`John's BMI ${"(" + totalJohn + ")"} is higher than Mark's! ${"(" + totalMark + ")"}`);
}

//CASE 2:
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

const totalMark2 = (markWeight / (markHeight * markHeight));
const totalJohn2 = (johnWeight / (johnHeight * johnHeight));

markHigherBMI = (markWeight / (markHeight * markHeight)) > (johnWeight / (johnHeight * johnHeight));

if(markHigherBMI) {
    console.log(`Mark's BMI ${"(" + totalMark2 + ")"} is higher than John's ${"(" + totalJohn2 + ")"}!`);
} else {
    
    console.log(`John's BMI ${"(" + totalJohn2 + ")"} is higher than Mark's! ${"(" + totalMark2 + ")"}`);
}


/*CHALELENGE 3*/ 

// CASE 1:
let dolphinsScore = (96 + 108 + 89) / 3;
let koalasScore = (88 + 112 + 101) / 3;

if(dolphinsScore > koalasScore) {
    console.log(`The Winner is the Dolphins Team with the score of ${dolphinsScore}`);
} else if (dolphinsScore < koalasScore) {
    console.log(`The Winner is the Koalas Team with the score of ${koalasScore}`);
} else {
    console.log(`There's a Draw`);
}

// CASE 2:
dolphinsScore = (97 + 112 + 101) / 3;
koalasScore = (109 + 95 + 123) / 3;

if(dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(`The Winner is the Dolphins Team with the score of ${dolphinsScore}`);
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
    console.log(`The Winner is the Koalas Team with the score of ${koalasScore}`);
} else {
    console.log(`There's a Draw | Dolphins: ${dolphinsScore} AND Koalas: ${koalasScore}`);
}

// CASE 3:
dolphinsScore = (97 + 112 + 101) / 3;
koalasScore = (109 + 95 + 106) / 3;

if(dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(`The Winner is the Dolphins Team with the score of ${dolphinsScore}`);
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
    console.log(`The Winner is the Koalas Team with the score of ${koalasScore}`);
} else {
    console.log(`There's a Draw | Dolphins: ${dolphinsScore} AND Koalas: ${koalasScore}`);
}

/*CHALELENGE 4*/

//CASE 1:
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? 0.2 * bill : 0.15 * bill;
let total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);

//CASE 2:
bill = 40;
tip = bill >= 50 && bill <= 300 ? 0.2 * bill : 0.15 * bill;
total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);

//CASE 3:
bill = 430;
tip = bill >= 50 && bill <= 300 ? 0.2 * bill : 0.15 * bill;
total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);


