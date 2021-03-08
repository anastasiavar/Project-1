window.addEventListener('load', function(event) {
    const overlay = document.getElementById("overlay");
    const burgerMenu = document.getElementById("toggle");
    burgerMenu.addEventListener('click', (event) => {
        burgerMenu.classList.toggle("active");
        overlay.classList.toggle("open");
    });
});