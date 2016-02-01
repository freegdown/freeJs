var age = Number(prompt("votre age ? SVP", ""));

var msg = "";

for (var counter = 1; counter < age ; counter += 1) {
    msg += "Happy Birthday " + counter + " <br> \n "
    if (counter % 7 ==0)
        break;
}
alert(msg);
document.getElementById("test1").innerHTML = msg;