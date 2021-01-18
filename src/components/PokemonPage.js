import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
    .then(r => r.json())
    .then(response => setPokemon(response))
  }, [])

  const filterPokemon = pokemon.filter(poke => poke.name.includes(searchTerm))

  // function handleSearch(){
  //   console.log("asdf")
  // }

  function newPokemon(newPoke){

    console.log("yeet")
    setPokemon([...pokemon, newPoke ])
  }
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm newPokemon={newPokemon}/>
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <br />
      <PokemonCollection pokemon={filterPokemon}/>
    </Container>
  );
}

export default PokemonPage;
