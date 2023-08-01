function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToStats() {
  const collapseStats = document.querySelector('#collapseStats');
  const isStatsExpanded = collapseStats.getAttribute('aria-expanded') === 'true';
  if (!isStatsExpanded) {
    collapseStats.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToLore() {
  const collapseLore = document.querySelector('#collapseLore');
  const isLoreExpanded = collapseLore.getAttribute('aria-expanded') === 'true';
  if (!isLoreExpanded) {
    collapseLore.scrollIntoView({ behavior: 'smooth' });
  }
}