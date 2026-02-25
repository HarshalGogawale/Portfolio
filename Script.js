window.addEventListener("scroll",function() {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0)
});

const skillLevels = document.querySelectorAll(".skill-level");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute("data-level");
    }
  });
}, { threshold: 0.5 });

skillLevels.forEach(skill => {
  skill.style.width = "0";
  observer.observe(skill);
});
