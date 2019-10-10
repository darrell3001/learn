
//#region 
// import { Cat } from './animal.mjs';
// import { Dog } from './animal.mjs';

// let cat = new Cat();
// let dog = new Dog();


// console.log(cat);
// cat.makeNoise();

// console.log(dog);
// dog.makeNoise();

// console.log(cat.metaData);
// console.log(dog.metaData);


//#endregion


//#region 
const fetch = require("node-fetch");

const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

function getTop100Campers() {
    fetch(apiUrl)
        .then((r) => r.json())
        .then((json) => {
            console.log(json[0]);

        });

}

getTop100Campers();






//#endregion

