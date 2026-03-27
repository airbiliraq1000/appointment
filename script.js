const appointmentInput = document.getElementById('appointmentInput');
const successMessage = document.getElementById('successMessage');
const successImage = document.getElementById('successImage');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');


appointmentInput.addEventListener('input', () => {
    if (appointmentInput.value !== '') {
        confirmBtn.disabled = false;
    } else {
        confirmBtn.disabled = true;
    }
});

confirmBtn.addEventListener('click', theAppointment);

function theAppointment() {
    if ( appointmentInput.value !== '') {
        successMessage.style.display = 'block';
        successImage.style.display = 'block';
    }
    else {
        successMessage.style.display = 'none';
        successImage.style.display = 'none';    
    }
}


cancelBtn.addEventListener('click', () => {
    appointmentInput.value = '';
    successMessage.style.display = 'none';
    successImage.style.display = 'none';
    confirmBtn.disabled = true;
}); 