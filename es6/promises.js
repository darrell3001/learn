const fetch = require("node-fetch");

//Simplified
function getData2(url) { 
    fetch(url) 
        .then ( function x(response) { return response.json() } )
        .then ( function y(json) { console.log(json) } )
        .catch( function z(error) {console.log('error occured in fetch :' + error)} );
}

// Even more simplified
function getData3(url) {
    fetch(url)
        .then(  (response) => { return response.json() }  )
        .then(  (json) => { console.log(json) }  )
        .catch( (error) => { console.log('an error occured ' + error) } )
}

// Most simple
function getData4(url) {
    fetch(url)
        .then ( response => response.json() )
        .then ( json => console.log(json) )
        .catch( error => console.log("BooHoo - An error occured - "+ error) )
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

getData2(apiUrl);
getData3(apiUrl);
getData4(apiUrl);
