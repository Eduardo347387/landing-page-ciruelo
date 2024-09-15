let currentIndex = 0;
let autoPlayInterval;
const intervalTime = 3000; // Tiempo en milisegundos para el auto-play

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100; // Cada slide ocupa el 100% del contenedor
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;

  // Actualiza la clase 'active' en los items
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentIndex);
  });
}

function prevSlide() {
  showSlide(currentIndex - 1);
  resetAutoPlay(); // Reinicia el auto-play al interactuar
}

function nextSlide() {
  showSlide(currentIndex + 1);
  resetAutoPlay(); // Reinicia el auto-play al interactuar
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, intervalTime);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval); // Detén el auto-play actual
  startAutoPlay(); // Reinicia el auto-play
}

// Configura los eventos de clic para los botones
document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

// Inicia el auto-play al cargar la página
startAutoPlay();
