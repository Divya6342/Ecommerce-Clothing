const sliderInner = document.querySelector('.slider-inner');
const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;
const totalItems = sliderItems.length;

function slideToNext() {
    currentIndex++;
    if (currentIndex >= totalItems) {
        currentIndex = 0; // Loop back to the first item
    }
    sliderInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically slide every 3 seconds
setInterval(slideToNext, 3000);
