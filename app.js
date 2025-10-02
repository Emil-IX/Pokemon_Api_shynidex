
const charaters = ['mario', 'luigi', 'yoshi', 'toad', 'peach'];
const newchars = charaters.filter( ch => ch.length == 4 )
const newchars2 = charaters.map( ch => ch + '!' )




//funcion para contar

const contarVocales = function(texto) {
    let vocales = 'aeiou'

 return  texto
   .toLowerCase()
   .split('')
   .filter( letras  => vocales.includes(letras)).length
}



const cuerpo = document.querySelector('body')
const encabezdo = document.createElement('h1')
encabezdo.textContent = "Charater list:"
cuerpo.appendChild(encabezdo) 


const componente = document.createElement('ol')
cuerpo.appendChild(componente)


const newCharaters = charaters.map( ch => ch.charAt(0).toUpperCase() + ch.slice(1) )
newCharaters.push('Daisy', 'Bowser', 'Wario', 'Waluigi' , 'Rosalina', 'Toadette', 'Birdo' , 'Diddy Kong', 'King K. Rool', 'Funky Kong')

newCharaters.forEach(ch => {
   
   const li = document.createElement('li')   
   li.textContent = ch
   componente.appendChild(li)
})




