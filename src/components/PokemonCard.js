import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {


  // "id": 2,
  // "name": "ivysaur",
  // "hp": 60,
  // "sprites": {
  //   "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  //   "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
  // }

  return (
    <Card>
      <div>
        <div className="image">
          <img src={poke.sprites.front} alt={poke.name}/>
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
