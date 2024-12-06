
    document.addEventListener("DOMContentLoaded", function() {
        // Trava o scroll inicialmente
        document.body.classList.add('no-scroll');

        // Libera o scroll após 1.2 segundos
        setTimeout(() => {
            document.body.classList.remove('no-scroll');
        }, 1200);
    });

