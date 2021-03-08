// https://github.com/ProgrammingHero1/personal-website
function megaFriend (str) {
    var len=0, j=0;

    for(var i = 0; i< str.length; i++) {
        var naam = str[i];
        if (len<naam.length) {
            len = naam.length;
            j = i;
        }
    } return str[j];
} 
var name = ["Shita", "khan Jahan Ali", "Sanjida"];

console.log(megaFriend(name));


