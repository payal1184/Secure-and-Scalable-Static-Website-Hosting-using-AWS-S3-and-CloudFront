// ===== Skills Click → Project Filter + Animation =====
const skills = document.querySelectorAll('.skill');
const projects = document.querySelectorAll('.project-card');

skills.forEach(skill => {
  skill.addEventListener('click', () => {
    const selected = skill.dataset.skill;

    // Remove active class from all skills
    skills.forEach(s => s.classList.remove('active-skill'));
    skill.classList.add('active-skill'); // highlight selected skill

    // Filter projects
    projects.forEach(p => {
      if(p.dataset.skill === selected) {
        p.style.display = 'block';
        p.classList.add('fade-slide-in'); // Add animation class
      } else {
        p.style.display = 'none';
        p.classList.remove('fade-slide-in');
      }
    });
  });
});

// ===== Hero Text Animated Color =====
const heroText = document.querySelector('.animated-text');
setInterval(() => {
  const colors = ['#f1c40f','#ff6ec4','#7873f5','#1abc9c'];
  heroText.style.color = colors[Math.floor(Math.random()*colors.length)];
}, 1200);

// ===== Project Card Hover Animation =====
// Optional: Extra sparkle effect on hover
projects.forEach(p => {
  p.addEventListener('mouseenter', () => {
    p.classList.add('hover-glow');
  });
  p.addEventListener('mouseleave', () => {
    p.classList.remove('hover-glow');
  });
});

// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({behavior: 'smooth'});
  });
});
