import React, {useState, useEffect} from "react";

// Components
import { Sprites } from './Sprites';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  },[])

  console.log('caracter: ', characters)

  return(
    <div>
      {characters.map(character => (
        <Sprites pokemonName={character.name} />
        //<h2>{ character.name }</h2>
      ))}
    </div>
  )
}

export default Characters;