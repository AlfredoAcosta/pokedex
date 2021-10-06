import React, { useEffect, useState } from 'react';

export const Sprites = ({ pokemonName }) => {
  const [sprites, setSprites] = useState([]);

  useEffect(() => (
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonName}`)
      .then(response => response.json())
      .then(data => setSprites(data))
  ), []);

  return (
    //console.log({sprites.sprites.back_default})
    <div>
      {`Hello ${pokemonName}`}
      <img src={sprites.sprites.back_default} alt="PokemonImg"/>
    </div>
  )
}