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
    const id = allFilms[i].kinopoiskId;
    console.log(id)
    const genreObjects = allFilms[i].genres;
    const genreNames = genreObjects.map(genre => genre.genre).join(', ');
    console.log(genreNames);
    if (url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres') {
        const filmDetailsHTML = `
        <li class="card__group-item">
            <img class="card__group-item-img" src="${allFilms[i].posterUrlPreview}" alt="${allFilms[i].nameRu} Poster">
            <h2 class="card__group-item-head">${allFilms[i].nameRu}</h2>
            <p class="card__group-item-name">Оригинальное название: ${allFilms[i].nameOriginal}</p>
            <p class="card__group-item-year">Дата выхода: ${allFilms[i].year}</p>
            <p class="card__group-item-genr">Жанр: ${genreNames}</p>
        </li>
    `;
    const filmDetailsSection = document.querySelector('.card__group-list');
    filmDetailsSection.innerHTML += filmDetailsHTML;
    } else {
        const filmDetailsHTML = `
        <li class="card__group-item">
            <img class="card__group-item-img" src="${allFilms[i].posterUrlPreview}" alt="${allFilms[i].nameRu} Poster">
            <h2 class="card__group-item-head">${allFilms[i].nameRu}</h2>
            <p class="card__group-item-rating">${allFilms[i].ratingKinopoisk}</p>
            <p class="card__group-item-name">Оригинальное название: ${allFilms[i].nameOriginal}</p>
            <p class="card__group-item-year">Дата выхода: ${allFilms[i].year}</p>
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

// This endpoint returns a list of facts and errors in the movie.
async function returnFact(id) {
    try {
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/facts`,{
            method: 'GET',
            headers: {
                'X-API-KEY': '739ee6ae-b724-4d2d-ac9e-626e5190393f',
                'Content-Type': 'application/json',
            }
        });
    const result = await response.json();
    const factArray = result.items;
    console.log(factArray)
    } catch {

    }
}
returnFact(4468)

requestFilm('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=1980&month=MAY');
requestFilm('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=3')
const premier = document.querySelector('.header__item-premier');
const films = document.querySelector('.header__item-films');
const elseButton = document.querySelector('.card__group-else');
const collect = document.querySelector('.header__item-collect');


films.addEventListener('click', () => {
    const oldList = document.querySelector('.card__group-list')
    const listNew = document.createElement('ul');
    listNew.classList.add('card__group-list');
    oldList.parentNode.replaceChild(listNew, oldList);
    requestFilm('https://kinopoiskapiunofficial.tech/api/v2.2/films');
})
premier.addEventListener('click', () => {
    const oldList = document.querySelector('.card__group-list')
    const listNew = document.createElement('ul');
    
    listNew.classList.add('card__group-list');
    oldList.parentNode.replaceChild(listNew, oldList);
    
    requestFilm('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=JANUARY');

})





