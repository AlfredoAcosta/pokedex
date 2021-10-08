import React, { useState, useEffect } from 'react';

export const Location = ({ pokemonName }) => {
  const [Location, setLocation] = useState([]);

  useEffect(() => (
    fetch(`https://pokeapi.co/api/v2/region/${pokemonName}`)
    .then(response => response.json())
    .then(data => setLocation(data))
  ), []);

  //console.log( "Prueba: ", Location)

  return(
    <div>
      {
        Location
        ? <p>{ Location?.name } </p>
        : <p>Loading...</p>
      }
    </div>
  )
}

