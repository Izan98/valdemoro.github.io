onst dinosaur = document.getElementById('dinosaur');

// Controlar el salto cuando se presiona la tecla de espacio
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

// Función para hacer que el dinosaurio salte
function jump() {
    let height = 0;
    const jumpInterval = setInterval(function() {
        if (height >= 100) {
            clearInterval(jumpInterval);
            // Descenso después del salto
            const fallInterval = setInterval(function() {
                if (height <= 0) {
                    clearInterval(fallInterval);
                } else {
                    height -= 5;
                    dinosaur.style.bottom = height + 'px';
                }
            }, 20);
        } else {
            height += 5;
            dinosaur.style.bottom = height + 'px';
        }
    }, 20);
}

