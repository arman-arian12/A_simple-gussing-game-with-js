let totalAttemt = 5;
let Attemps = 0;
let totelWon = 0;
let totelLost = 0;


const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#cheack");
const resultText = cardBody.querySelector(".resultText");
const lostAndwonMassege = document.createElement("p");

const remainingAtttemps = cardBody.querySelector(".remainingText");



form.addEventListener("submit",function(E){
    E.preventDefault();
    Attemps++;
    if(Attemps > 5){
        guessingNumber.disabled=true;
        checkButton.disabled=true;
    }if(Attemps < 6){
        let guessNumber = Number(guessingNumber.value)
        checkResult(guessNumber);
        remainingAtttemps.innerHTML=`remaining Atttemps;${totalAttemt-Attemps}`;
    }
    guessingNumber.value="";
});

function checkResult(guessingNumber){
    const randomNumber = getRendomNumber(5);
   if(guessingNumber===randomNumber){
        resultText.innerHTML= `you have won;`;
        totelWon++
    }else{
        resultText.innerHTML= `you have lost : random Number was ${randomNumber}`;
        totelLost++
    }
    lostAndwonMassege.innerHTML = `Won:${totelWon},lost:${totelLost} `;
    lostAndwonMassege.classList.add("largr-text");
    cardBody.appendChild(lostAndwonMassege);
}

function getRendomNumber(limit){
    return Math.floor(Math.random() * limit) +1;
}