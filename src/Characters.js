import React, {useState, useEffect} from "react";

// Components
import { Sprites } from './Sprites';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
    //fetch('https://pokeapi.co/api/v2/pokemon/12')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  },[])

  console.log('caracter: ', characters)

  return(
    <div>
      {characters.map(character => (
        <Sprites pokemonName={character.name} />
      ))}
    </div>
  )

  /*return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(gif => {
            return <div>
              <h4>{gif.title}</h4>
              <small>{gif.id}</small>
              <img alt={gif.title} scr={gif.url} />
            </div>
          })
        }
      </section>
    </div>
  );*/

}

export default Characters;