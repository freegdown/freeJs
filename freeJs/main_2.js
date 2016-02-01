var votreAge = prompt("votre age ? SVP", 5);
var age = Number(votreAge);

alert(age);
var msg = "";


/*if (age < 40)
    alert("message 1 Ok");
alert("message 2 Ok");
alert("message 3 No");
alert("message 4 No");
*/

/*if (age < 40) {
    alert("message 1 Ok");
    alert("message 2 Ok");
} else {
    alert("message 3 No");
    alert("message 4 No");
}
*/

if (age < 40) {
    alert("mois que 40 ...");
} else if (age == 40) {
    alert("40 exacte");
} else {
    alert("plus que 40");
}
alert("tnx");