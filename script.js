AOS.init({
    duration: 1500, // Duración de la animación en milisegundos
    once: true // Se ejecuta solo una vez
});

let hasScrolled = false; // Bandera para verificar si el usuario ha hecho scroll

window.addEventListener('scroll', () => {
    const indicator = document.querySelector('.scroll-indicator');

    if (!hasScrolled && window.scrollY > 50) { 
        // Desaparece cuando el usuario baja
        indicator.style.opacity = '0';
        indicator.style.visibility = 'hidden';
        hasScrolled = true; // Evita que vuelva a mostrarse
    }
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
