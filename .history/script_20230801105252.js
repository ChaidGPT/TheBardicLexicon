function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToElement(selector) {
    // Add a short delay (e.g., 100ms) to allow the collapsed element to expand
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element && !element.classList.contains('collapse')) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }  