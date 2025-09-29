function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const themeButton = document.querySelector('.theme-toggle');
  themeButton.textContent = document.body.classList.contains('light-mode') ? '🌙' : '🌞';
}

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.style.animationPlayState = "paused";
  observer.observe(section);
});
