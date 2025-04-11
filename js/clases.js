// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Obtener los botones de filtro (input radio)
    const radioButtons = document.querySelectorAll('input[name="category"]');

    // Función para mostrar/ocultar las clases basadas en la categoría seleccionada
    function filterClasses() {
        // Obtener el valor de la categoría seleccionada
        const selectedCategory = document.querySelector('input[name="category"]:checked').value;

        // Obtener todas las tarjetas de clase
        const classCards = document.querySelectorAll('.class-card');

        // Si la categoría seleccionada es "all", mostrar todas las tarjetas
        classCards.forEach(card => {
            if (selectedCategory === "all" || card.classList.contains(selectedCategory)) {
                card.style.display = "block"; // Mostrar la tarjeta
            } else {
                card.style.display = "none"; // Ocultar la tarjeta
            }
        });
    }

    // Agregar el evento a cada radio button
    radioButtons.forEach(button => {
        button.addEventListener('change', filterClasses);
    });

    // Ejecutar el filtro por defecto (muestra todas las tarjetas al inicio)
    filterClasses();

});
