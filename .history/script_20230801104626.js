function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }