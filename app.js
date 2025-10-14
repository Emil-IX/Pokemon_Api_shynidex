
const containert = document.getElementById('container')
const findPokemonInput = document.getElementById('findPokemon')

let packPokemon = []


//Fet pokemon from pokeApi
const getPokemons = async (base = 1, limit = 9) => {

    for (base; base <= limit; base++) {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${base}`)
        const data = await response.json()
 
        packPokemon.push(data)
    }
}

//Filter pokemon by input
findPokemonInput.addEventListener('input', (e) => {

    const inputText = e.target.value.toLowerCase().trim()

    const filterArr = packPokemon.filter(pokemon => {

        if (!inputText) {
            return true
        }

        const pokemonName = pokemon.name.toLowerCase()
            
        return pokemonName.includes(inputText)

    })

    renderPokemon(filterArr)

})


//Create render pokemon
const renderPokemon = (pokemonArray) => {
    containert.innerHTML = ''

    pokemonArray.forEach(pokemon => {

        const { id, name, types, sprites: { front_shiny, front_default } } = pokemon

        const element1 = types[0].type.name
        const element2 = (types[1]?.type.name) ? ` - ${types[1]?.type.name}` : '';
        const element1Fixes = element1.charAt(0).toUpperCase() + element1.slice(1);
        const nameFixes = name.charAt(0).toUpperCase() + name.slice(1);

        containert.innerHTML += `
        <div class='container2'>  
            <h2 class='text'>${nameFixes} </h2>    
            <p class='no'>${id} <p>
            <img src="${front_shiny}">
            <p class="type">${element1Fixes}${element2}</p>
         </div>
    ` ;

    });

}

//Start first view
const  initApp = async () => {
    await getPokemons(1, 251)//Introduce the start pokemon  and the finale
    renderPokemon(packPokemon)
}

initApp()
