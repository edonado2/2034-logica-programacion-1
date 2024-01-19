let number;
let difficulty = parseInt(prompt("Enter the max number you would like to guess"))
let secretNumber = Math.floor(Math.random() * difficulty) + 1;
let tries = 1;
let maxTries = 3;

while (number !== secretNumber) {
    number = parseInt(prompt(`Enter a number between 1 and ${difficulty}`));

    if (number === secretNumber) {
        alert(`Correct! The number was ${number}. You used ${tries} ${tries === 1 ? "try" : "tries"}`);
    } else if (number > difficulty) {
        alert("Too High!");
    } else {
        if (number > secretNumber) {
            alert("Secret number is less");
        } else {
            alert("Secret number is greater");
        }

        tries++;
    }



    if (tries > maxTries) {
        alert(`You reached max number of attempts ${maxTries}`);
        break;
    }
}
