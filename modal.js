function iniciarModal() {
  // Obtenemos los elementos del DOM después de que el header se ha cargado
  const abrirModalBtn = document.getElementById('abrir-modal');
  const cerrarModalBtn = document.getElementById('cerrar-modal');
  const modalContainer = document.getElementById('modal-container');

  // Aseguramos que los elementos existen antes de añadir los eventos
  if (abrirModalBtn && modalContainer) {
    // Abrir la modal
    abrirModalBtn.addEventListener('click', () => {
      modalContainer.classList.remove('hidden');
    });
  }

  if (cerrarModalBtn && modalContainer) {
    // Cerrar la modal
    cerrarModalBtn.addEventListener('click', () => {
      modalContainer.classList.add('hidden');
    });
  }
  
  if (modalContainer) {
    // Opcional: cerrar la modal al hacer clic fuera del formulario
    window.addEventListener('click', (event) => {
      if (event.target === modalContainer) {
        modalContainer.classList.add('hidden');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  iniciarModal();
});