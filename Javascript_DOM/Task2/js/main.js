// document.querySelector('#country__name').innerHTML = JSON.stringify(data)

import data from './country-by-capital-city.json' assert { type: 'json' };

"use strict";

// set initial names for ranking
const names = [["Pablo", 2], ["John Doe", 4], ["Tien", 6], ["Garth Marenghi", 10]]
sessionStorage.setItem("names", JSON.stringify(names))

//import countries
const countries = JSON.parse(JSON.stringify(data))
const countriesLength = countries.length

let tries = 10
let points = 0

let solution = startRound()
// console.log(solution)

document.getElementById('numberTries').textContent = tries

document.querySelector(".country__capitals").addEventListener('click', event => {
    if (event.target.textContent === solution) {
        event.target.style.border = "10px solid green"
        points++
    } else {
        event.target.style.border = "10px solid red"
    }
    setTimeout(function () {
        tries -= 1
        if (tries === 0) {
            askName()
        } else {
            solution = startRound(tries)
            // console.log(solution)
            document.getElementById('numberTries').textContent = tries
        }

    }, 3000)

})


function startRound() {

    // choose the country to guess and append it to DOM
    const countrySolutionIndex = Math.floor(Math.random() * (countriesLength - 1 + 1) + 1) - 1
    const countryName = countries[countrySolutionIndex]["country"]
    document.querySelector('#country__name').innerHTML = countryName

    // Create an array with capitals names
    let capitals = []
    // push the right capital name
    const countrySolutionCapital = countries[countrySolutionIndex]["city"]
    capitals.push(countrySolutionCapital)

    // Create an array with capitals indexes: 1 right and 3 unique randoms
    const capitalsIndexes = [countrySolutionIndex]
    for (let i = 0; i < 3; i++) {
        let randomWrongCapital = null;  //an integer
        while (randomWrongCapital == null || capitalsIndexes.includes(randomWrongCapital)) {
            randomWrongCapital = Math.floor(Math.random() * (countriesLength - 1 + 1) + 1) - 1;
        }
        capitalsIndexes.push(randomWrongCapital)
        capitals.push(countries[randomWrongCapital]["city"])
    }

    // shuffle capitals names so the buttons are randomly sorted
    capitals = shuffle(capitals)

    // removes all the previous capital name options 
    removeAllChildNodes(document.querySelector('.country__capitals'))

    // populates the capital name divs with the capitals and css style
    capitals.forEach(capital => {
        const capitalDiv = document.createElement('div')
        capitalDiv.setAttribute('class', 'country__capital')
        capitalDiv.textContent = capital
        capitalDiv.style.height = "10vh"
        capitalDiv.style.border = "2px solid black";
        capitalDiv.style.borderRadius = "5px";
        capitalDiv.style.display = "flex";
        capitalDiv.style.justifyContent = "center";
        capitalDiv.style.alignItems = "center";
        capitalDiv.style.boxSizing = "border-box";
        document.querySelector('.country__capitals').appendChild(capitalDiv)
    });

    return countrySolutionCapital
}

function askName() {
    let template = document.querySelector("template[id='temSubmitName']")
    let clon = template.content.cloneNode(true)
    let container = document.querySelector(".container")
    removeAllChildNodes(container)
    container.appendChild(clon)
    document.querySelector("form").addEventListener('submit', showRanking)
}

function showRanking(event) {
    event.preventDefault()
    const container = document.querySelector(".container")

    const name = document.getElementById('userName').value

    const ranking = new DocumentFragment()

    let rankingNames = JSON.parse(sessionStorage.getItem("names"))
    rankingNames.push([name, points])
    sessionStorage.setItem("names", JSON.stringify(rankingNames))

    rankingNames.forEach(name => {
        const li = document.createElement('div');
        li.textContent = name;
        ranking.append(li);
    })

    removeAllChildNodes(container)
    container.append(ranking)
}


/*
UTILITY FUNCTIONS
*/


// shuffle function taken from
// https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj#comment-21icc
function shuffle(array) {
    const newArray = [...array]
    const length = newArray.length

    for (let start = 0; start < length; start++) {
        const randomPosition = Math.floor((newArray.length - start) * Math.random())
        const randomItem = newArray.splice(randomPosition, 1)

        newArray.push(...randomItem)
    }

    return newArray
}

// 'removing all childs from a parent' functiontaken from
// https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}