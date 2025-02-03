document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitReservation').addEventListener('click', function () {
        // Obtener los valores del formulario
        const fullName = document.getElementById('fullName').value;
        const dni = document.getElementById('dni').value;
        const reservationDate = document.getElementById('reservationDate').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Aquí puedes agregar lógica para validar los campos si es necesario

        // Cerrar el modal (usando Bootstrap 5)
        const modal = new bootstrap.Modal(document.getElementById('reservationModal'));
        modal.hide();

        // Mostrar el alert de SweetAlert
        Swal.fire({
            icon: 'success',
            title: '¡Reserva realizada con éxito!',
            showConfirmButton: false,
            timer: 3000
        });

        // Limpiar el formulario (opcional)
        document.getElementById('reservationForm').reset();
    });
});