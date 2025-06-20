// ==================== MENU MOBILE ====================
const menuIcon = document.querySelector('.nav__icon-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

// Alternar menu ao clicar no ícone
menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
  document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Fechar menu ao rolar a página
window.addEventListener('scroll', () => {
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// ==================== CARROSSEL ====================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  // Verifica os limites
  if (index >= totalSlides) currentSlide = 0;
  if (index < 0) currentSlide = totalSlides - 1;
  
  // Esconde todos os slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  
  // Mostra o slide atual
  slides[currentSlide].style.display = 'block';
}

// Navegação do carrossel
document.querySelector('.next')?.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

document.querySelector('.prev')?.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

// Auto-rotação do carrossel (opcional)
let slideInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 5000);

// Pausar ao passar o mouse (opcional)
document.querySelector('.carrossel')?.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

document.querySelector('.carrossel')?.addEventListener('mouseleave', () => {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 5000);
});

// ==================== FORMULÁRIO ====================
const form = document.getElementById('formComentario');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const mensagem = this.querySelector('textarea').value.trim();
    
    if (nome && email && mensagem) {
      // Aqui você pode adicionar o código para enviar o formulário
      alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
      this.reset();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
}

// ==================== ANIMAÇÃO AO ROLAR ====================
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

document.querySelectorAll('.services__card, .proyects__card').forEach(card => {
  observer.observe(card);
});

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', function() {
  // Inicializa o carrossel
  if (slides.length > 0) {
    showSlide(currentSlide);
  }
  
  // Adiciona classe de carregamento
  document.body.classList.add('loaded');
});
