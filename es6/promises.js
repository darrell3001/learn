const fetch = require("node-fetch");

//Synchronous - oldschool
async function getData0(url) {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
}

//Long form - Async using promises
function getData1(url) { 
    fetch(url) 
        .then ( function funcA(response) { return response.json() } )
        .then ( function funcB(json)     { console.log(json) } )
        .catch( function funcC(error)    { console.log('error occured in fetch :' + error)} );
}

//Simplified using anonymous function names
function getData2(url) { 
    fetch(url) 
        .then ( function (response) { return response.json() } )
        .then ( function (json)     { console.log(json) } )
        .catch( function (error)    { console.log('error occured in fetch :' + error)} );
}

// Even more simplified
function getData3(url) {
    fetch(url)
        .then(  (response) => { return response.json() }  )
        .then(  (json)     => { console.log(json) }  )
        .catch( (error)    => { console.log('an error occured ' + error) } )
}

// Most simple
function getData4(url) {
    fetch(url)
        .then ( response => response.json() )
        .then ( json     => console.log(json) )
        .catch( error    => console.log("BooHoo - An error occured - "+ error) )
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

getData0(apiUrl);
getData1(apiUrl);
getData2(apiUrl);
getData3(apiUrl);
getData4(apiUrl);

