"use strict"

fetch ("https://wakeful-meadow-petroleum.glitch.me/movies")
    .then (resp => resp.json())
.then(data => console.log(data))


let options = {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json',
    }
}

fetch ("https://wakeful-meadow-petroleum.glitch.me/movies")
    .then (resp => resp.json())
    .then(movies =>{
        let htmlStr = "";
        for (let movie of movies) {
            htmlStr += `<h1>${movie.title}</h1><p>by: ${movie.year} ${movie.director}</p>`;
        }
        $("#main").html(htmlStr);
    });


const url = 'https://wakeful-meadow-petroleum.glitch.me/movies';
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */



const getMovies = () => {
    fetch('https://wakeful-meadow-petroleum.glitch.me/movies')
        .then(resp => resp.json())
        .then(movies => {
            console.log(movies);
            let htmlStr = " ";
            for (let movie of movies) {
                htmlStr += `<h1>${movie.title}</h1><p>by: ${movie.year} ${movie.director}</p>`
            }
            $("#main").html(htmlStr);
        });
}


// post
let newMovie = {
    "title" : "Fantastic Mr Fox",
    "rating" : "8",
    // "poster" : "something"
    "year" : "2009",
    "genre" : "comedy",
    "director": "Wes Anderson",
    "plot" : "fox steals chickens and cider",
    "actors" : "George Clooney, Meryl Streep, Bill Murray, Jason Schwartzman",
    // "id" : "12341234"
};

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
};



$("#post").click(()=> {
    fetch("https://wakeful-meadow-petroleum.glitch.me/movies",postOptions )
        .then(resp => resp.json())
        .then(getMovies)
});




// need form elements title and rating --- input box for rating --
// make a post button
// js file make an on click action for the post button
// post action --> will add a new element to the table(json object)
//