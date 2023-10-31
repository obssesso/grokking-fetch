const fetchPokemon = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    if (!response.ok) {
      console.log("Something went wrong");
      return;
    }
    console.log(response);
    const responseJSON = await response.json();
    console.log(responseJSON.sprites.other["official-artwork"].front_default);
  } catch (error) {
    console.log(error);
  }
};

fetchPokemon("pikachu");
