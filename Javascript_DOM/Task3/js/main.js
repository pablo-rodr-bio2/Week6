import data from './db.json' assert { type: 'json' };
"use strict"
const movies = data["movies"]

const container = document.querySelector('.container')

movies.map(movie => {
    // retrieve data from the movie
    const title = movie.title
    const poster = movie.posterUrl
    const year = movie.year
    const genres = movie.genres.join(', ')

    // create div for movie with class 'movie'
    const divMovie = document.createElement('div')
    divMovie.classList.add('movie')

    //poster
    const divPoster = document.createElement('div')
    const imgPoster = document.createElement('img')
    imgPoster.src = poster
    divPoster.appendChild(imgPoster)
    divMovie.appendChild(divPoster)

    // movie info

    const divInfo = document.createElement('div')
    divInfo.classList.add('movie__info')

    // add year 
    const divYear = document.createElement('div')
    divYear.textContent = year
    divInfo.appendChild(divYear)

    //add genres
    const divGenres = document.createElement('div')
    divGenres.textContent = genres
    divInfo.appendChild(divGenres)

    // add title
    const divTitle = document.createElement('h4')
    divTitle.textContent = title
    divInfo.appendChild(divTitle)

    // append info to movie
    divMovie.appendChild(divInfo)

    // append movie to container
    container.appendChild(divMovie)
    
    /*
    if the image fails to load, remove the child from the container
    ugly solution, it would be better to remove the child before adding it
    */
    imgPoster.addEventListener('error', () => container.removeChild(divMovie))
})

