document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const fullName = document.getElementById('fullName').value;
        const dni = document.getElementById('dni').value;
        const reservationDate = document.getElementById('reservationDate').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Mostrar el alert de SweetAlert
        Swal.fire({
            icon: 'success',
            title: '¡Reserva realizada con éxito!',
            text: 'Nos pondremos en contacto contigo pronto.',
            showConfirmButton: true,
            confirmButtonColor: '#1B998B'
        });

        // Limpiar el formulario
        form.reset();
    });
});

$(document).ready(function() {
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide'); // Cierra el menú al hacer clic en un enlace
    });
});