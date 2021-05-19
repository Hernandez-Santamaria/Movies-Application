"use strict"

fetch ("https://wakeful-meadow-petroleum.glitch.me/movies")
    .then (resp => resp.json())
    // .then(data => console.log(data))
    .then(movies =>{
        let htmlStr = "";
        for (let movie of movies) {
            htmlStr += `<h1>${movie.title}</h1><p>by: ${movie.year} ${movie.director}</p>`;
        }
        $("#main").html(htmlStr);
    });
const url = 'https://wakeful-meadow-petroleum.glitch.me/movies';


const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewObj),
};
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */

// need form elements title and rating --- input box for rating --
// make a post button
// js file make an on click action for the post button
// post action --> will add a new element to the table(json object)
//