// https://github.com/ProgrammingHero1/personal-website
function budgetCalculator(ghori, mobile, laptop) {
    var budget = ghori*50 + mobile*100 + laptop*500;
    return budget; 
}
var cost = budgetCalculator(3, 5, 9);
console.log('Budget = ', cost);