import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {


  const pokemonMapped = pokemon.map((pokemon) => (
    <PokemonCard 
    key={pokemon.id}
    poke={pokemon}
    />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
        {pokemonMapped}
    </Card.Group>
  );
}

export default PokemonCollection;
