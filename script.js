document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded!");
});
document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded!");
});
// Modal functionality


openModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.style.display = 'flex';  // Show the modal
    });
});

closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';  // Close the modal
});

// Close the modal if the user clicks outside of the modal
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal functionality
    const openModalButtons = document.querySelectorAll('.open-modal');
    const modal = document.getElementById('project-modal');
    const closeModalButton = document.querySelector('.close-modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', function () {
            modal.style.display = 'flex';  // Show the modal
        });
    });

    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';  // Close the modal
    });

    // Close the modal if the user clicks outside of the modal
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// Modal functionality
const openModalButtons = document.querySelectorAll('.open-modal');
const modal = document.getElementById('project-modal');
const closeModalButton = document.querySelector('.close-modal');

openModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.style.display = 'flex';  // Show the modal
    });
});

closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';  // Close the modal
});

// Close the modal if the user clicks outside of the modal
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal functionality
    const openModalButtons = document.querySelectorAll('.open-modal');
    const modal = document.getElementById('project-modal');
    const closeModalButton = document.querySelector('.close-modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', function () {
            modal.style.display = 'flex';  // Show the modal
        });
    });

    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';  // Close the modal
    });

    // Close the modal if the user clicks outside of the modal
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// Toggle Mobile Menu
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.getElementById("navLinks");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Highlight Active Menu Link
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navItems.forEach((link) => link.classList.remove("active"));
        item.classList.add("active");
    });
});
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".title");
    const image = document.querySelector("img");

    // Animate in titles with a delay
    titles.forEach((title, index) => {
        setTimeout(() => {
            title.style.opacity = 1;
            title.style.transform = "translateY(0)";
        }, index * 500);
    });

    // Add hover effect on the image
    image.classList.add("img-hover-effect");
});
// Adding hover animation to display background color change dynamically
document.querySelectorAll('.competency-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#f0f8ff'; // Light background on hover
    });

    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#fff'; // Reset background color
    });
});

