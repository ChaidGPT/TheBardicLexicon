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

// Function to scale the image when hovered
function scaleImageOnHover() {
  const image = imageContainer.querySelector('img');
  const originalWidth = image.naturalWidth;
  const originalHeight = image.naturalHeight;

  // Calculate the scaling factors based on the image dimensions
  const scaleX = originalWidth / (originalWidth * 1.5);
  const scaleY = originalHeight / (originalHeight * 1.5);

  // Apply the scaling transformation on hover
  image.addEventListener('mouseenter', () => {
    image.style.transform = `scale(${scaleX}, ${scaleY})`;
  });

  // Reset the scaling transformation when the mouse leaves
  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
}

// Call the function to enable the scaling effect
scaleImageOnHover();
