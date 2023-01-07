//Jonna Mae Mayang
//Exercise 1

export const test = () => {
    console.log("Outputs")
}

test();

interface CountriesInfos {
    city: string;
    country: string;
    population: number;
}

export class addCountries implements CountriesInfos {
    city: string;
    country: string;
    population: number;
    constructor(city: string, country: string, population: number) {
        this.city = city;
        this.country = country;
        this.population = population;
    }
}

var countries: addCountries[] = JSON.parse(localStorage.getItem("countries") || "[]");

function addCountry(country: addCountries) {
    countries.push(country);
    localStorage.setItem("country", JSON.stringify(countries));
}

function displayCountries(countryList: addCountries[] = countries) {
    let list = document.getElementById("mylist") as HTMLElement;
    list.innerHTML = "";
    for (let countrys of countryList) {
        let li = document.createElement("li");
        li.textContent = `${countrys.city}, ${countrys.country}, ${countrys.population}`;
        list.appendChild(li);
    }
}

let countryForm = document.getElementById("countryForm") as HTMLElement;
countryForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    let city = (document.getElementById("city") as HTMLInputElement).value;
    let country = (document.getElementById("country") as HTMLInputElement).value;
    let population = (document.getElementById("population") as HTMLInputElement).valueAsNumber;
    addCountry(new addCountries(city, country, population));
    displayCountries(countries);
    
});

let searchInput = document.getElementById("searchCountry") as HTMLInputElement;
searchInput.addEventListener("input", () => {
    let searchCountries = searchInput.value.toLowerCase();
    let filterCountries = countries.filter((countriess) => {
        return (countriess.city.toLowerCase().includes(searchCountries) ||countriess.country.toLowerCase().includes(searchCountries));
    });
    displayCountries(filterCountries);
});


//2
export const ISBN10 = () => {

    let isbn = "1112223339X";

    if ((isbn))
        console.log(isbn + " -> True");
    else
        console.log(isbn + " -> False");
}
ISBN10()



//3
export const movingToZero = () => {
    function moveZerosToEnd(arr: (string | number | boolean)[]) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === 0) {
                arr.push(0)
                arr.slice(i, 1)
            }
        }
        return arr
    }
    console.log(moveZerosToEnd([false, 1, 0, 1, 2, 0, 1, 3, 'a']))
}

movingToZero()



//4
export const converting = () => {
    function Firstconvert(s: string) {


        return s.split(' ').map(word =>

            word.split('').map(letter => {
                if (letter === 'z') return 'A'
                if (letter === '0') return '0'
                let x = parseInt(letter) ? letter : String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1)
                if (/([aeiou])/g.test(x)) return x.toLowerCase()

                return x

            }).join('')

        ).join(' ')
    }



    function Secondconvert(s: string) {
        s = s.toLowerCase()

        return s.split(' ').map(word =>

            word.split('').map(letter => {
                if (letter === 'z') return 'A'
                if (letter === '0') return '0'
                let x = parseInt(letter) ? letter : String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1)
                if (/([aeiou])/g.test(x)) return x.toUpperCase()
                return x

            }).join('')

        ).join(' ')
    }
    console.log("Change it up! from Cat30 -> " + Firstconvert('Cat30') + " -> " + Secondconvert('Cat30'))

}
converting()
