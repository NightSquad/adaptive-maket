import './styles.scss'
let offset = 0;

const   buttons = [...document.getElementsByClassName('button-arrow')],
        leftButton = buttons[0],
        rightButton = buttons[1],
        items = [...document.getElementsByClassName('card')],
        sliderBox = document.getElementsByClassName('slider-items')[0];

leftButton.addEventListener('click', prevSlide);
rightButton.addEventListener('click', nextSlide);

function prevSlide() {
    if (offset === 0) return
    offset = offset - 360
    sliderBox.style.transform = `translateX(${-offset}px)`
}

function nextSlide() {
    if (offset == 360 * (items.length-3)) return
    offset = offset + 360
    sliderBox.style.transform = `translateX(${-offset}px)`
}

