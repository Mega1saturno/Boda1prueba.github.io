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
    const mensaje = "¡Buenas tardes! Erick y Dulce, confirmo mi asistencia a su boda. ¡Es un honor poder acompañarlos en este día tan especial! \u2764\uFE0F";
    const numero = "50236611165"; // SIN + ni espacios
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});


// -----------------------------------------------------------------
// Elimina el código existente de los botones de mapa y reemplaza con:

document.querySelectorAll('.map-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const modal = document.getElementById('mapModal');
        const googleLink = document.getElementById('googleLink');
        const wazeLink = document.getElementById('wazeLink');
        
        // Obtener URLs de los data attributes
        googleLink.href = e.currentTarget.dataset.google;
        wazeLink.href = e.currentTarget.dataset.waze;
        
        modal.style.display = 'block';
    });
});

// Cerrar modal
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('mapModal').style.display = 'none';
});

window.onclick = (e) => {
    if (e.target == document.getElementById('mapModal')) {
        document.getElementById('mapModal').style.display = 'none';
    }
}
// Opcional: Animación para los elementos florales
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

// Añade esto al final de script.js para mejor accesibilidad
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.target.click();
        }
    });
});

// Asegurar que los botones del modal sean accesibles
document.querySelectorAll('.map-option').forEach(link => {
    link.setAttribute('role', 'button');
    link.setAttribute('tabindex', '0');
});