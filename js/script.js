document.addEventListener('DOMContentLoaded', function() {
  // Move element to a random position
  function moveElement() {
    var element = document.getElementById('recommendmovie');
    var position = element.style.position;
    if (position === '' || position === 'static') {
      element.style.position = 'relative';
    }
    var randomX = Math.floor(Math.random() * (window.innerWidth - element.offsetWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - element.offsetHeight));
    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
  }
  var popCount = 0;
  var maxPopCount = 3;
  // Redirect to editMovie.html
  function redirectToEditMovie() {
    window.location.href = './editMovie.html';
  }
  // Add event listener
  document.getElementById('recommendmovie').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    if (popCount < maxPopCount) {
      moveElement();
      popCount++;
    } else {
      redirectToEditMovie();
    }
  });
});