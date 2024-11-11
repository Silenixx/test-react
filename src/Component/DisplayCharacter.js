import React from "react";

const DisplayCharacter = ({character}) => {
    return(
    <div>
    <p key={character.id}>
        {character.name} apparu dans {character.films.length} films
    </p>
    </div>)

}

export default DisplayCharacter;