const dropBtn = document.getElementById('dropdownButton');
const dropMenu = document.getElementById('dropdownMenu');

dropBtn.addEventListener('click', () => {
    const dropIsHidden = dropMenu.classList.contains('hidden');
    dropMenu.classList.toggle('hidden', !dropIsHidden);
    dropMenu.classList.toggle('visible', dropIsHidden);
    dropBtn.classList.toggle('active', dropIsHidden);
});

document.addEventListener('click', (e) => {
    if (!dropBtn.contains(e.target) && !dropMenu.contains(e.target)) {
       
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        dropMenu.classList.add('hidden');
        dropMenu.classList.remove('visible');
        dropBtn.classList.remove('active');
    }
});