import React, {useState, useEffect} from "react";
import './Content.css'

// Components
import { Sprites } from './Sprites';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
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
              <h3>{character.name}</h3>
            </div>
          </article>
       // <Sprites pokemonName={character.name} />
        // <h2>{ character.name }</h2>
      ))}
    </div>
  )
}

export default Characters;