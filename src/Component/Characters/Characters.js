import React from "react";

class Characters extends React.Component {
    state = {
        characters: [],
    }
    getCharacters = () => {
        fetch("https://swapi.dev/api/planets/")
            .then(response => response.json())
            .then(data => {
                this.setState({ characters: data.results });
                console.log(data.results); // Affiche les résultats de l'API
            })
            .catch(error => console.error("Erreur lors de la récupération des données :", error));

    }

    componentDidMount () {
        this.getCharacters();
    }
    render () {
        return (
            <div>
                

                
                {
                    this.state.characters.map(
                        character => 
                        <p key={character.id}>
                            {character.name}
                        </p>
                    )
                }
                
            </div>
        );
    }
}


export default Characters;