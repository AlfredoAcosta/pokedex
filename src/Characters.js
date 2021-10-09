import React, {useState, useEffect} from "react";
import './Content.css'

// Components
import { Sprites } from './Sprites';
import { Location } from "./Location";

// Utils
import { fetchData } from './utils';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    // fetchData('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0', setCharacters, 'initial')
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  },[])

  return(
    <div className='contents'>
      {characters.map(character => (
          <article>
            <Sprites pokemonName={character.name} />
            <div className='text'>
              {<h3>{character.name}</h3>}
            </div>
          </article>
      ))}
    </div>
  )
}

export default Characters;