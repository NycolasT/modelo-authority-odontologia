// 1. MENU MOBILE
const mobileToggle = document.querySelector(".mobile-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Abrir/Fechar ao clicar no ícone
mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Troca ícone (Menu <-> X)
  const icon = mobileToggle.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("ph-list");
    icon.classList.add("ph-x");
  } else {
    icon.classList.remove("ph-x");
    icon.classList.add("ph-list");
  }
});

// Fechar ao clicar em um link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = mobileToggle.querySelector("i");
    icon.classList.remove("ph-x");
    icon.classList.add("ph-list");
  });
});

// 2. EFEITO SCROLL NO HEADER (Sombra aparece ao rolar)
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    header.style.height = "70px"; // Diminui um pouco para ficar elegante
  } else {
    header.style.boxShadow = "none"; // Sem sombra no topo
    header.style.height = "80px"; // Altura original
  }
  header.style.transition = "0.3s";
});
