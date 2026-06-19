// ========== Typewriter Effect ==========
(function() {
  const el = document.getElementById('typewriter');
  const words = ['Hello World', 'Hello Future', 'Hello Visitor'];
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let isPaused = false;

  function tick() {
    if (isPaused) return;
    const current = words[wordIdx];

    if (!isDeleting) {
      charIdx++;
      el.innerHTML = current.substring(0, charIdx) + '<span class="cursor"></span>';
      if (charIdx === current.length) {
        isPaused = true;
        setTimeout(() => { isPaused = false; isDeleting = true; tick(); }, 2000);
        return;
      }
    } else {
      charIdx--;
      el.innerHTML = current.substring(0, charIdx) + '<span class="cursor"></span>';
      if (charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
      }
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(tick, speed);
  }

  el.innerHTML = '<span class="cursor"></span>';
  setTimeout(tick, 600);
})();

// ========== Floating Particles ==========
(function() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = (60 + Math.random() * 40) + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (4 + Math.random() * 6) + 's';
    container.appendChild(particle);
  }
})();

// ========== Nav Scroll Effect ==========
(function() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 100);
  });
})();

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navH = 64;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
