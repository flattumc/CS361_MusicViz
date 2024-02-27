document.getElementById('chooseFileBtn').addEventListener('click', function() {
  document.getElementById('dialogOverlay').style.display = 'flex';
});

document.getElementById('closeDialog').addEventListener('click', function() {
  document.getElementById('dialogOverlay').style.display = 'none';
});

document.getElementById('submitBtn').addEventListener('click', function() {
  var file = document.getElementById('imageUploadDialog').files[0];
  // Process the file here
  console.log('Uploaded file:', file.name);
  
  // Assuming imageUrl is the URL of the uploaded image
  var imageUrl = URL.createObjectURL(file);

  // Close the dialog after processing
  document.getElementById('dialogOverlay').style.display = 'none';

  // After processing the image, show the song player page and hide the old page
  showSongPlayerPage(imageUrl);
});


function showSongPlayerPage(imageUrl) {
  // Hide the old page
  document.querySelector('.container').style.display = 'none';

  // Show the song player container
  var songPlayerContainer = document.querySelector('.song-player-container');
  songPlayerContainer.style.display = 'block';

  // Set the src attribute of the uploaded image
  var uploadedImage = songPlayerContainer.querySelector('#uploadedImage');
  uploadedImage.src = imageUrl;

  // You can further customize the display or load content as needed here
}

document.getElementById('likeButton').addEventListener('click', function() {
  // Add pop text
  var popText = document.createElement('div');
  popText.textContent = 'Good Bot';
  popText.classList.add('pop-text');
  document.body.appendChild(popText);

  // Remove the pop text after 2 seconds
  setTimeout(function() {
    popText.parentNode.removeChild(popText);
  }, 2000);
});


document.getElementById('dislikeButton').addEventListener('click', function() {
  // Add pop text
  var popText = document.createElement('div');
  popText.textContent = 'Bad Bot';
  popText.classList.add('pop-text');
  document.body.appendChild(popText);

  // Remove the pop text after 2 seconds
  setTimeout(function() {
    popText.parentNode.removeChild(popText);
  }, 2000);
});

document.getElementById('cameraButton').addEventListener('click', function() {
  document.getElementById('dialogOverlay').style.display = 'flex';
});









  