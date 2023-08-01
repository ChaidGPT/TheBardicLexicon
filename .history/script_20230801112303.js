function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToStats() {
  const collapseStats = document.querySelector('#collapseStats');
  const isStatsExpanded = collapseStats.classList.contains('show');
  if (!isStatsExpanded) {
    collapseStats.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToLore() {
  const collapseLore = document.querySelector('#collapseLore');
  const isLoreExpanded = collapseLore.classList.contains('show');
  if (!isLoreExpanded) {
    collapseLore.scrollIntoView({ behavior: 'smooth' });
  }
}