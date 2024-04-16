// Function to fetch and display random Pokemon
function getRandomPokemon() {
  const randomPokemonId = Math.floor(Math.random() * (1025 - 1 + 1)) + 1;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const pokemonInfo = document.querySelector('.pokemon-info');
      pokemonInfo.innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <img src="${data.sprites.front_default}" alt="${data.name}">
          `;
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });

}

// Event listener for the button
const randomButton = document.getElementById('random');
randomButton.addEventListener('click', getRandomPokemon);

getRandomPokemon();