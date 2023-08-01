function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToElement(selector) {
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element && element.classList.contains('show')) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }  