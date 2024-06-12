document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector(".ad__xbutton");
    const popupContainer = document.querySelector(".popup-container");
  
    if (closeButton && popupContainer) {
      closeButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the parent container
        popupContainer.style.display = "none";
      });
  
      popupContainer.addEventListener("click", function() {
        // Replace 'your-link-url' with the URL you want to navigate to
        window.location.href = "https://www.youtube.com/watch?v=uHgt8giw1LY";
      });
    }
  });  