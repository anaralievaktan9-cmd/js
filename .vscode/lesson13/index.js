let container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((pokemon) => {
      container.innerHTML += `
                <div class="card">
                    <h2>${pokemon.name}</h2>
                    <img src="${pokemon.sprites.front_default}">
                </div>
            `;
    });
}
