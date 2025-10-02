


const getOnePokemons = async (pokemon) => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const data = await response.json()

    const { id, name,types , sprites: {front_shiny, 
front_default
}  } = data
    
    console.log(data)

    
    const element1 = types[0].type.name
    const element2 = (types[1]?.type.name) ? ` - ${types[1]?.type.name}` :''

    const body = document.getElementById('tbody')
    body.innerHTML += `
    <tr>
        <td>${id} </td>
        <td> <img src="${front_default}"></td>
        <td> <img src="${front_shiny}"></td>
        <td>${name} </td>
        <td>${element1}${element2}</td>
    </tr>
    
    
    ` 


}


//getPnePokemons(15)


const getPokemons = async (base=1,limit=9) => {


    for(base  ; base <= limit ; base++) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${base}`)

    const data = await response.json()

    const { id, name,types , sprites: {front_shiny, front_default}} = data
    
    console.log(data)

    
    const element1 = types[0].type.name
    const element2 = (types[1]?.type.name) ? ` - ${types[1]?.type.name}` :'';

    const element1Fixes = element1.charAt(0).toUpperCase() + element1.slice(1);
    const nameFixes = name.charAt(0).toUpperCase() + name.slice(1);


    const body = document.getElementById('container')
    body.innerHTML += `
    <div class='container2'>  
        <h2 class='text'>${nameFixes} </h2>    
        <p class='no'>${id} <p>
        <img src="${front_shiny}">
        <p class="type">${element1Fixes}${element2}</p>
    </div>
    
    ` ;

    }




}

getPokemons(1,1000) 