function changeModalImage(imageSrc, element) {
    var modalImage = document.getElementById("imgb");
    

    var thumbnails = document.querySelectorAll('#grid1 .col-2 img');
    thumbnails.forEach(function(thumbnail) {
      thumbnail.classList.remove('active-thumbnail');
    });
    

    element.classList.add('active-thumbnail');
    

    modalImage.src = imageSrc;
  }


  document.addEventListener("DOMContentLoaded", function() {

    const racingLink = document.getElementById("racingLink");
    const sportsCarsLink = document.getElementById("sportsCarsLink");
    const collectionsLink = document.getElementById("collectionsLink");
    const experiencesLink = document.getElementById("experiencesLink");
  
    homeLink.addEventListener("click", function(event) {
      event.preventDefault(); 
      navigateToPage("index.html"); 
    });

    racingLink.addEventListener("click", function(event) {
      event.preventDefault(); 
      navigateToPage("racing.html");
    });
  
    sportsCarsLink.addEventListener("click", function(event) {
      event.preventDefault();
      navigateToPage("sports_cars.html"); 
    });
  
    collectionsLink.addEventListener("click", function(event) {
      event.preventDefault();
      navigateToPage("collections.html");
    });
  
    experiencesLink.addEventListener("click", function(event) {
      event.preventDefault();
      navigateToPage("experiences.html"); 
    });
  
    function navigateToPage(url) {
      window.location.href = url;
    }
  });