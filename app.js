// Each pokemon has a number. Change the number in the source to find a new pokemon. 
// This is the source for the pokemon images: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


const pokemonButton = document.querySelector('#pokemonButton')
const cardImage = document.querySelector('#cardImage')
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

//let set = false;


pokemonButton.addEventListener ('click', function() {
    const newImage = document.getElementById('pokeImage');
    newImage.src = `${baseUrl}${(Math.floor(Math.random()*152))}.png`;
    cardImage.appendChild(newImage)
        

})


resetButton.addEventListener('click', function(){
    
//document.getElementById('pokeImage').src = '';
document.getElementById('pokeImage').remove('');


}) 



