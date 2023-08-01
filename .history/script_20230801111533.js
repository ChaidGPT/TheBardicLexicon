function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let collapseStates = {
  statsExpanded: false,
  loreExpanded: false,
};

function scrollToElement(selector, state) {
  setTimeout(() => {
    const element = document.querySelector(selector);
    if (element) {
      const isExpanded = element.classList.contains('show');
      if (isExpanded && !state[selector.slice(1) + "Expanded"]) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      state[selector.slice(1) + "Expanded"] = isExpanded;
    }
  }, 100);
}

function scrollToStats() {
  scrollToElement('#collapseStats', collapseStates);
}

function scrollToLore() {
  scrollToElement('#collapseLore', collapseStates);
}