"use strict";
//Jonna Mae Mayang
//Exercise 1
Object.defineProperty(exports, "__esModule", { value: true });
exports.converting = exports.movingToZero = exports.ISBN10 = exports.addCountries = exports.test = void 0;
const test = () => {
    console.log("Outputs");
};
exports.test = test;
(0, exports.test)();
class addCountries {
    constructor(city, country, population) {
        this.city = city;
        this.country = country;
        this.population = population;
    }
}
exports.addCountries = addCountries;
var countries = JSON.parse(localStorage.getItem("countries") || "[]");
function addCountry(country) {
    countries.push(country);
    localStorage.setItem("country", JSON.stringify(countries));
}
function displayCountries(countryList = countries) {
    let list = document.getElementById("mylist");
    list.innerHTML = "";
    for (let countrys of countryList) {
        let li = document.createElement("li");
        li.textContent = `${countrys.city}, ${countrys.country}, ${countrys.population}`;
        list.appendChild(li);
    }
}
let countryForm = document.getElementById("countryForm");
countryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let population = document.getElementById("population").valueAsNumber;
    addCountry(new addCountries(city, country, population));
    displayCountries(countries);
});
let searchInput = document.getElementById("searchCountry");
searchInput.addEventListener("input", () => {
    let searchCountries = searchInput.value.toLowerCase();
    let filterCountries = countries.filter((countriess) => {
        return (countriess.city.toLowerCase().includes(searchCountries) || countriess.country.toLowerCase().includes(searchCountries));
    });
    displayCountries(filterCountries);
});
//2
const ISBN10 = () => {
    let isbn = "1112223339X";
    if ((isbn))
        console.log(isbn + " -> True");
    else
        console.log(isbn + " -> False");
};
exports.ISBN10 = ISBN10;
(0, exports.ISBN10)();
//3
const movingToZero = () => {
    function moveZerosToEnd(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === 0) {
                arr.push(0);
                arr.slice(i, 1);
            }
        }
        return arr;
    }
    console.log(moveZerosToEnd([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
};
exports.movingToZero = movingToZero;
(0, exports.movingToZero)();
//4
const converting = () => {
    function Firstconvert(s) {
        return s.split(' ').map(word => word.split('').map(letter => {
            if (letter === 'z')
                return 'A';
            if (letter === '0')
                return '0';
            let x = parseInt(letter) ? letter : String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
            if (/([aeiou])/g.test(x))
                return x.toLowerCase();
            return x;
        }).join('')).join(' ');
    }
    function Secondconvert(s) {
        s = s.toLowerCase();
        return s.split(' ').map(word => word.split('').map(letter => {
            if (letter === 'z')
                return 'A';
            if (letter === '0')
                return '0';
            let x = parseInt(letter) ? letter : String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
            if (/([aeiou])/g.test(x))
                return x.toUpperCase();
            return x;
        }).join('')).join(' ');
    }
    console.log("Change it up! from Cat30 -> " + Firstconvert('Cat30') + " -> " + Secondconvert('Cat30'));
};
exports.converting = converting;
(0, exports.converting)();
