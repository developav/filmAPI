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
console.log(allFilms)


for (let i = 0; i < allFilms.length; i++) {
    // const genres = allFilms[i].genres;
    // let genreNames = '';
    // for (let j = 0; j < genres.length; j++){
    //     genreNames+= genres[j].name + ', ';
    // }
    // genreNames = genreNames.slice(0, -2);
    // console.log(genreNames)
    // console.log(allFilms[i].genres);
    const genreObjects = allFilms[i].genres;
    const genreNames = genreObjects.map(genre => genre.genre).join(', ');
    console.log(genreNames);
    const filmDetailsHTML = `
        <li class="card__group-item">
            <img class="card__group-item-img" src="${allFilms[i].posterUrlPreview}" alt="${allFilms[i].nameRu} Poster">
            <h2 class="card__group-item-head">${allFilms[i].nameRu}</h2>
            <p class="card__group-item-rating">${allFilms[i].ratingKinopoisk}</p>
            <p class="card__group-item-name">Original Name: ${allFilms[i].nameOriginal}</p>
            <p class="card__group-item-year">Year: ${allFilms[i].year}</p>
            <p class="card__group-item-genr">Genres: ${genreNames}</p>
        </li>
    `;
    console.log(genreNames)
    const filmDetailsSection = document.querySelector('.card__group-list');
    filmDetailsSection.innerHTML += filmDetailsHTML;

    const card = document.querySelectorAll('.card__group-item');
    card.forEach((card) => {
        card.addEventListener('click', () => {
        const filmPrevHTML = `
            <div class="card__group-prev">
                <h2 class="card__group-item-head">${allFilms[i].nameRu}</h2>
                <img class="card__group-item-img" src="${allFilms[i].posterUrlPreview}" alt="${allFilms[i].nameRu} Poster">
                <p class="card__group-item-rating">Rating: ${allFilms[i].ratingKinopoisk}</p>
                <p class="card__group-item-name">Original Name: ${allFilms[i].nameOriginal}</p>
                <p class="card__group-item-year">Year: ${allFilms[i].year}</p>
                <p class="card__group-item-genr">Genres: ${genreNames}</p>
            </div>
    `;
        })
    })
}
} catch (error) {
    console.log(`Ошибка при получении данных о клиентах: ${error}`);
}
}

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
// collect.addEventListener('click', () => {
//     const oldList = document.querySelector('.card__group-list')
//     const listNew = document.createElement('ul');
//     listNew.classList.add('card__group-list');
//     oldList.parentNode.replaceChild(listNew, oldList);
//     requestTrailer('https://kinopoiskapiunofficial.tech/api/v2.2/films/468/videos');
// })





