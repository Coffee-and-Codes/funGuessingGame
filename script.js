"use strict";

// Modal area for game

const modal = document.querySelector(".modal");
const btnOpen = document.querySelectorAll(".ready");
const btnClose = document.querySelector("section");

const openModal = () => modal.classList.remove("hidden");

const closeModal = () => modal.classList.add("hidden");

for (let i = 0; i < btnOpen.length; i++)
  btnOpen[i].addEventListener("click", openModal);

// Guessing game

const btnGuess = document.querySelector(".guess");
const btnReset = document.querySelector(".reset");
const winningNumber = document.querySelector(".number");
const winningColor = document.querySelector(".modal");
const guessBox = document.querySelector(".guess-box");
let attempts = 0;
let attemptsCounter = document.querySelector(".attempts");
let hiddenNumber = Math.trunc(Math.random() * 25) + 1;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

btnGuess.addEventListener("click", () => {
  const guessBox = Number(document.querySelector(".guess-box").value);
  if (!guessBox || guessBox > 25) {
    displayMessage("No number or input is over 25! Try again!");
  } else if (guessBox !== hiddenNumber) {
    if (attempts >= 0) {
      displayMessage(guessBox > hiddenNumber ? "Too high!" : "Too low!");
      attempts++;
      attemptsCounter.textContent = attempts;
    }
  } else if (guessBox === hiddenNumber) {
    attempts++;
    attemptsCounter.textContent = attempts;
    winningNumber.textContent = hiddenNumber;
    btnGuess.disabled = "disabled";
    displayMessage("Correct Number!");
    winningColor.style.backgroundColor = "#14a2ae";
  }
});

btnReset.addEventListener("click", () => {
  btnGuess.disabled = false;
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  attempts = 0;
  attemptsCounter.textContent = attempts;
  displayMessage("Start guessing...");
  winningNumber.textContent = "??";
  guessBox.value = "";
  winningColor.style.backgroundColor = "#222";
});
