// Each pokemon has a number. Change the number in the source to find a new pokemon. 
// This is the source for the pokemon images: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


const pokemonButton = document.querySelector('#pokemonButton')
const cardImage = document.querySelector('#cardImage')
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'




pokemonButton.addEventListener ('click', function() {
    for (let i= 1; i < 152; i++){
        const newImage = document.createElement('img');
    newImage.src = `${baseUrl}${i}.png`
    cardImage.appendChild(newImage)
    }

})

