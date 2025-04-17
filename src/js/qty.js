document.querySelectorAll('.cart-items').forEach(item => {
    const minusBtn = item.querySelector('.qty a:nth-child(1)');
    const plusBtn = item.querySelector('.qty a:nth-child(3)');
    const qtyInput = item.querySelector('.qty input[type="number"]');

    const step = Number(qtyInput.step) || 1;
    const min = qtyInput.min !== '' ? Number(qtyInput.min) : 1;
    const max = qtyInput.max !== '' ? Number(qtyInput.max) : Infinity;

    minusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (qtyInput.value >= min) {
            qtyInput.value = Number(qtyInput.value) - step;
            if (qtyInput.value == 0) {
                item.remove();
            }
        }
    });

    plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (qtyInput.value < max) {
            qtyInput.value = Number(qtyInput.value) + step;
        }
    })
})