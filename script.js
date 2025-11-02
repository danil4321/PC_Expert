document.querySelector('form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;

    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Введіть коректну електронну пошту');
        return;
    }

    if (phone && !phoneRegex.test(phone)) {
        e.preventDefault();
        alert('Введіть коректний номер телефону (10-15 цифр, може починатися з +)');
        return;
    }
});