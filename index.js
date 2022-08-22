let randomNumber = Math.floor((Math.random())*6) + 1, randomNumber2 = Math.floor((Math.random())*6) + 1;

document.getElementsByClassName("img1")[0].setAttribute("src", ("images/dice" + randomNumber + ".png"));
document.getElementsByClassName("img2")[0].setAttribute("src", ("images/dice" + randomNumber2 + ".png"));

if (randomNumber > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}

console.log(randomNumber, randomNumber2);