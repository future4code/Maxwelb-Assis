import React, {useState, useEffect} from "react";
import axios from "axios";

export function PokeCard() {
  const [pokemon, setPokemon] = useState({})
  

    useState(() => {  
    if (prevProps.pokemon !== props.pokemon) {
      pegaPokemon(props.pokemon);
    }
  }, [prevProps])


 
  pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        this.setState({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  
    const pokemon = this.state.pokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }


export default PokeCard;
