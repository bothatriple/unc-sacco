// Slideshow Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Manual Slide Change (Optional)
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    showSlides();
}

// Mobile Menu Toggle
function toggleMenu() {
    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

// Close Mobile Menu on Link Click
let navLinks = document.querySelectorAll("#nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        let navLinks = document.getElementById("nav-links");
        navLinks.classList.remove("active");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();
           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });

