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




// Define navbar and footer outside the function
const navbar = document.querySelector('header');
const footer = document.querySelector('footer');

function scaleImageOnHover(imageContainer, navbar, footer) {
  const image = imageContainer.querySelector('img');
  const originalWidth = image.naturalWidth;
  const originalHeight = image.naturalHeight;

  // Function to calculate the maximum scale factor
  function getMaxScaleFactor() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const maxWidthScale = screenWidth / originalWidth;
    const maxHeightScale = screenHeight / originalHeight;
    return Math.min(maxWidthScale, maxHeightScale, 1.25); // 1.25 is the 25% increase you wanted
  }

  // Apply the scaling transformation on hover
  image.addEventListener('mouseenter', () => {
    const maxScaleFactor = getMaxScaleFactor();
    image.style.transform = `scale(${maxScaleFactor})`;
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

// Call the function with the elements
const imageContainer = document.querySelector('.monsterImageContainer');
scaleImageOnHover(imageContainer, navbar, footer);