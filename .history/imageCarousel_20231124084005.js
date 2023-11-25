document.addEventListener('DOMContentLoaded', function () {
    var imageFolder = "imageCarousel"; // Updated folder path
    var imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'avif']; // Added "avif" to the list
  
    var carouselInner = document.querySelector('#imageCarousel .carousel-inner');
  
    fetchImages();
  
    function fetchImages() {
      fetch(imageFolder)
        .then(response => response.text())
        .then(html => {
          var doc = new DOMParser().parseFromString(html, 'text/html');
          var images = Array.from(doc.querySelectorAll('img'));
  
          images.forEach(function (img, index) {
            var src = img.getAttribute('src');
            var extension = src.split('.').pop().toLowerCase();
  
            if (imageExtensions.includes(extension)) {
              var itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';
              var item = document.createElement('div');
              item.className = itemClass;
              item.innerHTML = '<img class="d-block w-100" src="' + src + '" alt="Image">';
              carouselInner.appendChild(item);
            }
          });
        })
        .catch(error => console.error('Error fetching images:', error));
    }
  });  