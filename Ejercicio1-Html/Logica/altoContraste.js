document.getElementById('contraste').addEventListener('click', function() {
    const altoContrasteLink = document.getElementById('altoContrasteCSS');
    
    if (altoContrasteLink.disabled) {
        altoContrasteLink.disabled = false;
        this.textContent = 'Modo Claro';
    } else {
        altoContrasteLink.disabled = true;
        this.textContent = 'Modo Oscuro';
    }
});