export const test = () => {
    console.log("Hello to the world")
}

test();

var countries:any[] = []


export const addCountries = (country: string) => {
    countries.push(country)
    displayCountries()
    
}


export const displayCountries = () => {
    var listCountries = document.getElementById('myList')

    if(listCountries){
        while(listCountries.hasChildNodes() && listCountries.firstChild){
            listCountries.removeChild(listCountries.firstChild)
        }
    }


    countries.forEach(data => {
        let ul = document.createElement('ul')
        ul.innerText = data

        if(listCountries){
            listCountries.appendChild(ul)
        }
    })

}

export const addCity = (city: string) => {
    countries.push(city)
    displayCity()
    
}


export const displayCity = () => {
    var listCity = document.getElementById('myList')

    if(listCity){
        while(listCity.hasChildNodes() && listCity.firstChild){
            listCity.removeChild(listCity.firstChild)
        }
    }


    countries.forEach(data => {
        let ul = document.createElement('ul')
        ul.innerText = data

        if(listCity){
            listCity.appendChild(ul)
        }
    })

}


export const addPopulation = (populations: bigint) => {
    countries.push(populations)
    displayPopulation()
    
}


export const displayPopulation = () => {
    var listPopulation = document.getElementById('myList')

    if(listPopulation){
        while(listPopulation.hasChildNodes() && listPopulation.firstChild){
            listPopulation.removeChild(listPopulation.firstChild)
        }
    }


    countries.forEach(data => {
        let ul = document.createElement('ul')
        ul.innerHTML  = (data).toString()

        if(listPopulation){
            listPopulation.appendChild(ul)
        }

       
    })

}