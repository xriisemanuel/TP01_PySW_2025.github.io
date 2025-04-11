document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el toggle de plan
    const planToggle = document.getElementById('plan-toggle');
    
    // Seleccionar todos los precios mensuales y anuales
    const monthlyPrices = document.querySelectorAll('.price--monthly');
    const annualPrices = document.querySelectorAll('.price--annual');
    
    // Función para alternar la visualización de precios
    function togglePrices() {
      if (planToggle.checked) {
        // Mostrar precios anuales
        monthlyPrices.forEach(price => {
          price.style.opacity = '0';
          price.style.transform = 'translateY(-10px)';
          price.style.visibility = 'hidden';
        });
        
        annualPrices.forEach(price => {
          price.style.opacity = '1';
          price.style.transform = 'translateY(0)';
          price.style.visibility = 'visible';
        });
      } else {
        // Mostrar precios mensuales
        monthlyPrices.forEach(price => {
          price.style.opacity = '1';
          price.style.transform = 'translateY(0)';
          price.style.visibility = 'visible';
        });
        
        annualPrices.forEach(price => {
          price.style.opacity = '0';
          price.style.transform = 'translateY(10px)';
          price.style.visibility = 'hidden';
        });
      }
    }
    
    // Ejecutar la función cuando cambie el toggle
    planToggle.addEventListener('change', togglePrices);
    
    // Establecer el estado inicial
    togglePrices();
  });