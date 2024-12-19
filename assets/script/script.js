const contactLink = document.getElementById('contact-link');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
