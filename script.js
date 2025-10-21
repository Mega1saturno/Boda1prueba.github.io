// Este código revisa si el usuario llegó a index.html sin pasar por la invitación
if (window.location.href.includes('index.html') && !window.location.href.includes('?fromInvitation')) {
    // Si no viene de invitacion.html, lo redirige
    window.location.replace('invitacion.html');
}

// El resto de tu código existente puede permanecer igual
// -----------------------------------------------------------------
// Cuenta regresiva
const countDownDate = new Date("Nov 15, 2025 00:00:00").getTime();

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Se añaden validaciones para evitar números negativos después de la fecha
    document.getElementById('days').innerText = distance > 0 ? Math.floor(distance / (1000 * 60 * 60 * 24)) : 0;
    document.getElementById('hours').innerText = distance > 0 ? Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : 0;
    document.getElementById('minutes').innerText = distance > 0 ? Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) : 0;
    document.getElementById('seconds').innerText = distance > 0 ? Math.floor((distance % (1000 * 60)) / 1000) : 0;

    if (distance < 0) {
        clearInterval(timerInterval);
        // Opcional: Mostrar un mensaje como "¡Es hoy!"
    }
}

const timerInterval = setInterval(updateTimer, 1000);

// Asegurar que la cuenta regresiva se muestre al cargar la página
updateTimer();

// -----------------------------------------------------------------
// Acción para el botón de confirmación por WhatsApp (Solo Novia)

const confirmarNoviaBtn = document.getElementById('confirmarNovia');
if (confirmarNoviaBtn) {
    confirmarNoviaBtn.addEventListener('click', () => {
        const message = encodeURIComponent("¡Hola Dulce! Confirmo mi asistencia a la boda. ¡Es un honor poder acompañarlos en este día tan especial!");
        // FORMATO CORRECTO: CÓDIGO DE PAÍS (502) + NÚMERO, SIN ESPACIOS NI SIGNOS
        const phoneNumber = '50259868962'; 
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
}
// -----------------------------------------------------------------
// Modal para los mapas
document.querySelectorAll('.map-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const modal = document.getElementById('mapModal');
        const googleLink = document.getElementById('googleLink');
        const wazeLink = document.getElementById('wazeLink');
        
        // Asumiendo que data-google y data-waze tienen las URLs completas
        googleLink.href = e.currentTarget.dataset.google;
        wazeLink.href = e.currentTarget.dataset.waze;
        
        if (modal) {
            modal.style.display = 'block';
        }
    });
});

const closeModalBtn = document.querySelector('.close-btn');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        const modal = document.getElementById('mapModal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
}

window.onclick = (e) => {
    const modal = document.getElementById('mapModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

// -----------------------------------------------------------------
// Funcionalidad extra (Dejadas para mantener la integridad del script)

// Interacción visual para imagen principal (se quitó la función duplicada)
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.main-image-container');
    const border = document.querySelector('.main-image-frame');

    if (container && border) {
        // Se corrigió el selector del evento, usando container, no border
        container.addEventListener('mouseover', () => { 
            border.style.opacity = '1';
            border.style.transform = 'scale(1.05)';
        });
        
        container.addEventListener('mouseout', () => {
            border.style.opacity = '0.7';
            border.style.transform = 'scale(1)';
        });
    }
});


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.target.click();
        }
    });
});

document.querySelectorAll('.map-option').forEach(link => {
    link.setAttribute('role', 'button');
    link.setAttribute('tabindex', '0');
});

// -----------------------------------------------------------------
// Música
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('wedding-music');
    let isPlaying = false;
    let hasInteracted = false;

    // Función para reproducir la música
    function playMusic() {
        if (!isPlaying) {
            music.play().then(() => {
                isPlaying = true;
                console.log("Música iniciada por interacción del usuario.");
            }).catch(error => {
                console.log("La reproducción automática de la música ha sido bloqueada. Error:", error);
            });
        }
    }

    // Intenta reproducir la música en la primera interacción del usuario
    const tryPlay = () => {
        if (!hasInteracted) {
            playMusic();
            hasInteracted = true;
        }
    };
    
    // Asignar listeners a interacciones comunes
    document.body.addEventListener('click', tryPlay, { once: true });
    document.body.addEventListener('touchstart', tryPlay, { once: true });
    
    // Intenta reproducir si el DOM está cargado (funciona en algunos navegadores)
    tryPlay();
});