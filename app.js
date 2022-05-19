import './styles.scss'
const petsInfo = require('./petsInfo.json')
// console.log(petsInfo.Jennifer)
console.log(window.innerWidth)

let offset = 0;


if (location.pathname === '/') {
var     leftButton = document.getElementById('left-button'),
        rightButton = document.getElementById('right-button'),
        sliderBox = document.getElementsByClassName('slider-items')[0];
leftButton.addEventListener('click', prevSlide);
rightButton.addEventListener('click', nextSlide);
}
const items = [...document.getElementsByClassName('card')];
items.map(el => el.childNodes[5].addEventListener('click', () => createModal(el.childNodes[3].textContent)))

function prevSlide() {
    console.log('clicked')
    if (offset === 0) return
    offset = offset - 360
    sliderBox.style.transform = `translateX(${-offset}px)`
    console.log(offset)
}

function nextSlide() {
    console.log('clicked')
    if (offset == 360 * (items.length-3)) return
    offset = offset + 360
    sliderBox.style.transform = `translateX(${-offset}px)`
    console.log(offset)
}

function createModal(name) {
    let modal = document.createElement('div')
    modal.className = 'modal'

    let modalWindow = document.createElement('div')
    modalWindow.className = 'modal-window'

    let closeButton = document.createElement('button')
    closeButton.className = 'button-round close'
    
    let closeIcon = document.createElement('img');
    closeIcon.src = './assets/icons/close.svg'
    closeIcon.alt = 'close'
    closeButton.append(closeIcon)

    closeButton.addEventListener('click', () => modal.remove())

    let petImage = document.createElement('img')
    petImage.src = "./assets/images/pets/pets-" + name.toLowerCase() + ".png" 
    petImage.alt = name;

    let content = document.createElement('div');
    content.className = 'content'

    let title = document.createElement('h3')
    title.textContent = name;
    console.log(name)

    let petType = document.createElement('h4')
    petType.textContent = petsInfo[name].type

    let petDescription = document.createElement('h5')
    petDescription.className = 'description'
    petDescription.textContent = petsInfo[name].description

    let list = document.createElement('ul')

    let Age = document.createElement('li');
    Age.innerHTML = '<h5><b>Age: </b>2 months</h5>'

    let inoculations = document.createElement('li');
    inoculations.innerHTML = '<h5><b>Inoculations: </b>2 months</h5>'

    let diseases = document.createElement('li');
    diseases.innerHTML = '<h5><b>Diseases: </b>none</h5>'

    let parasites = document.createElement('li');
    parasites.innerHTML = '<h5><b>Parasites: </b>none</h5>'

    list.append(Age, inoculations, diseases, parasites)

    content.append(title, petType, petDescription, list)

    modalWindow.append(closeButton, petImage, content)

    modal.append(modalWindow)


    document.getElementsByClassName('wrapper')[0].append(modal)
}

