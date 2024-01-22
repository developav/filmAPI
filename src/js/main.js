const PREMIER__FILMS = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=JANUARY'
const FILMS__API = 'https://kinopoiskapiunofficial.tech/api/v2.2/films'
const premier = document.querySelector('.header__item-premier');
const films = document.querySelector('.header__item-films');
const elseButton = document.querySelector('.card__group-else');
const collect = document.querySelector('.header__item-collect');




async function requestFilm(url){
    try{
        const response = await fetch(url, {
    method: 'GET',
    headers: {
        'X-API-KEY': '739ee6ae-b724-4d2d-ac9e-626e5190393f',
        'Content-Type': 'application/json',
    },
})
const result = await response.json();
const allFilms = result.items;
for (let i = 0; i < allFilms.length; i++) {
    const genreObjects = allFilms[i].genres;
    const genreNames = genreObjects.map(genre => genre.genre).join(', ');
    let idFilm = allFilms[i].kinopoiskId,
        imgFilm = allFilms[i].posterUrlPreview,
        nameFilm = allFilms[i].nameRu,
        originalFilm = allFilms[i].nameOriginal,
        yearFilm = allFilms[i].year,
        ratingFilm = allFilms[i].ratingKinopoisk;
        // This endpoint returns a list of facts and errors in the movie.
    if (url === PREMIER__FILMS) {
        const filmDetailsHTML = `
        <li class="card__group-item">
            <input type="hidden" class="card__group-item-id" value ="${idFilm}"> 
            <img class="card__group-item-img" src="${imgFilm}" alt="${nameFilm} Poster">
            <h2 class="card__group-item-head">${nameFilm}</h2>
            <p class="card__group-item-name">Оригинальное название: ${originalFilm}</p>
            <p class="card__group-item-year">Дата выхода: ${yearFilm}</p>
            <p class="card__group-item-genr">Жанр: ${genreNames}</p>
           
        </li>
    `;
    const filmDetailsSection = document.querySelector('.card__group-list');
    filmDetailsSection.innerHTML += filmDetailsHTML;
    } else {
        const filmDetailsHTML = `
        <li class="card__group-item">
            <input type="hidden" class="card__group-item-id" value ="${idFilm}"> 
            <img class="card__group-item-img" src="${imgFilm}" alt="${nameFilm} Poster">
            <h2 class="card__group-item-head">${nameFilm}</h2>
            <p class="card__group-item-rating">${ratingFilm}</p>
            <p class="card__group-item-name">Оригинальное название: ${originalFilm}</p>
            <p class="card__group-item-year">Дата выхода: ${yearFilm}</p>
            <p class="card__group-item-genr">Жанр: ${genreNames}</p>
        </li>
    `;
    const filmDetailsSection = document.querySelector('.card__group-list');
    filmDetailsSection.innerHTML += filmDetailsHTML;
    }  
}

} catch (error) {
    console.log(`Ошибка при получении данных о клиентах: ${error}`);
}
}



requestFilm('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=3')

films.addEventListener('click', () => {
    const oldList = document.querySelector('.card__group-list')
    const listNew = document.createElement('ul');
    listNew.classList.add('card__group-list');
    oldList.parentNode.replaceChild(listNew, oldList);
    requestFilm(FILMS__API);
})
premier.addEventListener('click', () => {
    const oldList = document.querySelector('.card__group-list')
    const listNew = document.createElement('ul');
    listNew.classList.add('card__group-list');
    oldList.parentNode.replaceChild(listNew, oldList);
    requestFilm(PREMIER__FILMS);
})
addEventListener('DOMContentLoaded', () => {
    const inputId = document.querySelectorAll('.card__group-item-id');
    const FilmsCard = document.querySelectorAll('.card__group-item');
    FilmsCard.forEach(card => {
        card.addEventListener('click', () => {
            inputId.forEach(input => {
                console.log (input.value)
                returnFact(input.value)
            })
        })
    })
})













