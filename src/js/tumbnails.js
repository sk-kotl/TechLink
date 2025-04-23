const thumbnails = document.querySelectorAll('.thumbnail');
        const mainPhoto = document.querySelector('.main-photo');
        const mainPhotoContainer = document.querySelector('.main-photo-container');
        const fullscreenViewer = document.querySelector('.fullscreen-viewer');
        const fullscreenImage = document.querySelector('.fullscreen-image');
        const leftArrow = document.querySelector('.arrow-left');
        const rightArrow = document.querySelector('.arrow-right');

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
            document.body.style.overflow = 'hidden';
            fullscreenViewer.classList.add = 'active';
            fullscreenViewer.classList.toggle('active');
            fullscreenImage.src = mainPhoto.src;

            let currentIndex = Array.from(thumbnails).findIndex(thumb => thumb.src === mainPhoto.src);

            const navigateImages = (direction) => {
                if (direction === 'next') {
                    currentIndex = (currentIndex + 1) % thumbnails.length;
                } else if (direction === 'prev') {
                    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
                }
                fullscreenImage.src = thumbnails[currentIndex].src;
                mainPhoto.src = thumbnails[currentIndex].src;
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                thumbnails[currentIndex].classList.add('active');
            };

            leftArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateImages('prev');
            });

            rightArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateImages('next');
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    document.body.style.overflow = 'auto';
                    fullscreenViewer.classList.remove('active');
                    document.removeEventListener('keydown', 'ArrowRight');
                    document.removeEventListener('keydown', 'ArrowLeft');
                } else if (e.key === 'ArrowRight') {
                    navigateImages('next');
                } else if (e.key === 'ArrowLeft') {
                    navigateImages('prev');
                }
            });

            fullscreenViewer.addEventListener('click', (e) => {
                if (e.target === fullscreenViewer) {
                    document.body.style.overflow = 'auto';
                    fullscreenViewer.classList.remove('active');
                    document.removeEventListener('keydown', (e));
                }
            });

            fullscreenViewer.addEventListener('transitionend', () => {
                if (fullscreenViewer.style.display === 'flex') {
                    document.addEventListener('keydown');
                }
            });
        });

        