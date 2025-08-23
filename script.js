// Este código revisa si el usuario llegó a index.html sin pasar por la invitación
if (window.location.href.includes('index.html') && !window.location.href.includes('?fromInvitation')) {
    // Si no viene de invitacion.html, lo redirige
    window.location.replace('invitacion.html');
}

// El resto de tu código existente puede permanecer igual
// -----------------------------------------------------------------
// Cuenta regresiva
const countDownDate = new Date("NOV 15, 2025 00:00:00").getTime();

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);
}

setInterval(updateTimer, 1000);

// -----------------------------------------------------------------
// Acción para el botón de confirmación por WhatsApp
document.getElementById("magicConfirmBtn").addEventListener("click", function () {
    const mensaje = "¡Buenas tardes! Erick y Dulce, confirmo mi asistencia a su boda. ¡Es un honor poder acompañarlos en este día tan especial! ❤️";
    const numero = "50236611165";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});

// -----------------------------------------------------------------
// Modal para los mapas
document.querySelectorAll('.map-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const modal = document.getElementById('mapModal');
        const googleLink = document.getElementById('googleLink');
        const wazeLink = document.getElementById('wazeLink');
        
        googleLink.href = e.currentTarget.dataset.google;
        wazeLink.href = e.currentTarget.dataset.waze;
        
        modal.style.display = 'block';
    });
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('mapModal').style.display = 'none';
});

window.onclick = (e) => {
    if (e.target == document.getElementById('mapModal')) {
        document.getElementById('mapModal').style.display = 'none';
    }
}

document.querySelectorAll('.ac-floral-border').forEach(border => {
    border.addEventListener('mouseover', () => {
        border.style.opacity = '1';
        border.style.transform = 'scale(1.05)';
    });
    
    border.addEventListener('mouseout', () => {
        border.style.opacity = '0.7';
        border.style.transform = 'scale(1)';
    });
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