/* ============================================================
   SCRIPT.JS — FUNCIONALIDAD GENERAL DEL SITIO
============================================================ */

/* 1. SPLASH SCREEN */
window.addEventListener("load", () => {
    const splash = document.getElementById("splash");

    setTimeout(() => {
        if (splash) {
            splash.style.opacity = "0";
            splash.style.transition = "opacity 0.6s ease";
            setTimeout(() => {
                splash.style.display = "none";
            }, 600);
        }
    }, 2000);
});

/* 2. MENÚ HAMBURGUESA */
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".main-nav ul");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

/* 3. SALUDO PERSONALIZADO — CONTACTO */
const formNombre = document.getElementById("formNombre");
const nombreCliente = document.getElementById("nombreCliente");
const saludoPersonalizado = document.getElementById("saludoPersonalizado");
const redesSociales = document.getElementById("redesSociales");

if (formNombre) {
    formNombre.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = nombreCliente.value.trim();

        if (nombre.length > 0) {
            saludoPersonalizado.innerHTML = `✨ Hola ${nombre}, gracias por visitarnos. ¡Eres bienvenida siempre! ✨`;
            saludoPersonalizado.classList.remove("oculto");
            redesSociales.classList.remove("oculto");
        }

        nombreCliente.value = "";
    });
}

/* 4. SALUDO PERSONALIZADO — INICIO */
const formSaludoInicio = document.getElementById("formSaludoInicio");
const nombreInicio = document.getElementById("nombreInicio");
const mensajeInicio = document.getElementById("mensajeInicio");

if (formSaludoInicio) {
    formSaludoInicio.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = nombreInicio.value.trim();

        if (nombre.length > 0) {
            mensajeInicio.textContent = `✨ Hola ${nombre}, bienvenida a nuestro espacio de belleza 💅✨`;
            mensajeInicio.classList.remove("oculto");
        }

        nombreInicio.value = "";
    });
}

/* 5. ANIMACIÓN SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
} else {
    reveals.forEach(el => el.classList.add("visible"));
}
