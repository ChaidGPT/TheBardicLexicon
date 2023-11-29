// navbar.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the navbar.html content
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        // Insert the navbar content into the placeholder
        document.getElementById('navbar-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error fetching navbar:', error));
  });  