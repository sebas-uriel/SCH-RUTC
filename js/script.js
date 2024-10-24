// Efecto de desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar modal al hacer clic en los nombres de los colaboradores
document.querySelectorAll('.collaborator').forEach(collaborator => {
    collaborator.addEventListener('click', function() {
        const modal = document.getElementById('collaboratorModal');
        modal.querySelector('.modal-body').innerHTML = `Información adicional sobre ${this.textContent}...`;
    });
});

// Botón de "volver arriba"
const backToTopButton = document.getElementById('back-to-top');
backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});