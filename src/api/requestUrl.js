export const peopleUrl = 'https://swapi.dev/api/people/'
export const filmsUrl = 'https://swapi.dev/api/films/'

export const peopleUrlId = (id) => (peopleUrl + id)

export const filmsUrlId = (id) => (filmsUrl + id)

export const peopleUrlPage = (page) => (peopleUrl + '?page=' + page)