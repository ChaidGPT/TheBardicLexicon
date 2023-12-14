$(document).ready(function() {
    // Attach a click event to your modal trigger button
    $('#snakeModal').on('show.bs.modal', function(e) {
      // Use AJAX to load content from snake.html into the modal body
      $('#snakeModalBody').load('path/to/snake.html');
    });
  });