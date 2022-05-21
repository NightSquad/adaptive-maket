import './styles.scss'
const petsInfo = require('./petsInfo.json')

if (window.innerWidth <= 768) {
    var windowWidth = 'sm'
} else if (window.innerWidth <=1280) {
    var windowWidth = 'm'
} else if (window.innerWidth > 1280) {
    var windowWidth = 'l'
}

const petContentLimits = {
    'sm': 3,
    'm': 6,
    'l': 8
}

let currentPage = 1;
let pages = Math.ceil(Object.keys(petsInfo).length / petContentLimits[windowWidth])

function petContentRender(page) {
    const cardContainer = document.getElementsByClassName('cards-container')[0]
    cardContainer.innerHTML = ''
    let i = petContentLimits[windowWidth] * page
    let limit = i + petContentLimits[windowWidth]
    for(i ; i < limit; i++) {
        if (Object.keys(petsInfo)[i]) {
            let card = createCard(Object.keys(petsInfo)[i])
            cardContainer.append(card)
        } else break
    }
}



petContentRender(currentPage - 1)

const sliderConfig = {
    'sm': {width: 1, offset: 310},
    'm': {width: 2, offset: 310},
    'l': {width: 3, offset: 360}
}

const burgerMenuButton = document.getElementById('burger-menu')
const menu = document.getElementsByClassName('menu')[0]

burgerMenuButton.addEventListener('click', () => {
    burgerMenuButton.classList.toggle("rotate")
    menu.classList.toggle("display")
    setTimeout(() => menu.childNodes[1].classList.toggle('active-menu'), 100)
    document.getElementsByTagName('html')[0].classList.toggle('noscroll')
})

menu.addEventListener('click', () => {
    burgerMenuButton.classList.toggle("rotate")
    menu.childNodes[1].classList.toggle('active-menu')
    setTimeout(() => menu.classList.toggle('display'), 200)
    document.getElementsByTagName('html')[0].classList.toggle('noscroll')
})

menu.childNodes[1].addEventListener('click', (e) => e.stopPropagation())


let offset = 0;

function createCard(name) {
    let card = document.createElement('div')
    card.className = 'card'

    let img = document.createElement('img')
    img.src = `./assets/images/pets/pets-${name.toLowerCase()}.png`
    img.alt = name

    let petName = document.createElement('p')
    petName.className = 'pets-card-title'
    petName.textContent = name

    let button = document.createElement('button')
    button.className = 'button-outlined'
    button.textContent = 'Learn more'

    button.addEventListener('click', () => createModal(name))

    card.append(img, petName, button)
    return card
}

if (location.pathname === '/') {
    var     leftButton = document.getElementById('left-button'),
            rightButton = document.getElementById('right-button'),
            sliderBox = document.getElementsByClassName('slider-items')[0];
    leftButton.addEventListener('click', prevSlide);
    rightButton.addEventListener('click', nextSlide);
    const items = [...document.getElementsByClassName('card')];
    items.map(el => el.childNodes[5].addEventListener('click', () => createModal(el.childNodes[3].textContent)))
}

function updatePage() {
    petContentRender(currentPage - 1)
    currentPageButton.textContent = currentPage
    if (currentPage === 1) {
        firstPageButton.disabled = true;
        prevPageButton.disabled = true;
    } else {
        firstPageButton.disabled = false;
        prevPageButton.disabled = false;
    }
    if (currentPage === pages) {
        nextPageButton.disabled = true;
        lastPageButton.disabled = true;
    } else
    {
        nextPageButton.disabled = false;
        lastPageButton.disabled = false;        
    }
}

if (location.pathname === '/our-pets.html') {
    var firstPageButton = document.getElementById('first-page'),
        prevPageButton = document.getElementById('prev-page'),
        currentPageButton = document.getElementById('currentPage'),
        nextPageButton = document.getElementById('next-page'),
        lastPageButton = document.getElementById('last-page');

    updatePage()

    firstPageButton.addEventListener('click', () => {
        currentPage = 1;
        updatePage()
    })

    prevPageButton.addEventListener('click', () => {
        currentPage = currentPage - 1;
        updatePage()
    })

    nextPageButton.addEventListener('click', () => {
        currentPage = currentPage + 1;
        updatePage()
    })

    lastPageButton.addEventListener('click', () => {
        currentPage = pages;
        updatePage()
    })
}



function prevSlide() {
    console.log('clicked')
    if (offset === 0) return
    
    offset = offset - sliderConfig[windowWidth].offset
    sliderBox.style.transform = `translateX(${-offset}px)`
    console.log(offset)
}

function nextSlide() {
    console.log('clicked')
    if (offset == sliderConfig[windowWidth].offset * (items.length-sliderConfig[windowWidth].width)) return
    offset = offset + sliderConfig[windowWidth].offset
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

