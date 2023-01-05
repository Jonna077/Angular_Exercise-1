"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayPopulation = exports.addPopulation = exports.displayCity = exports.addCity = exports.displayCountries = exports.addCountries = exports.test = void 0;
const test = () => {
    console.log("Hello to the world");
};
exports.test = test;
(0, exports.test)();
var countries = [];
const addCountries = (country) => {
    countries.push(country);
    (0, exports.displayCountries)();
};
exports.addCountries = addCountries;
const displayCountries = () => {
    var listCountries = document.getElementById('myList');
    if (listCountries) {
        while (listCountries.hasChildNodes() && listCountries.firstChild) {
            listCountries.removeChild(listCountries.firstChild);
        }
    }
    countries.forEach(data => {
        let ul = document.createElement('ul');
        ul.innerText = data;
        if (listCountries) {
            listCountries.appendChild(ul);
        }
    });
};
exports.displayCountries = displayCountries;
const addCity = (city) => {
    countries.push(city);
    (0, exports.displayCity)();
};
exports.addCity = addCity;
const displayCity = () => {
    var listCity = document.getElementById('myList');
    if (listCity) {
        while (listCity.hasChildNodes() && listCity.firstChild) {
            listCity.removeChild(listCity.firstChild);
        }
    }
    countries.forEach(data => {
        let ul = document.createElement('ul');
        ul.innerText = data;
        if (listCity) {
            listCity.appendChild(ul);
        }
    });
};
exports.displayCity = displayCity;
// var population:bigint[] = []
const addPopulation = (populations) => {
    countries.push(populations);
    (0, exports.displayPopulation)();
};
exports.addPopulation = addPopulation;
const displayPopulation = () => {
    var listPopulation = document.getElementById('myList');
    if (listPopulation) {
        while (listPopulation.hasChildNodes() && listPopulation.firstChild) {
            listPopulation.removeChild(listPopulation.firstChild);
        }
    }
    countries.forEach(data => {
        let ul = document.createElement('ul');
        ul.innerHTML = (data).toString();
        if (listPopulation) {
            listPopulation.appendChild(ul);
        }
    });
};
exports.displayPopulation = displayPopulation;
