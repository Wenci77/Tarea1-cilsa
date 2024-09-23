document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const contrasteBtn = document.getElementById('contraste');

    // Función para validar campos de texto sin números
    function validarCamposSinNumeros() {
        const camposTexto = document.querySelectorAll('input[type="text"]');
        const regexNumeros = /\d/;
        let errores = '';

        camposTexto.forEach(campo => {
            if (regexNumeros.test(campo.value)) {
                errores += `El campo "${campo.previousElementSibling.textContent.trim()}" no puede contener números.\n`;
            }
        });

        return errores;
    }

    // Función para validar campos vacíos
    function validarCamposVacios() {
        const camposTexto = document.querySelectorAll('input[type="text"], input[type="email"], input[type="date"]');
        let errores = '';

        camposTexto.forEach(campo => {
            if (campo.value.trim() === '') {
                errores += `El campo "${campo.previousElementSibling.textContent.trim()}" no puede estar vacío.\n`;
            }
        });

        return errores;
    }
     
    //funcion validar edad mayor a 18 años
    function validarEdad() {
        const fechaDeNacimiento = document.getElementById('fechaDeNacimiento').value;
        const fechaNacimiento = new Date(fechaDeNacimiento);
        const fechaActual = new Date();
        
        // Calcular la diferencia en años
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
        const dia = fechaActual.getDate() - fechaNacimiento.getDate();

        // Ajustar la edad si la fecha actual es antes de la fecha de cumpleaños del año en curso
        if (mes < 0 || (mes === 0 && dia < 0)) {
            edad--;
        }

        if (edad < 18) {
            return 'Debes tener al menos 18 años para registrarte.\n';
        }
        return '';
    }

    // Función para validar al enviar el formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let errores = validarCamposVacios() + validarCamposSinNumeros() + validarEdad();

        if (errores) {
            alert(errores);
        } else {
            alert('Formulario enviado correctamente!');
        }
        form.reset();
    });
});