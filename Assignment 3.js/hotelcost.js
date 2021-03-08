// https://github.com/ProgrammingHero1/personal-website
function hotelCost(day) {
    var cost = 0, extraday = 0;
    if (day>20) {
        extraday = day-20;
        cost = 1800 + extraday*50;
    }
    else if (day > 10) {
        extraday = day - 10;
        cost = 1000 + extraday*80;
    } else {
        cost = day*100;
    }
    return cost;
}
var hcost = hotelCost(18);
console.log('cost = ', hcost);