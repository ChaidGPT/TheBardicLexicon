  // Add an event listener for when a collapse element is shown
  $('.collapse').on('shown.bs.collapse', function () {
    // Get the offset top of the shown element
    var offsetTop = $(this).offset().top;
    
    // Scroll to that position with a smooth animation
    $('html, body').animate({
      scrollTop: offsetTop
    }, 500); // You can adjust the animation speed (in milliseconds) as needed
  });
