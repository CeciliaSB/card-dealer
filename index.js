
window.onload = () => {
    document.getElementById("number").textContent = generateRandomNumber();    
};

let generateRandomNumber = () => {
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q"];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
    
};

let generateRandomSuit = () => {
    let mySuit = ["\u2660", "\u2663", "\u2665", "\u2666"];
    let indexSuit = Math.floor(Math.random() * mySuit.length);
    return mySuit[indexSuit];
};


let suits = document.querySelectorAll('.suit');
let randomSuit = generateRandomSuit();

suits.forEach(suit => {
    suit.textContent = randomSuit;
    if (suit.textContent =="\u2665" || suit.textContent =="\u2666"){
        suit.style.color = "red";
    } else {
        suit.style.color ="black";
    }
});
