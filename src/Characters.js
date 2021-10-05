import React, {useState, useEffect} from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=200')
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  },[])

  return(
    <div>
      {characters.map(character => (
        <h2>{character.name}</h2>
      ))}
      <h2>{}</h2>
    </div>
  )
}

export default Characters;