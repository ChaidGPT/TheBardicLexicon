$(document).ready(function() {
  // Attach a click event to your modal trigger button
  $('#snakeModal').on('show.bs.modal', function(e) {
    // Use AJAX to load content from snake.html into the modal body
    $('#snakeModalBody').load('path/to/snake.html', function() {
      // After content is loaded, initialize the Snake game
      const script = document.createElement('script');
      script.src = 'path/to/snake.js'; // Replace with the actual path to snake.js
      script.defer = true;
      document.head.appendChild(script);
    });
  });
});