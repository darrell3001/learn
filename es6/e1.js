//#region 

// let fName = "Darrell";
// let lName = "Sturdivant";
// let num1 = 1;
// let num2 = 2;


// // const fullName = fName + " " + lName;
// // console.log(fullName);

// const fullName = `${fName} ${lName}`;
// const myNum = `${num1 + num2}`;

// let example = "Hello \n" + "world";
// let example2 = `${fName} 

// ${lName}`;


// console.log(fullName);
// console.log(myNum);

// // document.getElementById("example").innerText = example;
// document.getElementById("example").innerText = example2;

//#endregion 


//#region 

// const personalInfo = {
//     firstName: "Arianna",
//     lastName: "Sturdivant",
//     city: "Carlsbad",
//     state: "California",
//     zipCode: "92009"
// };

// const {firstName: fn, lastName: ln} = personalInfo;
// let myName = `${fn} ${ln}`;

// document.getElementById("nameExample").innerText = myName;
//#endregion 

//#region 
// let myArray = ['Arianna', 'Sturdivant', 'daughter of Darrell'];
// let [fName, lName, title] = myArray;

// var fullName = `${fName} ${lName} ${title}`;
// console.log(fullName);

// title = "sister of Lilly";
// var fullName = `${fName} ${lName} ${title}`;
// console.log(fullName);
//#endregion 

//#region 
// Object Literals
// function Address(city, state, zip) {

//     this.city = city;
//     this.state = state;
//     this.zip = zip;

// }
//#endregion 

//#region
// function addressMaker (city, state, zip) {
//     // const newAddress = {city: city, state: state}; 
//     // these two lines are the same. We dont need to redfine city, state if same name
//     // const newAddress = new Address(city, state, zip);
//     // const newAddress = {city: city, state: state, zip: zip};
//     const newAddress = {city, state, zip};
//     console.log(newAddress);
// };


// addressMaker('Carlsbad', 'Texas', '92009');

//#endregion


//#region
// function addressMaker(address) {
//     const newAddress = {
//         city: address.city,
//         state: address.state,
//         country: 'United States'
//     };
//     console.log(newAddress);
// }

// addressMaker({city: 'Carlsbad', state: 'California'})
//#endregion

//#region
// function addressMaker(address) {
//     // dereference address into {city, state}
//     // This dereferences the list into elements
//     // the list address becomes city, state
//     const {city, state} = address;
    
//     // we can then use those elements to create a new structure
//     const newAddress = {
//         city,
//         state,
//         country: 'USA'
//     };

//     // ${xyz} is used to refer to the variable
//     // backtic ` are used instead of quotes

//     console.log(`${city}, ${state}`);
//     console.log(`${newAddress.city}, ${newAddress.state} ${newAddress.country}`);
// }

// addressMaker({city: 'Carlsbad', state: 'California'});
//#endregion



//#region
// for of loop

// let incomes = [62000, 67000, 75000];
// let total = 0;

// for (const income of incomes) {
//     total += income;
// }

// console.log(total);


//#endregion

//#region
// // for of loop

// let fullName = "Darrell Sturdivant";

// // be careful here. 
// // Its for (char of fullName) not (char in fllName)
// for (char of fullName) {
//     console.log(`${char}`);
// }

//#endregion

//#region
// for of loop

// let fullName = "Darrell Sturdivant";

// // be careful here. 
// // Its for (char of fullName) not (char in fllName)
// // can use for of for any iterable
// for (const char of fullName) {
//     console.log(`${char}`);
// }

//#endregion



//#region
// spread operator

// let example1 = [1,2,3,4,5,6];
// let example2 = example1;    //by ref
// let example3 = [...example1];   // makes a copy


// console.log(`a - ${example1}`);
// console.log(`a - ${example2}`);
// console.log(`a - ${example3}`);
// example1.push("hello");
// example2.push("world");

// console.log(`b - ${example1}`);
// console.log(`b - ${example2}`);
// console.log(`b - ${example3}`);


//#endregion

//#region
// rest operator
// turns a standard array into an iterable

// wont do what we want
// we expec this to iterate, but it only does the first on
// function add(nums) {
//     console.log(nums);
// }

// this sayd turn it in to an iterable
// function add(...nums) {
//     console.log(nums);
// }


// add(4,5,6,7,8);

//#endregion

//#region
// arrow functions
// allows to eliminate need for function()


// function add(...nums) {
//     let total = nums.reduce(function (x,y) {
//         return x+y;
//     });
//     console.log(total);
// }

// these two blocks are the equiv
// function add(...nums) {
//     let total = nums.reduce((x,y) => x + y);
//     console.log(total);
// }


// add(4,5,7,8,12);

//#endregion

//#region
// default parms

// without defalut parms it causes and error
// function add(numArray) {
// function add(numArray = []) {
//     let total = 0;
//     numArray.forEach((element) => {
//         total += element;
//     })
// }

// add();

//#endregion



//#region
// includes

// let numArray = [1,2,3,4,5,6];

// console.log(numArray.indexOf(2));
// console.log(numArray.includes(2));






//#endregion



//#region
// let/set explained

// this will get undefined error
// if (false) {
//     let example = 5;
// }

// console.log(example);


// const example = 5;
// example = 4;
// this will cause and error. cannot ressign a const when premitive type

//however if const is an object type
// then its content can be updated
// const example = ["hello"];
// example.push("world");
// we can also give it values as well
// example.firstName = "Darrell";

// console.log(example);

// howerver, we cannot chagne the type
// example = 3;


//#endregion



//#region
// import/export

// export const data = [1,2,3];

  





//#endregion



//#region 


// let example = "Darrell Sturdivant";

// console.log(example.padEnd(20,' ') + "|");



//#endregion




//#region 
// function add(parm1,) {
//     const example = {
//         name: "darrell",

//     };
//     console.log(`name: ${example.name}`);
// }

// add();


//#endregion


//#region 

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


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


//#endregion



