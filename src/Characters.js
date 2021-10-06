import React, {useState, useEffect} from "react";

// Components
import { Sprites } from './Sprites';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

<<<<<<< HEAD
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  },[])
=======
useEffect(()=>{
     fetch('https://pokeapi.co/api/v2/pokemon?limit=25&offset=200')
       .then(response => response.json())
       .then(data => setCharacters(data.results))
},[])


  console.log(characters)
>>>>>>> d68333c5e6aa4a8a6af9b47f8f2129c4d4bf9a88

  console.log('caracter: ', characters)

  return(
    <div className='contents'>
      {characters.map(character => (
        <Sprites pokemonName={character.name} />
        //<h2>{ character.name }</h2>
      ))}
    </div>
  )
}

export default Characters;