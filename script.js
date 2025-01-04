AOS.init({
    duration: 1500, // Duración de la animación en milisegundos
    once: true // Se ejecuta solo una vez
});

let lastScrollY = 0; // Última posición del scroll

window.addEventListener('scroll', () => {
    const indicator = document.querySelector('.scroll-indicator');

    if (window.scrollY < lastScrollY) {
        // Si el usuario está subiendo
        indicator.style.opacity = '1';
        indicator.style.visibility = 'visible';
        indicator.style.animation = 'fade-in 0.5s forwards'; // Reaparece suavemente
    } else {
        // Si el usuario está bajando
        indicator.style.opacity = '0';
        indicator.style.visibility = 'hidden';
    }

    lastScrollY = window.scrollY; // Actualiza la posición del scroll
});

document.getElementById('emailForm').addEventListener('submit',(e) => {
    e.preventDefault();

    let parms ={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }
    emailjs.send("service_4uebokl", "template_1hrxemj", parms)
    .then(alert("Email sent!"));
    e.target.reset();
})
