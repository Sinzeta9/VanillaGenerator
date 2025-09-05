
import "./style.css";


window.onload = function() {
  //write your code here
};
function randomNumberOrLetter() {
      let randomNumber = Math.floor(Math.random() * 13) + 1;
      if (randomNumber === 1) return "A";
      if (randomNumber === 11) return "J";
      if (randomNumber === 12) return "Q";
      if (randomNumber === 13) return "K";
      return randomNumber;
    }

    function randomEmoji() {
      let suits = ["♠", "♥", "♦", "♣"];
      let randomSuit = suits[Math.floor(Math.random() * suits.length)];
      return randomSuit;
    }

    function generateCard() {
      let headerCard = document.getElementById("headerCard");
      let bodyCard = document.getElementById("bodyCard");
      let footerCard = document.getElementById("footerCard");

      let numberResult = randomNumberOrLetter();
      let emojiResult = randomEmoji();

      headerCard.textContent = emojiResult;
      bodyCard.textContent = numberResult;
      footerCard.textContent = emojiResult;

      if (emojiResult === "♥" || emojiResult === "♦") {
        headerCard.classList.add("red");
        bodyCard.classList.add("red");
        footerCard.classList.add("red");
      } else {
        headerCard.classList.remove("red");
        bodyCard.classList.remove("red");
        footerCard.classList.remove("red");
      }
    }
    
window.onload = generateCard;
window.onload = () => {
  generateCard(); 

  const btn = document.getElementById("generateBtn");
  btn.addEventListener("click", generateCard); 
};