// Add this function to your script.js file

function search() {
    // Capture user input
    const searchTerm = document.getElementById('searchInput').value;
  
    // Create an array to store found titles
    const foundTitles = [];
  
    // Loop through the page names
    const pageNames = ['barbarian.html', 'page2.html', 'page3.html', ]; // Replace with your page names
    pageNames.forEach(pageName => {
      // Load each page's content
      fetch(pageName)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const title = doc.querySelector('title').textContent;
          
          // Check if the title contains the search term
          if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
            foundTitles.push({ title, link: pageName });
          }
  
          // If this is the last page, redirect to search results
          if (pageNames.indexOf(pageName) === pageNames.length - 1) {
            const searchResults = encodeURIComponent(JSON.stringify(foundTitles));
            window.location.href = `search_results.html?results=${searchResults}`;
          }
        });
    });
  }  