// https://github.com/ProgrammingHero1/personal-website

function kilometerToMeter(num){
    num = num*1000;
    return num;
}

var result = kilometerToMeter(5);
console.log('result', result);

function budgetCalculator(ghori, mobile, laptop) {
    var budget = ghori*50 + mobile*100 + laptop*500;
    return budget; 
}
var cost = budgetCalculator(3, 5, 9);
console.log('Budget = ', cost);