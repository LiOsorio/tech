document.addEventListener("DOMContentLoaded", function() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  
  if (headerPlaceholder) {
    fetch('header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo del header');
        }
        return response.text();
      })
      .then(html => {
        headerPlaceholder.innerHTML = html;
        // Llama a la función que inicializa la modal aquí
        iniciarModal(); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});