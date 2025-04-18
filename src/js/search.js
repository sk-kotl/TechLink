const searchBtn = document.querySelector('#search-btn');
const searchPanel = document.getElementById('search-panel');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchPanel.classList.add('open');
    document.body.classList.add('modal-open');
});

const closeSearchModal = () => {
    searchPanel.classList.remove('open');
    document.body.classList.remove('modal-open');
}

overlay.addEventListener('click', closeSearchModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchPanel.classList.contains('open')) {
        closeSearchModal();
    }
});