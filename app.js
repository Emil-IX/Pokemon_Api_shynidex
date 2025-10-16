
const containert = document.getElementById('container')
const findPokemonInput = document.getElementById('findPokemon')
const loader = document.getElementById('loader')
const countText = document.getElementById('count')

let packPokemon = []



//Fet pokemon from pokeApi
const getPokemons = async (base = 1, limit = 9) => {

    loader.classList.add('loader')
    
    for (base; base <= limit; base++) {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${base}`)
        const data = await response.json()

        packPokemon.push(data)
    }

    loader.classList.remove('loader')
}

//Filter pokemon by input
findPokemonInput.addEventListener('input', (e) => {

    const inputText = e.target.value.toLowerCase().trim()

    const filterArr = packPokemon.filter(pokemon => {

        if (!inputText) {
            return true
        }

        const pokemonName = pokemon.name.toLowerCase()
        pokemonName.includes(inputText)
        
        return pokemonName.includes(inputText)

    })

    renderPokemon(filterArr)

})


//Create render pokemon
const renderPokemon = (pokemonArray) => {
    containert.innerHTML = ''
    let count = 0

    pokemonArray.forEach(pokemon => {
        
        const { id, name, types, sprites: { front_shiny, front_default } } = pokemon

        const element1 = types[0].type.name
        const element2 = (types[1]?.type.name) ? ` - ${types[1]?.type.name}` : '';
        const element1Fixes = element1.charAt(0).toUpperCase() + element1.slice(1);
        const nameFixes = name.charAt(0).toUpperCase() + name.slice(1);
        
        const randon =  Math.floor(Math.random() * 77)
        const randomPokemon = randon == 1 ? front_shiny : front_default
        const classShiny = randon == 1 ? 'is-shiny' : '';

        if(randon == 1) count++

        containert.innerHTML += `
        <div class='container2 ${element1} ${classShiny} '>  
            <h2 class='text'>${nameFixes} </h2>    
            <p class='no'>${id} <p>
            <img src="${randomPokemon}">
            <p class="type">${element1Fixes}${element2}</p>
         </div>
    ` ;

    });

    countText.innerHTML = (count > 0) ? `Congratulations ! You got: <strong>${count}</strong>  Shiny !!` : ''

}

//Start first view
const initApp = async () => {
    await getPokemons(1, 251)//Introduce the start pokemon  and the finale
    renderPokemon(packPokemon)
}

initApp()
