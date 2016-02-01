var age = Number(prompt("votre age ? SVP", ""));

var msg = "";

for (var theAge = age; theAge >0 ; theAge -= 1) {
    msg += "Happy Birthday \n <br>"
}
alert(msg);
document.getElementById("test1").innerHTML = msg;