var age = Number(prompt("votre age ? SVP", ""));

var msg = "";

while (age > 0){
    msg += "Happy Birhday \n <br>";
    // age = age-1;
    age -= 1;
}

alert(msg);
//document.getElementById("test1").innerHTML = msg;