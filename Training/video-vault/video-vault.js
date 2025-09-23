// Highlight Video Link Click
document.addEventListener('DOMContentLoaded', () => {
    const videoLinks = document.querySelectorAll('.video-item a');

    videoLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert(`You are about to watch: ${link.textContent}`);
        });
    });
});
