const openBtns = document.querySelectorAll('#check-status-span, #check-status-span-mobile, #check-status-span-footer');
const panel = document.getElementById('order-status-panel');
const closeBtn = document.getElementById('close-check-status-btn');
const overlay = document.getElementById('overlay');

openBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        panel.classList.add('open');
        document.body.classList.add('modal-open');
        mobileMenu.classList.remove('active');
    });
});

const closeModal = () => {
    panel.classList.remove('open');
    document.body.classList.remove('modal-open');
};

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
        closeModal();
    }
});