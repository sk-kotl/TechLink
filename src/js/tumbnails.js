const thumbnails = document.querySelectorAll('.thumbnail');
const mainPhoto = document.querySelector('.main-photo');
const mainPhotoContainer = document.querySelector('.main-photo-container');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnail.classList.add('active');
        mainPhoto.src = thumbnail.src;
    });
});

if (thumbnails.length > 0) {
    thumbnails[0].classList.add('active');
}

mainPhotoContainer.addEventListener('click', () => {
    const fullscreen = document.createElement('div');
    fullscreen.style.position = 'fixed';
    fullscreen.style.top = '0';
    fullscreen.style.left = '0';
    fullscreen.style.width = '100vw';
    fullscreen.style.height = '100vh';
    fullscreen.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fullscreen.style.display = 'flex';
    fullscreen.style.justifyContent = 'center';
    fullscreen.style.alignItems = 'center';
    fullscreen.style.zIndex = '1000';

    const largeImg = document.createElement('img');
    largeImg.src = mainPhoto.src;
    largeImg.style.maxWidth = '90%';
    largeImg.style.maxHeight = '90%';
    largeImg.style.objectFit = 'contain';

    fullscreen.appendChild(largeImg);
    document.body.appendChild(fullscreen);
    
    let currentIndex = Array.from(thumbnails).findIndex(thumb => thumb.src === mainPhoto.src);

    const navigateImages = (direction) => {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % thumbnails.length;
        } else if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        }
        largeImg.src = thumbnails[currentIndex].src;
        mainPhoto.src = thumbnails[currentIndex].src;
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[currentIndex].classList.add('active');
    };

    const keyHandler = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(fullscreen);
            document.removeEventListener('keydown', keyHandler);
        } else if (e.key === 'ArrowRight') {
            navigateImages('next');
        } else if (e.key === 'ArrowLeft') {
            navigateImages('prev');
        }
    };

    document.addEventListener('keydown', keyHandler);

    fullscreen.addEventListener('click', () => {
        document.body.removeChild(fullscreen);
        document.removeEventListener('keydown', keyHandler);
    });
});