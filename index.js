//Список необходимых нам переменных 
const mainContainerEl = document.querySelector('.main-container');
const btnEl = document.querySelector('.btn');
const popUpWindowEl = document.querySelector('.popUp-window');
const popUpBtnEl = document.querySelector('.popUp-btn');
const closeIconEl = document.querySelector('.close-icon');

//Кнопка открывающее нам всплывающее окно 
btnEl.addEventListener('click', () => {
    mainContainerEl.classList.add('active');

    popUpWindowEl.classList.remove('active');
})

//Закрывает всплывающее окно
closeIconEl.addEventListener('click', () => {
    mainContainerEl.classList.remove('active');
    
    popUpWindowEl.classList.add('active')
})

//Отсылает нас на сайт с бананами 
popUpBtnEl.addEventListener('click', () => {
    window.location = 'https://banany.info/';
})