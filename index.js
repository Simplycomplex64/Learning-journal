const menuButton = document.getElementById('menu-button');
const navContainer = document.querySelector('.nav-container');
const viewMore = document.getElementById('view-more')
const vanish = document.querySelector('.vanish')

menuButton.addEventListener('click', function() {
    // Toggle the display property of the navigation container
    if (navContainer.style.display === 'none' || navContainer.style.display === '') {
        navContainer.style.display = 'block';
    } else {
        navContainer.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const viewMoreButton = document.getElementById("view-more");
    const viewLessButton = document.getElementById("view-less");
    const vanishElements = document.querySelectorAll(".vanish");

    viewMoreButton.addEventListener("click", function() {
        vanishElements.forEach(element => {
            element.style.display = "block";
        });
        viewMoreButton.style.display = "none";
        viewLessButton.style.display = "block"
    });

    viewLessButton.addEventListener("click", function() {
        vanishElements.forEach(element => {
            element.style.display = "none";
        });
        viewMoreButton.style.display = "block";
        viewLessButton.style.display = "none"
    });

    // Check if the viewport width is equal to or greater than 870px
    const mediaQuery = window.matchMedia("(min-width: 870px)");

    // Function to handle changes in viewport width
    const handleViewportChange = function(event) {
        if (event.matches) {
            // Display all elements with the vanish class
            vanishElements.forEach(element => {
                element.style.display = "block";
            });
            // Hide both view more and view less buttons
            viewMoreButton.style.display = "none";
            viewLessButton.style.display = "none";
        } else {
            // If viewport width is less than 870px, revert to default behavior
            vanishElements.forEach(element => {
                element.style.display = "none";
            });
            viewMoreButton.style.display = "block";
        }
    };

    // Execute the function on page load
    handleViewportChange(mediaQuery);

    // Listen for changes in viewport width and execute the function accordingly
    mediaQuery.addEventListener("change", handleViewportChange);
});
