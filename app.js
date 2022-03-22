// Each pokemon has a number. Change the number in the source to find a new pokemon. 
// This is the source for the pokemon images: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const div = document.createElement('div');
div.innerHTML = `<section class="section">
<nav class="level">
    <div class="level-item has-text-centered">
      <div>
<h1 class="title ">My Pokemon App</h1>
</nav>
<div class="columns">
    <div class="column is-one-third">
    </div>
    <div  class="column is-one-third">
        <div  class="card">
            <div class="card-image">
              <figure id="cardImage" class="image is-4by3">
                <img  src="https://cdn.dribbble.com/users/458522/screenshots/2836818/media/2270b839abc833ef3002be3d1d4ec99d.jpg?compress=1&resize=800x600&vertical=top" alt="Placeholder image">
                <img id='pokeImage'  alt="">
              </figure>
            </div>
            <div class="card-content">
                <nav class="level">
                    <div class="level-item has-text-centered">
                      <div>
                <div class="media-content">
                  <p class="title is-4">Choose Your Pokemon</p>
                  <button id ="pokemonButton"class="button is-link is-rounded">Choose</button>
                  <button id ="resetButton"class="button is-link is-rounded">Reset </button>

                </div>
              </div>
              </nav>
            </div>
          </div>
        </div>
    <div class="column is-one-third">
    </div>
    
</div>  
</section>`
document.body.append(div);

const pokemonButton = document.querySelector('#pokemonButton')
const cardImage = document.querySelector('#cardImage')
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

pokemonButton.addEventListener ('click', function() {
    const newImage = document.getElementById('pokeImage');
    newImage.src = `${baseUrl}${(Math.floor(Math.random()*152))}.png`;
    cardImage.appendChild(newImage)
})

resetButton.addEventListener('click', function(){  
    document.getElementById('pokeImage').remove('');
}) 

