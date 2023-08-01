function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  let isStatsExpanded = false;
  let isLoreExpanded = false;
  
  function scrollToElement(selector, expandedState) {
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) {
        const isExpanded = element.classList.contains('show');
        if (isExpanded && !expandedState) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        expandedState = isExpanded;
      }
    }, 100);
  }
  
  function scrollToStats() {
    scrollToElement('#collapseStats', isStatsExpanded);
  }
  
  function scrollToLore() {
    scrollToElement('#collapseLore', isLoreExpanded);
  }  