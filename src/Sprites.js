import React, { useEffect, useState } from 'react';

export const Sprites = ({ pokemonName }) => {
  const [sprites, setSprites] = useState([]);

  useEffect(() => (
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => setSprites(data))
  ), []);
  console.log('sprites: ', sprites);

  return (
    <div>
      {`Hello ${pokemonName}`}
      <img src={sprites.sprites.front_default} alt="PokemonImg"/>
    </div>
  )
}