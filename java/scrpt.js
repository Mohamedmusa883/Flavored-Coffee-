// مثال لإضافة حدث على زر الحجز
const reservationForm = document.querySelector('.reservation-form');

if (reservationForm) {
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Your table has been reserved successfully!');
    reservationForm.reset();
  });
}
