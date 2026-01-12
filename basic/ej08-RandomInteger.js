
function runGame() {
    const input = document.getElementById("guess");
    const result = document.getElementById("result");
  
    const userGuess = Number(input.value);
    const randomNumber = Math.floor(Math.random() * 10) + 1; // 1..10
  
    if (!Number.isInteger(userGuess) || userGuess < 1 || userGuess > 10) {
      result.textContent = "Ingresa un número válido del 1 al 10.";
      return;
    }
  
    result.textContent = userGuess === randomNumber
      ? `Good Work! (Número: ${randomNumber})`
      : `Not matched (Número: ${randomNumber})`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", runGame);
  });