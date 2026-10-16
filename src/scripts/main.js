document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery img');
    const summary = document.querySelector('#summary');
    summary.textContent = `${images.length} imagens processadas pelo Gulp.`;
});
