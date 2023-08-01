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
      if (isExpanded && !state.expanded) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      state.expanded = isExpanded;
    }
  }, 100);
}

function scrollToStats() {
  scrollToElement('#collapseStats', collapseStates.statsExpanded);
}

function scrollToLore() {
  scrollToElement('#collapseLore', collapseStates.loreExpanded);
}