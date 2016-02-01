var votreAge = prompt("votre age ? SVP", 5)

var msg = "";
var age = Number(votreAge);
if (age < 40) {
    msg = "Vous-êtez encore jeune ... " + age;
} else {
    msg = "Vous n'êtez plus jeune ... " + age;
}
document.getElementById("test1").innerHTML = msg;
