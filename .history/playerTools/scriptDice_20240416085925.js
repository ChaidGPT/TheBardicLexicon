document.addEventListener("DOMContentLoaded", function () {
  const diceResultsContainer = document.getElementById("diceResults");
  const clearButton = document.querySelector('[aria-label="Clear button"]');
  const form = document.querySelector("form"); // Reference to the form element
  const noSoundCheckbox = document.getElementById("noSound"); // Reference to the noSound checkbox

  // Function to update Clear button visibility
  function updateClearButtonVisibility() {
      clearButton.style.display =
          diceResultsContainer.children.length > 0 ? "block" : "none";
  }

  // Clear button click event
  clearButton.addEventListener("click", function () {
      diceResultsContainer.innerHTML = ""; // Clear the displayed results
      updateClearButtonVisibility(); // Update the Clear button visibility
  });

  // Form submission event
  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      const numDiceInput = document.getElementById("dieNum");
      const numDice = parseInt(numDiceInput.value);

      if (isNaN(numDice) || numDice <= 0) {
          alert("Please enter a valid number of dice.");
          numDiceInput.focus(); // Set focus on the input
          return;
      }

      const dieType = parseInt(document.getElementById("dieType").value);
      const modifierType = document.getElementById("modifierType").value;
      const modifierNumberInput = document.getElementById("modifierNumber");

      let modifierNumber = 0; // Default value if no modifier is selected

      // Parse modifierNumber only if a modifier is selected
      if (modifierType !== "none") {
          modifierNumber = parseInt(modifierNumberInput.value);

          // Validate modifierNumber
          if (isNaN(modifierNumber)) {
              alert("Please enter a valid modifier number.");
              modifierNumberInput.focus(); // Set focus on the input
              return;
          }
      }

      const rolls = []; // To store individual roll results
      let totalRoll = 0;

      for (let i = 0; i < numDice; i++) {
          const rollResult = Math.floor(Math.random() * dieType) + 1;
          rolls.push(rollResult); // Store individual roll result
          totalRoll += rollResult;
      }

      if (modifierType === "plus") {
          totalRoll += modifierNumber;
      } else if (modifierType === "minus") {
          totalRoll -= modifierNumber;
      }

      // Construct the message including individual rolls and modifier information if applicable
      let message = `${numDice} D${dieType}`;
      if (modifierType !== "none") {
          message += ` with a modifier of ${modifierType} ${modifierNumber}`;
      }

      // Create a new <p> element to display the current roll results
      const rollResultParagraph = document.createElement("p");
      rollResultParagraph.classList.add("diceP");

      // Append the current roll results to the diceResults container
      diceResultsContainer.prepend(rollResultParagraph);

      // Function to check if sound should be played
      function shouldPlaySound() {
          return !noSoundCheckbox.checked;
      }

      // Create an audio element for the dice sound
      const diceSound = new Audio();
      diceSound.src = "sounds/dice.mp3";
      const criticalSuccessSound = new Audio();
      criticalSuccessSound.src = "sounds/yay.mp3";
      const criticalFailureSound = new Audio();
      criticalFailureSound.src = "sounds/boo.mp3";

      // Display individual rolls one by one with a delay
      let currentDelay = 500;
      rolls.forEach((roll, index) => {
          setTimeout(() => {
              const currentRolls = rolls.slice(0, index + 1).join(" + ");
              rollResultParagraph.innerHTML = `${message} for individual rolls: ${currentRolls}`;
              if (shouldPlaySound()) {
                  diceSound.play(); // Play sound effect with each roll
              }
          }, currentDelay);
          currentDelay += 500; // Increment the delay for the next roll
      });

      // Display the final total roll after all individual rolls
      setTimeout(() => {
          let finalMessage = `${message} for individual rolls: ${rolls.join(" + ")}`;

          if (numDice === 1 && dieType === 20) {
              if (rolls[0] === 1) {
                  finalMessage +=
                      '<span class="critical-failure"> - Critical Failure!</span>';
                  if (shouldPlaySound()) {
                      criticalFailureSound.play();
                  }
              } else if (rolls[0] === 20) {
                  finalMessage +=
                      '<span class="critical-success"> - Critical Success!</span>';
                  if (shouldPlaySound()) {
                      criticalSuccessSound.play();
                      startConfetti(); //Confetti animation!
                      setTimeout(function () {
                          stopConfetti(); // Stop the confetti
                      }, 1500);
                  }
              }
          }

          finalMessage += ` - Total: <span style="font-size: 24px;">[${totalRoll}]</span>`;

          rollResultParagraph.innerHTML = finalMessage;

          // After displaying results, update Clear button visibility
          updateClearButtonVisibility();
      }, currentDelay + 500); // Wait a bit longer for the last message
  });
});