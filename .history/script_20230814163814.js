function goBack() {
  window.history.go(-1);
}

function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToStats() {
  setTimeout(() => {
    const collapseStats = document.querySelector("#collapseStats");
    const isStatsExpanded =
      collapseStats.getAttribute("aria-expanded") === "true";
    if (!isStatsExpanded) {
      collapseStats.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}

function scrollToStats2() {
  setTimeout(() => {
    const collapseStats = document.querySelector("#collapseStats2");
    const isStatsExpanded =
      collapseStats.getAttribute("aria-expanded") === "true";
    if (!isStatsExpanded) {
      collapseStats.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}

function scrollToLore() {
  setTimeout(() => {
    const collapseLore = document.querySelector("#collapseLore");
    const isLoreExpanded =
      collapseLore.getAttribute("aria-expanded") === "true";
    if (!isLoreExpanded) {
      collapseLore.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}

const imageContainer = document.querySelector('.monsterImageContainer');
const navbar = document.querySelector('header');
const footer = document.querySelector('footer');

// Function to scale the image when hovered
function scaleImageOnHover() {
  const image = imageContainer.querySelector('img');
  const originalWidth = image.naturalWidth;
  const originalHeight = image.naturalHeight;

  // Calculate the scaling factors based on the image dimensions
  const scaleX = originalWidth / (originalWidth * 0.75);
  const scaleY = originalHeight / (originalHeight * 0.75);

  // Apply the scaling transformation on hover
  image.addEventListener('mouseenter', () => {
    image.style.transform = `scale(${scaleX}, ${scaleY})`;
    // Bring the scaled image above the navbar and footer
    image.style.zIndex = '1';
    navbar.style.zIndex = '-1';
    footer.style.zIndex = '-1';
  });

  // Reset the scaling transformation when the mouse leaves
  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
    // Reset the z-index back to default
    image.style.zIndex = 'unset';
    navbar.style.zIndex = 'unset';
    footer.style.zIndex = 'unset';
  });
}

// Call the function to enable the scaling effect
scaleImageOnHover();



document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  const numDice = parseInt(document.getElementById('dieNum').value);
  const dieType = parseInt(document.getElementById('dieType').value);
  const modifierType = document.getElementById('modifierType').value;
  const modifierNumberInput = document.getElementById('modifierNumber');
  
  let modifierNumber = 0; // Default value if no modifier is selected

  // Parse modifierNumber only if a modifier is selected
  if (modifierType !== 'none') {
      modifierNumber = parseInt(modifierNumberInput.value);
  }

  const rolls = []; // To store individual roll results
  let totalRoll = 0;

  for (let i = 0; i < numDice; i++) {
      const rollResult = Math.floor(Math.random() * dieType) + 1;
      rolls.push(rollResult); // Store individual roll result
      totalRoll += rollResult;
  }

  if (modifierType === 'plus') {
      totalRoll += modifierNumber;
  } else if (modifierType === 'minus') {
      totalRoll -= modifierNumber;
  }

  // Construct the message including individual rolls and modifier information if applicable
  let message = `Rolling ${numDice} D${dieType}`;
  if (modifierType !== 'none') {
      message += ` with a ${modifierType} modifier of ${modifierNumber}`;
  }

  // Display the calculated total roll, individual rolls, and modifier message in the "diceAnswer" paragraph
  const diceAnswerElement = document.getElementById('diceAnswer');
  diceAnswerElement.textContent = message;
  var diceSound = new Audio();
  diceSound.src = 'sounds/dice.mp3';

  // Display individual rolls one by one with a delay of 500 milliseconds (half a second)
  let currentDelay = 500;
  rolls.forEach((roll, index) => {
    setTimeout(() => {
      diceAnswerElement.textContent = `${message} for individual rolls: ${rolls.slice(0, index + 1).join(', ')} (Total: ${totalRoll})`;
      diceSound.play();
    }, currentDelay);
    currentDelay += 500; // Increment the delay for the next roll
    
  });

  // Display the final total roll after all individual rolls
  setTimeout(() => {
    
    diceAnswerElement.textContent = `${message} for individual rolls: ${rolls.join(', ')} (Total: ${totalRoll})`;
  }, currentDelay);
  
});