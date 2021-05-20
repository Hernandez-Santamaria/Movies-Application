"use strict";

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
            // console.log(movies);
            let htmlStr = " ";
            for (let movie of movies) {
                htmlStr += `<img src="${movie.poster}" alt="posterZ" style="width: 200px;
    height: auto;" class="mt-4">`
                htmlStr += `<h6>${movie.title}</h6>`
                htmlStr += `<div class="dropdown">`
                htmlStr += `<button class="btn" type="button">Info</button>`
                htmlStr += `<div class="dropdown-menu">`
                htmlStr += `<a class="dropdown-item">Released: ${movie.year}</a>`
                htmlStr += `<a class="dropdown-item">Director: ${movie.director}</a>`
                htmlStr += `<a class="dropdown-item">Rating: ${movie.rating}</a>`
                htmlStr += `<a class="dropdown-item">Plot: ${movie.plot}</a>`
                htmlStr += `<a class="dropdown-item">Actors: ${movie.actors}</a>`
                htmlStr += `</div>`
                htmlStr += `<button type="button" class="delete" id="delete" data-value="${movie.id.toString()}">Delete</button>`
                htmlStr += `<button type="button" class="edit" id="edit" data-value="${movie.id.toString()}">Edit</button><br>`
            }
                htmlStr += `</div>`
            $("#main").html(htmlStr);
        })
        .then(function (){
            $('.delete').click(function (){
                // console.log("Delete Button Clicked");
                var movieTagAttr = $(this).attr("data-value");
                console.log(movieTagAttr);
                let deleteMovie = {
                    method : 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                };
                let inputVal = $('#movie-id-delete').val();
                fetch(`https://wakeful-meadow-petroleum.glitch.me/movies/${movieTagAttr}`, deleteMovie)
                    .then(getMovies)
            });
        });
}
getMovies()


// taking the user input and saving to JSON glitch DB
$('#post').click ((e) => {
    e.preventDefault()
    let newMovie = {
            "title" : $('#title').val(),
            "rating" : $('#rating').val(),
             "poster" : $("#poster").val(),
            "year" : $('#year').val(),
            "genre" : $('#genre').val(),
            "director":$('#director').val(),
            "plot" : $('#plot').val(),
            "actors" : $('#actors').val(),
};
    const post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    };
    fetch("https://wakeful-meadow-petroleum.glitch.me/movies",post )
        // .then(resp => resp.json())
        .then(getMovies)
    console.log(newMovie)
});





// need form elements title and rating --- input box for rating --
// make a post button
// js file make an on click action for the post button
// post action --> will add a new element to the table(json object)
//