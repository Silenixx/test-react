import React from "react";
import DisplayCharacter from "../DisplayCharacter";

class Characters extends React.Component {
    state = {
        characters: [],
        isLoaded: false
    }
    getCharacters = () => {
        fetch("https://swapi.dev/api/people/")
            .then(response => response.json())
            .then(data => {
                this.setState({ characters: data.results, isLoaded: true });
                console.log(data.results); // Affiche les résultats de l'API
            })
            .catch(error => console.error("Erreur lors de la récupération des données :", error));

    }

    componentDidMount () {
        this.getCharacters();
    }
    render () {
        const { characters, isLoaded } = this.state;
        return (
            <>
            {
                isLoaded ? <p>Données chargées</p> : <p>Chargement des données</p>
            }
            <div>
                

                
                {
                    characters.map(
                        character => console.log(character) ||
                        <DisplayCharacter key={character.id} character={character} />
                    )
                }
                
            </div>
            </>
        );
    }
}


export default Characters;