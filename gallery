// Get all the images in the gallery
const galleryImages = document.querySelectorAll('section img');

// Add an event listener to each image
galleryImages.forEach(function(image) {
  // Create a new modal element and append it to the body
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
  document.body.appendChild(modal);

  // Add an event listener to show the modal when the image is clicked
  image.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  // Add an event listener to hide the modal when it is clicked
  modal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
});
