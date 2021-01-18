import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({newPokemon}) {

  const [pokeData, setPokeData] =useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",

  })

  function handleChange(event){
    setPokeData({
      ...pokeData, 
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(){
    // preventDefault();

    const data = {
      name: pokeData.name,
      hp: pokeData.hp,
      sprites: {
        front: pokeData.frontUrl,
        back: pokeData.backUrl,
      }
    }

    fetch(`http://localhost:3001/pokemon`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(newPoke => newPokemon(newPoke))
    
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
          handleSubmit()
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" 
          value={pokeData.name}
          onChange={handleChange}
          />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" 
          value={pokeData.hp}
          onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokeData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokeData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
