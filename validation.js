export function initFormValidation() {
    const form = document.querySelector('.styled-form');
    if (!form) return;

    form.setAttribute('novalidate', true);

    // Створюємо спливаюче повідомлення
    const successBox = document.createElement('div');
    successBox.className = 'success-message-box';
    successBox.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
            <span>Повідомлення надіслано!</span>
        </div>
    `;
    document.body.append(successBox);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Очищення помилок
        const inputs = form.querySelectorAll('.form-input');
        inputs.forEach(input => input.classList.remove('input-error'));
        successBox.style.display = 'none';

        // Збір даних
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const topic = formData.get('topic');
        const message = formData.get('message').trim();
        const consent = form.querySelector('#consent').checked;

        let isValid = true;

        // Валідація

        // Ім'я
        const nameField = form.querySelector('#name');
        if (name.length < 3) {
            setError(nameField, `Minimum 3 characters (currently: ${name.length})`);
            isValid = false;
        }

        // Email
        const emailField = form.querySelector('#email');
        if (!email.includes('@') || !email.includes('.')) {
            setError(emailField, "Enter a valid Email (for example: user@mail.com)");
            isValid = false;
        }

        // Повідомлення
        const messageField = form.querySelector('#message');
        if (message.length < 10) {
            setError(messageField, `Write in more detail (minimum 10 characters, now: ${message.length})`);
            isValid = false;
        }

        // Згода
        const consentField = form.querySelector('#consent');
        if (!consent) {
            consentField.parentElement.style.color = '#d93025';
            isValid = false;
        } else {
            consentField.parentElement.style.color = '';
        }

        // Якщо все валідно
        if (isValid) {
            // Вивід в консоль
            console.clear();
            console.group('%c New application from the form:', 'color: orange; font-weight: bold; font-size: 14px;');
            console.log(`%c Name:`, 'font-weight:bold', name);
            console.log(`%c Email:`, 'font-weight:bold', email);
            console.log(`%c Topic:`, 'font-weight:bold', topic);
            console.log(`%c Message:`, 'font-weight:bold', message);
            console.groupEnd();

            // Очистка та успіх
            form.reset();

            // Показуємо Toast
            successBox.style.display = 'block';

            // Ховаємо через 4 секунди
            setTimeout(() => {
                successBox.style.display = 'none';
            }, 4000);
        }
    });

    function setError(inputElement, messageText) {
        inputElement.classList.add('input-error');
        // Знаходимо span під полем і оновлюємо текст
        const errorSpan = inputElement.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.textContent = messageText;
        }
    }

    console.log('Валідація форми активна.');
}