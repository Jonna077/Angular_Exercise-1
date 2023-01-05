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

function ISBN10(isbn) {
    var len = isbn.length;
    
    if (len !== 10) {
        return false;
    }
    
    return isbn.split('')
        .map(function (num, index) {
           return (num === 'X' && index === len - 1 ? 10 : parseInt(num, 10)) * (index + 1); 
        })
        .reduceRight(function (a, b) {
            return a + b;
        }, 0) % 11 === 0;
  }
   
  let isbn = "1112223339X";

  if (ISBN10(isbn))
   console.log(isbn+" -> True");
  else
  console.log(isbn+" -> False");

function moveZerosToEnd(arr) {
    for(let i= arr.length-1; i>=0; i--){
       if(arr[i]===0){
          arr.push(0) 
          arr.splice(i,1)
       }
    }
    return arr
 }
 console.log(moveZerosToEnd([false, 1, 0, 1, 2, 0, 1, 3, 'a']))



        function Firstconvert(s) {
            
            
            return s.split(' ').map(word=>
                
                word.split('').map(letter=>{
                    if(letter === 'z' ) return 'A'
                    if(letter === '0')  return '0'
                    let x = parseInt(letter) ? letter : String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1)
                    if(/([aeiou])/g.test(x)) return x.toLowerCase()
                    
                    return x
                   
            }).join('')
            
            ).join(' ')
          }
        

       
        function Secondconvert(s) {
            s= s.toLowerCase()
            
            return s.split(' ').map(word=>
                
                word.split('').map(letter=>{
                    if(letter === 'z' ) return 'A'
                    if(letter === '0')  return '0'
                    let x = parseInt(letter) ? letter : String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1)
                    if(/([aeiou])/g.test(x)) return x.toUpperCase()
                    return x
                   
            }).join('')
            
            ).join(' ')
          }
          console.log("Change it up! from Cat30 -> "+Firstconvert('Cat30')+" -> "+Secondconvert('Cat30'))


    