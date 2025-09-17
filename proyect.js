  const proyectos = [
  {
    img: '/img/p5.webp',
    title: 'Fortificación digital para FintechCo',
    description: 'Implementamos un sistema de ciberseguridad multicapa que protege las transacciones y los datos de sus clientes. Redujimos el riesgo de ataques en un 95%.'
  },
  {
    img: '/img/p3.webp',
    title: 'Plataforma de gestión para LogiCorp',
    description: 'Desarrollamos una plataforma personalizada para automatizar la gestión de inventario y optimizar la cadena de suministro, aumentando la eficiencia operativa en un 40%.'
  },
  {
    img: '/img/p2.jpg',
    title: 'Migración a la nube para RetailPlus',
    description: 'Asesoramos y ejecutamos la migración completa de su infraestructura de TI a la nube, reduciendo los costos de mantenimiento y mejorando la escalabilidad de sus servicios.'
  },
  {
    img: '/img/p6.jpg',
    title: 'Integración de IA para HealthCare',
    description: 'Creamos un sistema de diagnóstico asistido por IA que ayuda a los médicos a identificar patrones y a tomar decisiones más precisas en tiempo récord.'
  },
  {
    img: '/img/p7.webp',
    title: 'Desarrollo de App móvil para FoodieApp',
    description: 'Desarrollamos una aplicación móvil intuitiva que conecta a usuarios con restaurantes locales y ofrece un sistema de pedidos y reseñas integrado.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const mainCardImg = document.getElementById('main-card-img');
  const mainCardOverlay = document.getElementById('main-card-overlay');
  const mainCardText = document.getElementById('main-card-text');
  const mainCardContainer = document.getElementById('main-card-container');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentProjectIndex = 0;

  function updateProject(index) {
    const proyecto = proyectos[index];
    mainCardImg.src = proyecto.img;
    mainCardText.innerHTML = `
      <h3 class="text-2xl font-bold mb-2">${proyecto.title}</h3>
      <p class="text-lg">${proyecto.description}</p>
    `;
  }

  // Lógica del Carrousel con botones de flecha
  nextBtn.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex + 1) % proyectos.length;
    updateProject(currentProjectIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex - 1 + proyectos.length) % proyectos.length;
    updateProject(currentProjectIndex);
  });

  // Lógica del Overlay al pasar el cursor
  mainCardContainer.addEventListener('mouseenter', () => {
    mainCardOverlay.classList.remove('opacity-0');
    mainCardOverlay.classList.add('opacity-100');
  });

  mainCardContainer.addEventListener('mouseleave', () => {
    mainCardOverlay.classList.remove('opacity-100');
    mainCardOverlay.classList.add('opacity-0');
  });
});