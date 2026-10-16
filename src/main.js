document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.product-button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var product = button.closest('.product-item');
            var description = product.querySelector('p');
            description.hidden = !description.hidden;
            button.textContent = description.hidden ? 'Ver detalhes' : 'Ocultar detalhes';
            button.setAttribute('aria-expanded', String(!description.hidden));
        });
    });
});
