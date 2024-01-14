async function requestFilm(){
    try{
        const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
    method: 'GET',
    headers: {
        'X-API-KEY': '739ee6ae-b724-4d2d-ac9e-626e5190393f',
        'Content-Type': 'application/json',
    },
})
const result = await response.json();
console.log(result)
const allFilms = result.items;
console.log(allFilms)
for (let i = 0; i < allFilms.length; i++) {
    const genreNames = allFilms[i].genres.map(genre => genre.name).join(', ');
    const filmDetailsHTML = `
        <li class="card__group-item">
            <h2 class="card__group-item-head">${allFilms[i].nameRu}</h2>
            <img class="card__group-item-img" src="${allFilms[i].posterUrl}" alt="${allFilms[i].nameRu} Poster">
            <p class="card__group-item-rating">Rating: ${allFilms[i].ratingKinopoisk}</p>
            <p class="card__group-item-name">Original Name: ${allFilms[i].nameOriginal}</p>
            <p class="card__group-item-year">Year: ${allFilms[i].year}</p>
            <p class="card__group-item-genr">Genres: ${genreNames}</p>
        </li>
    `;

    const filmDetailsSection = document.querySelector('.card__group-list');
    filmDetailsSection.innerHTML += filmDetailsHTML;
}

    } catch (error) {
        console.log(`Ошибка при получении данных о клиентах: ${error}`);
      }
}
requestFilm();