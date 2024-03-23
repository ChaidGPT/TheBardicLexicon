document.addEventListener("DOMContentLoaded", function() {
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

  function scrollToLords() {
    setTimeout(() => {
      const collapseLord = document.querySelector("#collapseLords");
      const isLordExpanded =
        collapseLord.getAttribute("aria-expanded") === "true";
      if (!isLordExpanded) {
        collapseLord.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
  
  // Image zoom function

  function toggleImageScaleOnClick() {
    const image = imageContainer.querySelector("img");
    const originalWidth = image.naturalWidth;
    const originalHeight = image.naturalHeight;
  
    // Calculate the scaling factors based on the image dimensions
    const scaleX = originalWidth / (originalWidth * 0.75);
    const scaleY = originalHeight / (originalHeight * 0.75);
  
    // Toggle the scaling transformation on click
    image.addEventListener("click", () => {
        // Toggle the scale transformation
        const currentScale = image.style.transform === `scale(${scaleX}, ${scaleY})` ? "scale(1)" : `scale(${scaleX}, ${scaleY})`;
        image.style.transform = currentScale;
        
        // Bring the scaled image above the navbar and footer when scaled
        if (currentScale === `scale(${scaleX}, ${scaleY})`) {
            image.style.zIndex = "1";
            navbar.style.zIndex = "-1";
            footer.style.zIndex = "-1";
        } else {
            // Reset the z-index back to default when not scaled
            image.style.zIndex = "unset";
            navbar.style.zIndex = "unset";
            footer.style.zIndex = "unset";
        }
    });
}
let imageContainer = document.querySelector(".monsterImageContainer");
toggleImageScaleOnClick(imageContainer);

});