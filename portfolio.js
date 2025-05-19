document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const hiddenContent = document.getElementById('hiddenContent');

    learnMoreBtn.addEventListener('click', () => {
        if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
            hiddenContent.style.display = 'block'; // Show hidden content
            learnMoreBtn.innerHTML = '<i class="fas fa-arrow-up"></i> Show Less'; // Change button text and icon
        } else {
            hiddenContent.style.display = 'none'; // Hide content
            learnMoreBtn.innerHTML = '<i class="fas fa-arrow-down"></i> Learn More'; // Change button text back
        }
    });
});
