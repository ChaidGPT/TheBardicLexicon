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
