import React, {useState, useEffect} from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

useEffect(()=>{
     fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=200')
       .then(response => response.json())
       .then(data => setCharacters(data.results))
},[])


  console.log(characters)

  return(
    <div className='contents'>
      {characters.map(character => (
        <article>
          <div className='text'>
            <h3>{character.name}</h3>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Characters;