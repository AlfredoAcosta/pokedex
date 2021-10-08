import React, { useEffect, useState } from 'react';

export const Sprites = ({ pokemonName }) => {
  const [sprites, setSprites] = useState([]);

  useEffect(() => (
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonName}`)
      .then(response => response.json())
      .then(data => setSprites(data))
  ), []);

  console.log(pokemonName)

  return (
    //console.log({sprites.sprites.back_default})
    <div>
      {sprites?.sprites
        ?
          <img src={sprites?.sprites?.back_default} alt="PokemonImg"/>
        : <p>Loading...</p>
      }

      {sprites?.version_group
        ?
          <img src={sprites?.sprites?.front_default} alt="PokemonImg"/>
        : <p>Loading...</p>
      }
    </div>
  )
}


