  // Function to open the lightbox with a clicked image
  function openLightbox(imgSrc) {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('expandedImg').src = imgSrc;
    document.body.style.overflow = 'hidden'; // Disable scroll on the main page
  }

  // Function to close the lightbox
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scroll on the main page
  }

  // Event listener for the escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });