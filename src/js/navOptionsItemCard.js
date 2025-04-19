const navLinks = document.querySelectorAll('.description-options a');
const sections = document.querySelectorAll('.item-description > div[id]');
const navBar = document.querySelector('.description-options');
const navBarHeight = navBar.offsetHeight + 30; 

navLinks.forEach(link => {
link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY - navBarHeight;
    window.scrollTo({
    top: sectionTop,
    behavior: 'smooth'
    });

    navLinks.forEach(l => l.parentElement.classList.remove('active'));
    link.parentElement.classList.add('active');
});
});

window.addEventListener('scroll', () => {
let currentSection = '';
const scrollPos = window.scrollY + navBarHeight; 

sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
    currentSection = section.getAttribute('id');
    }
});

navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
    link.parentElement.classList.add('active');
    }
});
});