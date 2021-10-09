import React, { useEffect, useState } from 'react';

// Utils
import { fetchData } from './utils';

export const Sprites = ({ pokemonName }) => {
  const [sprites, setSprites] = useState([]);

 const [selected, setSelected] = useState('front_default')

  useEffect(() => (
    fetchData(`https://pokeapi.co/api/v2/pokemon-form/${pokemonName}`, setSprites)
  ), [pokemonName]);

  const onChangeImg = () => {
    if (selected === 'front_default') {
      setSelected('back_default');
    } else {
      setSelected('front_default');
    }
  }

  return (
    <div>
      <img class="center" src={sprites?.sprites?.[selected]} alt="PokemonImg" />

      {/* {sprites?.version_group
        ?
          profiles.back_profile
        : <p>Loading...</p>
      } */}

      <div>
        <button onClick={onChangeImg} class="myButton">Rotate</button>
      </div>

    </div>
  )
}


